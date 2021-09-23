import sqlite3
from dataclasses import dataclass
from sqlite3.dbapi2 import connect

@dataclass
class Note:
    id: int = None
    title: str = None
    content: str = ''

class Database:
    def __init__(self, name: str) -> None:
        self.name = name
        self.conn = sqlite3.connect(f"{name}.db")
        self.conn.execute("CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY, title TEXT, content TEXT NOT NULL);")

    def add(self, note: Note):
        self.conn.execute(f"INSERT INTO note (title, content) VALUES ('{note.title}', '{note.content}');")
        self.conn.commit()

    def get_all(self):
        note_list = []
        cursor = self.conn.execute("SELECT id, title, content FROM note")
        for linha in cursor:
            note_list.append(Note(linha[0], linha[1], linha[2]))
        return note_list

    def update(self, entry: Note):
        self.conn.execute(f"UPDATE note SET title = '{entry.title}', content = '{entry.content}' WHERE id = '{entry.id}'")
        self.conn.commit()
    
    def delete(self, note_id: int):
        self.conn.execute(f"DELETE FROM note WHERE id = '{note_id}'")
        self.conn.commit()