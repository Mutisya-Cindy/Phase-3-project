from db import cursor, conn

class Booking:
    TABLE_NAME = "bookings"

    def __init__(self, issue_description, date, plumber_id=None, user_id=None):
        self.id = None
        self.issue_description = issue_description
        self.date = date
        self.plumber_id = plumber_id
        self.user_id = user_id

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (issue_description, date, plumber_id, user_id)
          VALUES (?, ?, ?, ?)
        """
        cursor.execute(sql, (self.issue_description, self.date, self.plumber_id, self.user_id))
        conn.commit()
        self.id = cursor.lastrowid
        print(f"Booking with issue description '{self.issue_description}' saved")

    @classmethod
    def create_table(cls):
        sql_drop = f"DROP TABLE IF EXISTS {cls.TABLE_NAME}"
        cursor.execute(sql_drop)

        sql_create = f"""
        CREATE TABLE {cls.TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            issue_description TEXT NOT NULL,
            date TEXT NOT NULL,
            plumber_id INTEGER,
            user_id INTEGER,
            FOREIGN KEY(plumber_id) REFERENCES plumbers(id),
            FOREIGN KEY(user_id) REFERENCES users(id)
        )
        """
        cursor.execute(sql_create)
        conn.commit()
        print(f"Bookings table created successfully")

Booking.create_table()


bookings_data = [("Leaking faucet", "2024-06-15", 8, 1), 
                 ("Clogged drain", "2024-06-16", 2, 7), 
                 ("Broken pipe", "2024-06-17", 4, 5)] 
for issue_description, date, plumber_id, user_id in bookings_data:
    booking = Booking(issue_description, date, plumber_id, user_id)
    booking.save()
