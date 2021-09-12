import sqlite3
from dataclasses import dataclass
from typing import List

@dataclass
class Note:
    id: int = None
    title: str = None
    content: str = ''

class Database:
    def __init__(self, name: str) -> None:
        self.conn = sqlite3.connect(f"{name}.db")
        self.conn.execute("CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY, title TEXT, content TEXT NOT NULL);")

    def add(self, note: Note) -> None:
        self.conn.execute(f"INSERT INTO note (title,content) VALUES ('{note.title}','{note.content}');")
        self.conn.commit()

    def delete(self, note_id: int) -> None:
        self.conn.execute(f"DELETE FROM note WHERE id = {note_id}")
        self.conn.commit()

    def update(self, entry: Note) -> None:
        self.conn.execute(f"UPDATE note SET title = '{entry.title}', content = '{entry.content}' WHERE id = {entry.id}")
        self.conn.commit()
    
    def get_all(self) -> List[Note]:
        search = self.conn.execute("SELECT id, title, content FROM note")
        return [Note(note[0], note[1], note[2]) for note in search] 