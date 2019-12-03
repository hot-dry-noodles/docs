class DatabaseAppsRouter(object): 
    """
    subways/models.py => subwaydb, others => default
    """
    def db_for_read(self, model, **hints):
        if model._meta.app_label == 'subways':
            return 'subwaydb'
        return 'default'

    def db_for_write(self, model, **hints):
        if model._meta.app_label == 'subways':
            return 'subwaydb'
        return 'default'
    
    def allow_relation(self, obj1, obj2, **hints):
        if obj1._meta.app_label == 'subways' and obj2._meta.app_label == 'subways':
            return True
        # Allow if neither is subways app
        elif 'subways' not in [obj1._meta.app_label, obj2._meta.app_label]: 
            return True
        return False
    
    def allow_syncdb(self, db, model):
        if db == 'subwaydb' or model._meta.app_label == "subways":
            return False # we're not using syncdb on our legacy database
        else: # but all other models/databases are fine
            return True
