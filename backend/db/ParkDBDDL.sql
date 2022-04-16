CREATE DATABASE parkdb;
\c parkdb;


-- Creating structure for table User
CREATE TABLE  user_account (
  userid SERIAL PRIMARY KEY ,
  username varchar(60) NOT NULL,
  useremail varchar(100) NOT NULL,
  userphone double precision NOT NULL,
  password varchar(100) NOT NULL,
  profilepic varchar(100) Default NULL
);


CREATE TABLE  states (
  state_id SERIAL PRIMARY KEY ,
  state_name varchar(60) NOT NULL
);

CREATE TABLE  cities (
  city_id SERIAL PRIMARY KEY ,
  city_name varchar(60) NOT NULL,
  state_id integer REFERENCES states (state_id) NOT NULL
);


CREATE TABLE  parking_lot (
  lot_id SERIAL PRIMARY KEY ,
  lot_name varchar(60) NOT NULL,
  lot_address varchar(200) NOT NULL,
  lot_phone double precision NOT NULL,
  lot_capacity integer NOT NULL,
  lot_emptylots integer Default NULL,
  lot_fulllots integer Default NULL,
  city_id    integer REFERENCES cities (city_id) NOT null,
  state_id   integer REFERENCES states (state_id) NOT NULL
  );

CREATE TABLE vehicle_category (
  id SERIAL PRIMARY KEY,
  vehicle_type varchar(60) NOT NULL,
  bookingfee_perhr double precision NOT NULL
);

-- Creating structure for table Transaction
CREATE TABLE booking (
  booking_id SERIAL PRIMARY KEY,
  booking_time TIMESTAMP DEFAULT NOW(),
  vehicle_type integer  REFERENCES vehicle_category (id) NOT null,
  vehicle_regnumber varchar(60) NOT NULL,
  booking_from_time TIMESTAMP NOT NULL,
  booking_duration_hr integer NOT NULL Default 1,
  booking_amount double precision NOT NULL,
  userid integer REFERENCES user_account (userid) NOT null,
  lot_id integer REFERENCES parking_lot (lot_id) NOT null
) ;

-- Creating table for tokens

CREATE TABLE tokens(
  tokenid SERIAL PRIMARY KEY,
  token varchar(256) NOT NULL,
  created_time TIMESTAMP NOT NULL Default CURRENT_TIMESTAMP,
   userid integer REFERENCES user_account (userid) NOT null
);
