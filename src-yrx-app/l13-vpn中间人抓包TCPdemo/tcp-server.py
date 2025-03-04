"""


"""


import socketserver

class MyTCPHandler(socketserver.BaseRequestHandler):
    def handle(self):
        self.data = self.request.recv(1024).strip()
        print(f"{self.client_address[0]} 写入: {self.data}")
        self.request.sendall(self.data.upper())

if __name__ == "__main__":
    HOST, PORT = "172.20.10.7", 9999
    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        server.serve_forever()