-- Active: 1656277622131@@127.0.0.1@3306@dhgram

CREATE DATABASE vestuario
    DEFAULT CHARACTER SET = 'utf8mb4';
USE vestuario;


CREATE TABLE `usuarios` (  
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`nome` varchar(100) NOT NULL,
`sobrenome` varchar(100) NOT NULL,
`email` varchar(150) NOT NULL,
`senha` varchar(150) NOT NULL,
`cpf` varchar(15) NOT NULL,
`telefone` varchar(50) NOT NULL,
`cep` INT(10) NOT NULL,
`cidade` varchar(50) NOT NULL,
`estado` char(2) NOT NULL,
`rua` varchar(200) NOT NULL,
`bairro` varchar(200) NOT NULL,
`numero` INT(10) NOT NULL,
`complemento` TEXT,
`isAdmin` BOOLEAN,
PRIMARY KEY (`id`)
);
CREATE TABLE `categoria` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`nome_categoria` VARCHAR(50) NOT NULL,
PRIMARY KEY (`id`)
);

 CREATE TABLE `vendas` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`usuario_id` int(10) UNSIGNED NOT NULL,
`data` DATETIME,
`valor` DECIMAL (5, 2) UNSIGNED NOT NULL,
PRIMARY KEY (`id`),
/* KEY `vendas_usuario_id_foreign` (`usuario_id`), */
CONSTRAINT `vendas_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
);

CREATE TABLE `produto`(
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`nome` varchar (100) NOT NULL,
`preco` DECIMAL (5, 2) NOT NULL,
`tamanho` VARCHAR (50) NOT NULL,
`cor` VARCHAR (50) NOT NULL,
`imagem` VARCHAR (200) NOT NULL,
`estoque` INT (10) NOT NULL,
`categoria_id` INT(10) UNSIGNED NOT NULL,
`descricao` TEXT,
PRIMARY KEY (`id`),
    CONSTRAINT `produto_categoria_foreign`  FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
);

CREATE TABLE `produtos_venda` (
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`venda_id` INT(10) UNSIGNED NOT NULL,
`produto_id` INT(10) UNSIGNED NOT NULL,
PRIMARY KEY (`id`),
KEY `produtos_venda_venda_id_foreign` (`venda_id`),
CONSTRAINT `produtos_venda_venda_id_foreign` FOREIGN KEY (`venda_id`) REFERENCES `vendas` (`id`),
CONSTRAINT `produtos_venda_produto_id_foreign` FOREIGN KEY (`produto_id`) REFERENCES `produto` (`id`)
);

INSERT INTO produto(nome,preco, tamanho, descricao,estoque,cor, imagem, categoria_id)
VALUES (
  'Camisa azul 2', 120,'G','Camisa cor Azul, confortável, ótima oportunidade',
  20, 'Azul', 'img/produtoExibicao/1656274840114-teste.jpg', 1
);
INSERT INTO produto(nome,preco, tamanho, descricao,estoque,cor, imagem, categoria_id)
VALUES (
  'Camisa azul', 150,'M','Camisa cor Azul, confortável, ótima oportunidade',
  10, 'Azul', 'img/camisa_1.jpeg', 2
);

USE vestuario;


INSERT INTO categoria(nome_categoria)
VALUES (
  'camisa'
);
SELECT * FROM produto;

ALTER TABLE usuarios
ADD senha varchar(255) NOT NULL;

INSERT INTO usuarios(nome,sobrenome,email,cpf,telefone,cep,cidade,estado,rua,bairro,numero,isAdmin,senha)
VALUES (
   'Lucas', 'Andrade', 'lucas@admin.com', '1111111', '7199999999', '4000000', 'salvador', 'BA',
    'Rua', 'Bairro', 100, true, '$2b$10$amXk.Rqcvev2Enz8FKXuzur9Zp/OSYtK61NFlobEljVsvPnTaNXDC'
);

SELECT * FROM usuarios;

CREATE TABLE `endereco` (
  `cep` int(10) NOT NULL,
  `cidade` VARCHAR(50) NOT NULL,
  `rua` VARCHAR(200) NOT NULL,
  `bairro` VARCHAR(200) NOT NULL,
  `numero` int(10) NOT NULL,
  `Complemento` text(200)
)