CREATE DATABASE vagasemprego;

USE vagasemprego;

CREATE TABLE cad_user(
	guid INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	usuario VARCHAR(500) NOT NULL,
	senha	VARCHAR(500) NOT NULL,
	nivel INT NOT NULL DEFAULT 0,
	PRIMARY KEY (guid)
);

CREATE TABLE cad_cidades(
	guid INT NOT NULL AUTO_INCREMENT,
	descricao VARCHAR(550) NOT NULL,
	PRIMARY KEY (guid)
);

CREATE TABLE cad_vagas(
	guid INT NOT NULL AUTO_INCREMENT,
	guid_cidade INT NOT NULL,
	descricao VARCHAR(550) NOT NULL, 
	NS INT NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY (guid_cidade) REFERENCES cad_cidades (guid)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);