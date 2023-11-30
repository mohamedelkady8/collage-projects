Alter TABLE customer ADD room_number number(10) ;

Alter table customer ADD constraint room_number12
Foreign key (room_number)
REFERENCES room (room_number) ; 



DELETE FROM customer; 






INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(37,'Lili','bloom','Tag_Elroasaa_St_aba_Basha',40,857646845,1 );


INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(38,'Austin','Dustin','Rruga_Dibres_Nd',77,759793739, 2);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(39,'Aria','Stark','Rruga_Irfan_Tomini_P_Vala_Kompani_Ish_nshrak',46,73746436, 3);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(40,'Maria','Lark','Rruga_Teodor_Keko_Tirana',35,34662326,4 );

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(41,'Maria','Lark','Rruga_Teodor_Keko_Tirana',35,34662326, 5);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(42,'Kate','shawman','Rruga_Irfan_Tomini_P_Vala_Kompani_Ish_nshrak',44,36643643, 6);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(43,'Anne','kuthburt','Davidschlag',56,454577444, 7);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(44,'Mark','Tompson','Markt_Muggauberg',23,664747457, 8);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)
values(45,'Sally','Drake','Blindorf',47,573576337, 9) ;

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(55,'Sally','Drake','Blindorf',47,01254344578, 10);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(1,'ahmed','ahmed','ain_shams_cairo_egypt',32,01234216566, 11);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(2,'ayman','tarek','saad_zaglol_cairo_egypt',24,01233451290, 12);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(3,'sara','khaled','maadi_city_cairo_egypt',46,01156433356, 13);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(4,'mohamed','nabil','new_cairo_cairo_egypt',31,01287754201, 14);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(5,'ayman','tarek','elshahid_stcairo_egypt',50,01244456898, 15);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(6,'Maha','essam','portsaid_egypt',20,01287653123, 16);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(7,'mona','farid','la_bella_rue_paris_france',20,0155678544, 17);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(8,'emad','fawzy','ahmed_bn_abdelaziz',36,01099906556, 18);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(9,'mai','hany','alex_egypt',26,01554302914, 19);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(10,'hassan','walid','port_said_egypt',77,01234453209, 20);

INSERT INTO customer 
(customer_id,first_name,last_name,address,age,mobile_number,ROOM_NUMBER)

values(11,'mariam','fady','time_square_new_york_usa',28,01286654307, 20);
COMMIT;
