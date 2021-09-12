from pathlib import Path
from database import Database, Note
from typing import List

def load_database() -> Database:
    return Database("banco")

def extract_route(request: str) -> str:
    route = request.split("\n")[0].split()[1]

    return route[1:]

def read_file(path: Path) -> str:
    for suffix in ["*.txt", "*.html", "*.css", "*.js"]:
        if path.match(suffix): 
            with open(path, "r", encoding="utf-8") as file:
                return file.read().encode()
    
    with open(path, "rb") as file:
        return file.read()

def build_response(body: str = '', code: int = 200, reason: str = 'OK', headers: str = ''):
    if headers != '': return f"HTTP/1.1 {code} {reason}\n{headers}\n\n{body}".encode()
    
    return f"HTTP/1.1 {code} {reason}\n\n{body}".encode()

def load_data(database: Database) -> List[Note]:
    return database.get_all()

def add_note(database: Database, title: str, content: str) -> None:
    new_note = Note(0, title, content)
    database.add(new_note)

def remove_note(database: Database, note_id: int) -> None:
    database.delete(note_id)

def update_note(database: Database, note_id: int, title: str, content: str) -> None:
    updated_note = Note(note_id, title, content)
    database.update(updated_note)

def load_template(file_name: str) -> str:
    with open(f"client/{file_name}", "r", encoding="utf-8") as file:
        return file.read()