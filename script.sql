Drop database if exists food;
create database food;
use food;

-- User Credentials table creation
create table usercredentials(
username varchar(255) default 'name',
password varchar(255),
primary key(username)
);

-- product table creation
create table product(
pid int auto_increment,
name varchar(255),
category varchar(255),
amount double,
img longblob,
status varchar(255),
primary key(pid)
);

-- order table creation
create table ordertable(
oid int auto_increment,
username varchar(255),
pid int,
primary key(oid),
constraint u_fk foreign key(username) references usercredentials(username),
constraint p_fk foreign key(pid) references product(pid)
);

-- Offer table Creation
create table offer(
oid int auto_increment,
code varchar(255),
offer int,
primary key(oid)
);



