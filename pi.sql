
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