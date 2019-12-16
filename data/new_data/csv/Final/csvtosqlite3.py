import pandas
import csv, sqlite3
conn= sqlite3.connect('E:\\Projects\\Git\\hot-dry-noodles\\docs\\data\\new_data\\csv\\Final\\db.sqlite3')
df = pandas.read_csv('E:\\Projects\\Git\\hot-dry-noodles\\docs\\data\\new_data\\csv\\Final\\booking_line.csv')
df.to_sql('booking_line', conn, if_exists='append', index=False)
print('ok')