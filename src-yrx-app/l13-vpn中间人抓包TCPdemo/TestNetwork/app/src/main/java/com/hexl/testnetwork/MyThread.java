package com.hexl.testnetwork;

import android.util.Log;

public class MyThread extends Thread{
    private static final String TAG = "yuanrenxue";
    @Override
    public void run() {
        while (true){
            super.run();
            Log.d(TAG, "MyThread ........");
            try {
                Thread.sleep(5000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }


}
