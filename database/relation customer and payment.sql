Alter TABLE payment ADD customer_id number(10) ;



Alter table payment ADD constraint
customer_ID13
Foreign Key(customer_id)
REFERENCES customer 
(customer_id) ;

DELETE FROM payment ;

INSERT INTO payment 
(Payment_number,payment_method, payment_date, payment_amount ,customer_id)
Values(1,'cash','12 December 2012' ,30.00,1);

INSERT INTO payment 
(Payment_number,payment_method, payment_date, payment_amount,customer_id)
Values( 2,'cash','09 January 2018' ,15.00,2);


INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 3,'visa','12 October 2019',20.00,3);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 4,'cash','03 April 2012' ,40.00,4);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 5,'installment','06 April 2021' ,80.00,5);

INSERT INTO payment 
(payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 6,'cash','09 october 2019',50.00,6);


INSERT INTO payment 
(payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 7,'master card','13 February 2022 ',23.00,7);


INSERT INTO payment 
(payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 8,'visa','06 August 2019' ,28.00,8);


INSERT INTO payment 
(payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 9,'master card','01 September 2021' ,65.00,9);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 10,'cash','04 February 2018',100.00,10);


INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 11,'installment','10 May 2019',123.00 , 11);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 12,'installment','03 july 2022' ,45.00 , 37);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 13,'cash','12 April 2018',55.00,38);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 14,'visa','11 August 2010' ,65.00,39);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 15,'pay pal','04 March 2009',54.00,40);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 16,'cash','03 May 2019 ' ,56.00,41);

INSERT INTO payment 
(Payment_number, payment_method, payment_date, payment_amount,customer_id)
Values( 17,'cash','08 April 2013' ,55.00,42);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 18,'installment','10 September 2022',44.00,43);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values( 19,'master card','08 April 2013',43.00,44);

INSERT INTO payment 
(Payment_number, payment_method,payment_date,payment_amount,customer_id)
Values(20,'Visa','09 june 2008' ,80.00,45);


COMMIT;
