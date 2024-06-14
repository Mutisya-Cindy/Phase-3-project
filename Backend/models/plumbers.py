from db import cursor, conn

class Plumber:
    TABLE_NAME = "plumbers"

    def __init__(self, name, contact, service_areas):
        self.id = None
        self.name = name
        self.contact = contact
        self.service_areas = service_areas

    def save(self):
        sql = f"""
        INSERT INTO {self.TABLE_NAME} (name, contact, service_areas)
          VALUES (?, ?, ?)
        """
        cursor.execute(sql, (self.name, self.contact, self.service_areas))
        conn.commit()
        self.id = cursor.lastrowid
        print(f"{self.name} saved")

    def calculate_average_rating(self):
        sql = f"""
        SELECT AVG(rating) FROM ratings WHERE plumber_id = ?
        """
        cursor.execute(sql, (self.id,))
        result = cursor.fetchone()
        return result[0] if result[0] is not None else 0

    @classmethod
    def create_table(cls):
        sql_drop = f"DROP TABLE IF EXISTS {cls.TABLE_NAME}"
        cursor.execute(sql_drop)

        sql_create = f"""
        CREATE TABLE {cls.TABLE_NAME} (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            contact TEXT NOT NULL,
            service_areas TEXT NOT NULL
        )
        """
        cursor.execute(sql_create)
        conn.commit()
        print(f"Plumbers table created successfully")

Plumber.create_table()

plumber_data = [("John", "0789078952", "Nairobi"), ("Peter", "0789654372", "Machakos"), ("Cindy", "0705590873", "Mombasa")]
for name, contact, service_areas in plumber_data:
    plumber = Plumber(name, contact, service_areas)
    plumber.save()
