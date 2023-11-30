CREATE TABLE employee (
  employer_id number(20),
  employer_name varchar(50),
  address varchar(50),
  mobile_number number(12),
  job_description varchar(50),
  salary number(10),
  PRIMARY KEY (employer_id)
);

CREATE TABLE customer (
  customer_id number(20),
  first_name varchar(50),
  last_name varchar(50),
  address varchar(50),
  mobile_number number(12),
  age number(3),
  PRIMARY KEY (customer_id)
);

CREATE TABLE room (
  room_number number(10),
  room_type varchar(50),
  room_capacity varchar(50),
  room_status varchar(50),
  PRIMARY KEY (room_number)
);

CREATE TABLE payment (
  payment_number number(20),
  payment_date date,
  payment_method varchar(50),
  payment_amount number(20),
  PRIMARY KEY (payment_number)
);

