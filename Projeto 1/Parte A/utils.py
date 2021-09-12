from pathlib import Path
import json

def extract_route(request):
    return request.split()[1][1:]

request_test = ""\
"GET /img/logo-getit.png HTTP/1.1 \n"\
"Host: 0.0.0.0:8080 \n"\
"Connection: keep-alive \n"\
"Accept: image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5 \n"\
"User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Safari/605.1.15 \n"\
"Accept-Language: en-us \n"\
"Referer: http://0.0.0.0:8080/ \n"\
"Accept-Encoding: gzip, deflate"

def read_file(filepath):
    if filepath.suffix in ['.txt', '.html', '.css', '.js']:
        mode = 'rb'
    else:
        mode = 'rb'

    with open(filepath, mode=mode) as f:
        return f.read()

def build_response(body='', code=200, reason='OK', headers=''):
    if headers:
        headers=f"\n{headers}"
    response = f"HTTP/1.1 {code} {reason}{headers}\n\n{body}".encode()
    return response

def load_data(path):
    with open ("data/{}".format(path), "r") as arquivo:
        conteudo = arquivo.read()
    return json.loads(conteudo)

def load_template(path):
    with open ("templates/{}".format(path), "r", encoding='UTF-8') as arquivo:
        conteudo = arquivo.read()
    return conteudo