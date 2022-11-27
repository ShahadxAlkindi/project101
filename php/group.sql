
DROP DATABASE IF EXISTS groupw;

CREATE DATABASE groupw;

USE groupw;

CREATE TABLE credits
(
   ID varchar(100),
   name varchar(100),
   pages varchar(100)
);

INSERT INTO credits (ID,name,pages) VALUES ('U21105659','Shahad Rashid Alkindi','Main Page and Menu Page');
INSERT INTO credits (ID,name,pages) VALUES ('U20200286','Hamad Ali ','Book a Table Page and Location Page');
INSERT INTO credits (ID,name,pages) VALUES ('U18200157','Hazza Alnaqbi ','Events Page and Gallery Page');
INSERT INTO credits (ID,name,pages) VALUES ('U18105456 ','Ali Faisal ','Private Dining Page and Contact Us Page');
INSERT INTO credits (ID,name,pages) VALUES ('U20201510','Mohammed Rashid Alzaabi ','Reviw Page and Newsletter Page');
INSERT INTO credits (ID,name,pages) VALUES ('U19200003','Sultan Alnaqbi ','Catering Page');


