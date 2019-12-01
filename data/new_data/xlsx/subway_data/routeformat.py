import openpyxl

terminal_num = 198

filePath = 'distance_route_price.xlsx'
wb = openpyxl.load_workbook(filePath)
sheet = wb['sheet1']

for i in range(terminal_num * terminal_num):
    ori_route = str(sheet.cell(i + 1, 6).value)
    temp_route = ori_route[1:-1]
    terminal_line_list = temp_route.split(', ')
    current_route = ''
    for t in range(len(terminal_line_list) - 1):
        current_route += str(terminal_line_list[t])
        line = findLine(terminal_line_list[t], terminal_line_list[t + 1])
        current_route += str(line)
    current_route += str(terminal_line_list[-1])
    sheet.cell(i + 1, 6).value = current_route

print('finished!')
wb.save(filePath)