import pandas
import csv, sqlite3
conn= sqlite3.connect(r'E:\Projects\Git\hot-dry-noodles\data\new_data\csv\subwaydata.db3')
df = pandas.read_csv(r'E:\Projects\Git\hot-dry-noodles\data\new_data\csv\distance_route_price.csv')
df.to_sql('distance_route_price', conn, if_exists='append', index=False)
print('ok')