# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class coding_line(models.Model):
    linecode = models.CharField(db_column = u'linecode', max_length = 50 )
    linename = models.CharField(db_column = u'linename', max_length = 50)
    
    class Meta:
        db_table = u'coding_line'

class coding_terminal(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    
    class Meta:
        db_table = u'coding_terminal'

class transfer_terminal(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    
    class Meta:
        db_table = u'transfer_terminal'

class distance_route_price(models.Model):
    startcode = models.CharField(db_column = u'startcode', max_length = 50)
    startname = models.CharField(db_column = u'startname', max_length = 50)
    endcode = models.CharField(db_column = u'endcode', max_length = 50)
    endname = models.CharField(db_column = u'endname', max_length = 50)
    distance = models.DecimalField(db_column = 'distance', max_digits = 8, decimal_places = 4)
    route = models.TextField(db_column = 'route')
    sitenum = models.CharField(db_column = 'sitenum', max_length = 50)
    price = models.CharField(db_column = 'price', max_length = 50)

    class Meta:
        db_table = u'distance_route_price'

class line1(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line1'

class line2(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line2'

class line3(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line3'

class line4(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line4'

class line6(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line6'

class line7(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line7'

class line8(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line8'

class line11(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line11'

class line12(models.Model):
    terminalcode = models.CharField(db_column = u'terminalcode', max_length = 50)
    terminalname = models.CharField(db_column = u'terminalname', max_length = 50)
    linecode = models.ForeignKey("coding_line", db_column = u'linecode', on_delete = models.CASCADE)
    linename = models.CharField(db_column = u'linename', max_length = 50)
    firsttime = models.DateTimeField(db_column = u'firsttime')
    lasttime = models.DateTimeField(db_column = u'lasttime')
    wfirsttime = models.DateTimeField(db_column = u'wfirsttime')
    wlasttime = models.DateTimeField(db_column = u'wlasttime')
    adjacentdistance = models.DecimalField(db_column = u'adjacentdistance', max_digits = 8, decimal_places = 4)

    class Meta:
        db_table = u'line12'
    