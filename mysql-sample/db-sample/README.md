### Setting up MySQL Database and User
'''shell
mysql -u root
'''

'''sql
create database sampledb22;
create user sampleuser22 identified with sql_natice_password by 'samplepass22';
grant all priviledges on sampledb22.* to sampleuser22;
flush privileges;
'''