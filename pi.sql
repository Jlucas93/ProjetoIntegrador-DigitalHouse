-- Active: 1656277622131@@127.0.0.1@3306@vestuario

/* Criando tabelas do Banco*/
CREATE TABLE `usuarios` (  
`id` int(10) unsigned NOT NULL AUTO_INCREMENT,
`nome` varchar(100) NOT NULL,
`sobrenome` varchar(100) NOT NULL,
`email` varchar(150) NOT NULL,
`senha` varchar(150) NOT NULL,
`cpf` varchar(15) NOT NULL,
`telefone` varchar(50) NOT NULL,
`cep` varchar(50) NOT NULL,
`cidade` varchar(50) NOT NULL,
`estado` varchar(100) NOT NULL,
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
KEY `vendas_usuario_id_foreign` (`usuario_id`),
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

CREATE TABLE `endereco` (
  `cep` int(10) NOT NULL,
  `cidade` VARCHAR(50) NOT NULL,
  `rua` VARCHAR(200) NOT NULL,
  `bairro` VARCHAR(200) NOT NULL,
  `numero` int(10) NOT NULL,
  `Complemento` text(200)
);

/*Primeiro vamos usar o banco*/
USE `vestuario`;
/*Cadastrando usuário padrão*/
INSERT INTO `usuários`(id, nome, sobrenome, email,cpf,telefone,cep,cidade,estado,
rua,bairro,numero,complemento,isAdmin,senha) 
VALUES(10,'Administrador', '', 'admin@admin.com', '123.456.789-00','São Paulo',
 'São Paulo', 'Avenida Paulista','Centro', 25, 'Avenina paulista 25', true, '123456');

INSERT INTO `categoria`(id, nome_categoria)
VALUES(1, 'masculino');
/*Criando as categorias para usarmos no produto*/
INSERT INTO `categoria`(id, nome_categoria)
VALUES(1, 'masculino');
INSERT INTO `categoria`(id, nome_categoria)
VALUES(2, 'feminino');
INSERT INTO `categoria`(id, nome_categoria)
VALUES(3, 'calcados');
INSERT INTO `categoria`(id, nome_categoria)
VALUES(4, 'acessorios');

/*Cadastrando nosso produtos Masculino*/
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(1,'Camisa Masculina','P|M|G','Branca','img/camisaMasculina.jpeg',100,1,
'Camisa branca, masculina, confortável', 85);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(2,'Camisa Masculina','P|M|G','Azul marinho','img/camisaMasculina1.jpg',100,1,
'Camisa lisa, masculina, confortável', 100);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(3,'Camisa Masculina','P|M|G','Branca','img/camisaMasculina2.jpg',100,1,
'Camisa branca, masculina, confortável', 110);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(4,'Camisa Masculina','P|M|G','Preta','img/camisaMasculina3.jpg',100,1,
'Camisa lisa preta, masculina, confortável', 93);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(5,'Blusão Masculino','M|G','Preta','img/blusaoMasculino.png',20,1,
'Blusa de frio preta masculina, confortável e elegante', 150);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(6,'Blusão Masculino','M|G','Preta','img/blusaoMasculino1.jpg',23,1,
'Casaco preto masculino, liso e com capuz para protger a cabeça', 160);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(7,'Blusão Masculino','M|G','Preta','img/blusaoMasculino2.png',7,1,
'Sueter masculino quadriculado sem mangas', 82);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(8,'Blusão Masculino','P|M|G','Preta','img/blusaoMasculino3.png',7,1,
'Sueter masculino estampado com mangas tema natalino', 103);

/*Cadastrando nosso produtos Femininos*/
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(9,'Shortinho','P|M|G','Preta','img/BermudaFeminina1.png',23,2,
'Shortinho feminino estampado, confortável,ótimo para o verão', 76);

INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(10,'Shortinho','P|M|G','Rosa','img/BermudaFeminina2.png',11,2,
'Shortinho feminino lisa, confortável,ótimo para o verão e bem elegante', 73);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(11,'Shortinho','P|M|G','Preta','img/BermudaFeminina1.png',13,2,
'Shortinho feminino lisa, confortável,ótimo para o verão', 69);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(12,'Blusa feminina','P|M|G','Preta','img/BlusaFeminina.png',23,2,
'Blusa feminina estampada, confortável,perfeita para dias quentes', 110);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(13,'Blusa feminina','P|M|G','Rosa','img/BlusaFeminina2.png',13,2,
'Blusa feminina lisa, confortável,perfeita para dias quentes', 105);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(14,'Blusa feminina','P|M|G','estampada','img/BlusaFeminina3.png',13,2,
'Blusa feminina estampada, confortável,perfeita para dias quentes', 105);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(15,'Blusa feminina','P|M|G','Branca','img/BlusaFeminina4.png',28,2,
'Blusa feminina lisa cor branca, confortável,perfeita para dias quentes', 146);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(16,'Calça feminina','P|M|G','Jeans','img/CalcaFeminina.png',53,2,
'Calça feminina jeans, confortável e com estampas', 146);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(17,'Calça feminina','P|M|G','Beje','img/CalcaFeminina1.png',53,2,
'Calça feminina, confortável e lisa', 146);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(18,'Calça feminina','P|M|G','Marrom','img/CalcaFeminina2.png',53,2,
'Calça feminina de tecido, confortável e lisa', 146);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(19,'Calça feminina Jeans','P|M|G','Jeans','img/CalcaFeminina3.png',120,2,
'Calça feminina jeans, confortável para você que tem estilo', 136);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(20,'Moletom feminino','P|M|G','Branco','img/MoletomFeminino.png',95,2,
'Moletom feminino, confortável para se agasalhar do frio com estilo', 153);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(21,'Moletom feminino','P|M|G','Branco','img/MoletomFeminino1.png',95,2,
'Moletom feminino, confortável para se agasalhar do frio com estilo', 180);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(22,'Moletom feminino','P|M|G','Verde','img/MoletomFeminino2.png',95,2,
'Moletom feminino liso, confortável para se agasalhar do frio', 123);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(23,'Moletom feminino','P|M|G','Branco','img/MoletomFeminino3.png',95,2,
'Moletom feminino esampado, confortável para se agasalhar do frio com estilo', 153);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(24,'Moletom feminino','P|M|G','Marrom','img/MoletomFeminino4.png',95,2,
'Moletom feminino liso , confortável para se agasalhar do frio com classe', 145);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(25,'Moletom feminino','P|M|G','Azul','img/MoletomFeminino5.png',26,2,
'Moletom feminino liso com desenhos , confortável para se agasalhar do frio', 85);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(26,'Vestido Feminino','P|M|G','Azul','img/vestidoFeminino.jpg',6,2,
'Vestido feminino liso, elegante e simples', 195);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(28,'Vestido Feminino','P|M|G','Verde','img/vestidoFeminino2.webp',6,2,
'Vestido feminino estampado, elegante e simples e longo', 187);
/*Cadastrando nosso Acessórios*/
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(29,'Gravata Borboleta','Único','Rosa','img/gravata.jpg',36,4,
'Gravata masculina borboleta', 50);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(30,'Cinto com fivela','Médio','Beje','img/cintoFeminino.png',29,4,
'Cinto feminino', 63);
/*Cadastrando nosso Calçados*/
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(31,'Sapato salto alto','33-36','Verde','img/calcado_01.jpg',29,3,
'Sapato feminino de salto alto', 96);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(32,'All star','33-36','Azul','img/calcado_2.jpg',36,3,
'Sapato unissex', 105);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(33,'Sapato masculino','33-36','Marrom','img/calcado_3.jpg',26,3,
'Sapato masculino marrom para ocasiões mais elegantes', 153);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(34,'All star','33-36','Azul','img/calcado_4.jpg',36,3,
'Sapato unissex', 105);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(35,'Sapato Masculino','33-42','Preto','img/calcado_5.jpg',36,3,
'Sapato preto para ocasiões mais esportivas', 105);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(36,'Sapato feminino','33-36','Beje','img/calcado_6.jpg',62,3,
'Sapato feminino de salto alto', 78);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(37,'Sapato feminino','33-36','Rosa','img/calcado_7.jpg',62,3,
'Sapato feminino de salto alto', 78);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(38,'Sapato Masculino','36-42','Marrom','img/calcado_8.jpg',36,3,
'Sapato preto para ocasiões mais esportivas', 105);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(39,'Sapato feminino','33-36','Vermelho','img/calcado_7.jpg',62,3,
'Sapato feminino de salto alto', 98);
INSERT INTO `produto`(id, nome,tamanho,cor,imagem,estoque,categoria_id,descricao,preco)
VALUES(40,'Bota feminina','33-36','Preto','img/calcado_10.jpg',7,3,
'Bota feminina', 123);



select * from `produto`