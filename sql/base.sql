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
	endeerecotel VARCHAR(700),
	PRIMARY KEY (guid)
);

CREATE TABLE cad_vagas(
	guid INT NOT NULL AUTO_INCREMENT,
	guid_cidade INT NOT NULL,
	descricao VARCHAR(550) NOT NULL,
	qtde INT NOT NULL DEFAULT 1;
	data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	sexo INT NOT NULL DEFAULT 0,
	NS INT NOT NULL,
	PRIMARY KEY (guid),
	FOREIGN KEY (guid_cidade) REFERENCES cad_cidades (guid)
	ON UPDATE CASCADE
	ON DELETE CASCADE
);

CREATE TABLE cad_anuncios (
	guid INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(100) NOT NULL,
	imagem VARCHAR(750) NOT NULL,
	PRIMARY KEY (guid)
);

CREATE TABLE sys_key (
	chave VARCHAR(255)
)
