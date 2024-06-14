from db import cursor, conn

class User:
    TABLE_NAME = "users"

    def __init__(self, username, email, plumber_id=None):
        self.id = None
        self.username = username
        self.email = email
        self.plumber_id = plumber_id

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (username, email, plumber_id)
          VALUES (?, ?, ?)
        """
        cursor.execute(sql, (self.username, self.email, self.plumber_id))
        conn.commit()
        self.id = cursor.lastrowid
        print(f"User {self.username} saved")

    @classmethod
    def create_table(cls):
        sql_drop = f"DROP TABLE IF EXISTS {cls.TABLE_NAME}"
        cursor.execute(sql_drop)

        sql_create = f"""
        CREATE TABLE {cls.TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL,
            plumber_id INTEGER
        )
        """
        cursor.execute(sql_create)
        conn.commit()
        print(f"Users table created successfully")

User.create_table()


users_data = [("Adan", "adan@gmail.com", 1), ("Tess", "tess123@icloud.com", 2), ("Tet", "tet@yahoo.com", 3)]
for username, email, plumber_id in users_data:
    user = User(username, email, plumber_id)
    user.save()
