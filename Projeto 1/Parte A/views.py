from utils import load_template
import urllib
from database import Database, Note

def index(request):
    db = Database('banco_notas')

    if request.startswith('POST'):
        request = request.replace('\r', '') 
        partes = request.split('\n\n')
        corpo = partes[1]
        if corpo.split("=")[0] == 'delete':
            id_int = int(corpo.split("=")[1])
            db.delete(id_int)

        else:
            params = {}
            for chave_valor in corpo.split('&'):
                if chave_valor.startswith("titulo"):
                    params["titulo"] = urllib.parse.unquote_plus(chave_valor[chave_valor.find("=")+1:], encoding="utf-8", errors="replace")
                if chave_valor.startswith("detalhes"):
                    params["detalhes"] = urllib.parse.unquote_plus(chave_valor[chave_valor.find("=")+1:], encoding="utf-8", errors="replace")

            db.add(Note(title=params["titulo"], content=params["detalhes"]))
            
    note_template = load_template('components/note.html')
    notes_li = [
        note_template.format(title=dados.title, details=dados.content, id=dados.id)
        for dados in db.get_all()
    ]
    notes = '\n'.join(notes_li)

    return load_template('index.html').format(notes=notes).encode()

def error():
    return load_template('error404.html').format().encode()