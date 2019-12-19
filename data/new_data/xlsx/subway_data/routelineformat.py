# -- coding: utf-8 --

import re

st = '1a2b3d4'

def convert(s):

    if len(s) != 1:    
        temp = re.findall(r'[0-9]+|[a-z]+', s)
        list_line = list()
        list_terminal = list()
        for i in iter(temp):
            if i.isdigit():
                i = int(i)
                list_terminal.append(i)
            else:
                list_line.append(i)
        list_terminal = list(map(lambda x : x + 1, list_terminal))

    return list_line, list_terminal

a, b = convert(st)
print(a, b)

def findRoute(start_name, end_name):
    
    # check start_id in BOOKING_STATION using start_name
    
    # check end_id in BOOKING_STATION using end_name
    
    # check route 'sr' in BOOKING_ROUTE using start_id & end_id
    
    lines = list()
    terminals = list()
    lines, terminals = convert(sr)

    # check i(linename) for i in lines in BOOKING_LINE

    # check j(terminalname) for j in terminals in BOOKING_STATION
    
        
