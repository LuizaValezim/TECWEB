import json

def extract_route(requisicao):
    lista1 = requisicao.split('GET /')
    lista2 = lista1[0].split(' ')
    return lista2[0]

def read_file(path):

    caminho = str(path).split('.')

    string = ''

    if caminho[-1] in ["txt", "css", "js", "html" ]:
        with open (path, 'rt') as file:
            text = file.read()
            return text

    else:
        with open(path, 'rb') as file:
            binary = file.read()
            return binary

def load_data(jasson):
    filePath = 'data/' + jasson
    with open (filePath, 'rt', encoding='utf8') as text:
            content = text.read()
            contentPython = json.loads(content)
            return contentPython

def load_template(filePath):
    file = open('templates/' + filePath)
    content = file.read()
    file.close()
    return content