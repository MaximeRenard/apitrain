# APItrain
## Project api of training / backend: Langage nodejs/Express/mysql
Node.js is a JavaScript-based platform for server-side and networking applications.

## First table
### mysql --user=renard --password Athletes_base
CREATE TABLE Athletes(
			Athleteid int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    		LastName varchar(20) NOT NULL,
    		FirstName varchar(20)NOT NULL,
    		Address varchar(255),
    		City varchar(50) NOT NULL
    		)ENGINE=InnoDB DEFAULT CHARSET=utf8;
### mysql> SELECT * FROM Athletes;
Empty set (0,02 sec)
### npm install express mysql2 cors --save
### Dvt PORT et create Modify table in server

### Authors : Maxime RENARD
#### Date 09/10/24
##### Dvt : Front and site with carreer
###### Connexion
