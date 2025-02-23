package com.hexl.testnetwork;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.HttpURLConnection;
import java.net.InetAddress;
import java.net.Socket;
import java.net.URL;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okio.BufferedSink;

public class MainActivity extends AppCompatActivity {
    private static final String TAG = "yuanrenxue";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

//        new MyThread().start();


        Thread thread = new Thread(new Runnable() {
            @Override
            public void run() {
                while(true){
                    try {
                        Log.d(TAG, "start send http");
//                        GetByOkHttp("https://missking.cc/");
//                        GetByOkHttp("http://www.baidu.com/");
//                        GetByOkHttp("https://www.baidu.com/");
//                        GetByHttpURL("http://10.ip138.com");
//                        GetByHttpURL("https://missking.cc/");
//                        GetByHttpURL("http://missking.cc/");
                        Thread.sleep(3000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        });
        thread.start();

        new Thread(new Runnable() {
            @Override
            public void run() {

                try {
                    while(true){
                        Log.d(TAG, "start send tcp");
                        DoTcp();
//                        DoUdp();
                        Thread.sleep(5000);
                    }
                } catch (InterruptedException e) {
                    Log.d(TAG, "DoTcp error: " + e.getMessage());
                    e.printStackTrace();
                } catch (IOException e) {
                    Log.d(TAG, "DoTcp error: " + e.getMessage());
                    e.printStackTrace();
                }
            }
        }).start();
    }

    public static void GetByHttpURL(final String url) {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    String resultData="";
                    URL connUrl=new URL (url);
                    HttpURLConnection urlConn= (HttpURLConnection)connUrl.openConnection ();
                    InputStreamReader in=new InputStreamReader(urlConn.getInputStream());
                    BufferedReader buffer=new BufferedReader (in);
                    String inputLine=null;
                    while (((inputLine=buffer.readLine()) !=null)) {
                        resultData+=inputLine+"\n";
                    }
                    in.close();
                    urlConn.disconnect();
                    Log.d(TAG, "GetByHttpURL "+resultData);
                } catch (Exception e) {
                    Log.d(TAG, "GetByHttpURL error "+e.getMessage());
                    e.printStackTrace();
                }
            }
        }).start();
    }

    public static void GetByOkHttp(String url) {
        try {
            OkHttpClient okHttpClient = new OkHttpClient();
            RequestBody requestBody = new FormBody.Builder().add("a", "b").build();
            final Request request = new Request.Builder()
                    .url(url)
//                    .post(requestBody)
                    .get()//默认就是GET请求，可以不写
                    .build();
            Call call = okHttpClient.newCall(request);
            call.enqueue(new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    Log.d(TAG, "onFailure: ", e);
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    Log.d(TAG, "GetByOkHttp onResponse: " + response.body().string());
                }
            });
        } catch (Exception e) {
            Log.d(TAG, "GetByOkHttp error "+e.getMessage());
            e.printStackTrace();
        }
    }


    public static void DoTcp() throws IOException, InterruptedException {
        Log.d(TAG, "DoTcp bind tcp");
        Socket socket = new Socket("172.20.10.7", 9999);
        socket.setSoTimeout(10000);
        //发送数据给服务端
        OutputStream outputStream = socket.getOutputStream();
        outputStream.write("hello,tcp server".getBytes("UTF-8"));
        Thread.sleep(2000);
        socket.shutdownOutput();
        //读取数据
        BufferedReader br = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        String line = br.readLine();
        //打印读取到的数据
        Log.d(TAG, "tcp server recv:" + line);
        br.close();
        socket.close();

    }

    public static void DoUdp() throws IOException {
        /*
         * 向服务器端发送数据
         */
        // 1.定义服务器的地址、端口号、数据
        InetAddress address = InetAddress.getByName("192.168.31.240");
        byte[] data = "hello,udp server".getBytes();
        // 2.创建数据报，包含发送的数据信息
        DatagramPacket packet = new DatagramPacket(data, data.length, address, 5200);
        // 3.创建DatagramSocket对象
        DatagramSocket socket = new DatagramSocket();
        // 4.向服务器端发送数据报
        socket.send(packet);

        /*
         * 接收服务器端响应的数据
         */
        // 1.创建数据报，用于接收服务器端响应的数据
        byte[] data2 = new byte[1024];
        DatagramPacket packet2 = new DatagramPacket(data2, data2.length);
        // 2.接收服务器响应的数据
        socket.receive(packet2);
        // 3.读取数据
        String reply = new String(data2, 0, packet2.getLength());
        Log.d(TAG, "udp server recv:" + reply);
        // 4.关闭资源
        socket.close();
    }
}