import sqlite3
from dataclasses import dataclass

@dataclass
class Note:
    id: int = None
    title: str = None
    content: str = ''

class Database:
    def __init__(self, nome):
        self.conn = sqlite3.connect(nome + '.db')
        self.conn.execute('CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY, title TEXT, content TEXT NOT NULL);')
        self.conn.commit()

    def add(self, note):
        self.conn.execute(f"INSERT INTO note (title, content) VALUES ('{note.title}','{note.content}')")
        self.conn.commit()

    def get_all(self):
        cursor = conn.execute("SELECT id, title, content FROM note")
        notes = []
        for linha in cursor:
            notes.append(Note(linha[0], linha[1], linha[2]))
        return notes
    
    def update(self, entry):
        self.conn.execute(f"UPDATE note SET title = '{entry.title}', content = '{entry.content}' WHERE id = '{entry.id}'")
        self.conn.commit()

    def delete(self, note_id):
        self.conn.execute(f"DELETE FROM note WHERE '{note_id}'")
        self.conn.commit()