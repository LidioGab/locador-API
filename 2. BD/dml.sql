create table tb_cliente(
						id_cliente					int primary key auto_increment,
                        nm_cliente					varchar(100) not null,
                        ds_email					varchar(100) not null,
                        ds_telefone					varchar(100) not null,
                        ds_cpf						varchar(100) not null,
                        ds_cnh						varchar(100) not null
                        );
                        