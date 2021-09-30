import socket
from pathlib import Path
from utils import extract_route, read_file
from views import index, error, tecweb

CUR_DIR = Path(__file__).parent
SERVER_HOST = 'localhost'
SERVER_PORT = 8080

server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_socket.bind((SERVER_HOST, SERVER_PORT))
server_socket.listen()

print(f'Servidor escutando em (ctrl+click): http://{SERVER_HOST}:{SERVER_PORT}')

while True:
    client_connection, client_address = server_socket.accept()

    request = client_connection.recv(1024).decode()
    print(request)

    route = extract_route(request)

    filepath = CUR_DIR / route
    if filepath.is_file():
        response = read_file(filepath)
    elif route == 'tecweb' or route == request:
        response = tecweb()
    elif route == '':
        response = index(request)
    else:
        response = error()

    client_connection.sendall('HTTP/1.1 200 OK\n\n'.encode() + response)

    client_connection.close()