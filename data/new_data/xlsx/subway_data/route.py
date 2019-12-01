# -*- coding: utf-8 -*-

import openpyxl
import networkx as nx

terminal_num = 198
row_count = 0

filePath = 'distance_route_price.xlsx'
wb = openpyxl.load_workbook(filePath)
sheet = wb['sheet1']

line1Path = 'line1.xlsx'
line1wb = openpyxl.load_workbook(line1Path)
line1sheet = line1wb['sheet1']

line2Path = 'line2.xlsx'
line2wb = openpyxl.load_workbook(line2Path)
line2sheet = line2wb['sheet1']

line3Path = 'line3.xlsx'
line3wb = openpyxl.load_workbook(line3Path)
line3sheet = line3wb['sheet1']

line4Path = 'line4.xlsx'
line4wb = openpyxl.load_workbook(line4Path)
line4sheet = line4wb['sheet1']

line6Path = 'line6.xlsx'
line6wb = openpyxl.load_workbook(line6Path)
line6sheet = line6wb['sheet1']

line7Path = 'line7.xlsx'
line7wb = openpyxl.load_workbook(line7Path)
line7sheet = line7wb['sheet1']

line8Path = 'line8.xlsx'
line8wb = openpyxl.load_workbook(line8Path)
line8sheet = line8wb['sheet1']

line11Path = 'line11.xlsx'
line11wb = openpyxl.load_workbook(line11Path)
line11sheet = line11wb['sheet1']

line12Path = 'line12.xlsx'
line12wb = openpyxl.load_workbook(line12Path)
line12sheet = line12wb['sheet1']


#
def addEdge(G, _sheet):
    """ add all edges of a sheet """
    for i in range(_sheet.max_row - 1):
        start = _sheet.cell(i + 1, 2).value
        end = _sheet.cell(i + 2, 2).value
        distance = _sheet.cell(i + 2, 8).value
        G.add_edge(start, end, weight=distance)
        G.add_edge(end, start, weight=distance)
    return G


def Dijkstra(G, start, end):
    RG = G.reverse()
    dist = {}
    previous = {}
    for v in RG.nodes():
        dist[v] = float('inf')
        previous[v] = 'none'
    dist[end] = 0
    u = end
    while u != start:
        u = min(dist, key=dist.get)
        distu = dist[u]
        del dist[u]
        for u, v in RG.edges(u):
            if v in dist:
                alt = distu + RG[u][v]['weight']
                if alt < dist[v]:
                    dist[v] = alt
                    previous[v] = u
    path = (start,)
    last = start
    while last != end:
        nxt = previous[last]
        path += (nxt,)
        last = nxt
    return path


G = nx.DiGraph()
G = addEdge(G, line1sheet)
G = addEdge(G, line2sheet)
G = addEdge(G, line3sheet)
G = addEdge(G, line4sheet)
G = addEdge(G, line6sheet)
G = addEdge(G, line7sheet)
G = addEdge(G, line8sheet)
G = addEdge(G, line11sheet)
G = addEdge(G, line12sheet)

counter = 0
run = 0
for i in range(terminal_num * terminal_num):
    start = sheet.cell(i + 1, 1).value
    end = sheet.cell(i + 1, 3).value
    route = Dijkstra(G, start, end)
    sheet.cell(i + 1, 6).value = str(route)
    sheet.cell(i + 1, 7).value = len(route) - 1
    counter += 1

    if counter == 198:
        print('run ', run, 'finished!')
        run += 1
        counter = 0

print('finished!')
wb.save(filePath)
