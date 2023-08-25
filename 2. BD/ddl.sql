insert into tb_cliente( nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
				values( ?, ?, ?, ?, ?);
                
                
	 update 	tb_cliente
		set		nm_clinte = ?,
				ds_email = ?,
                ds_telefone = ?,
                ds_cpf = ? ,
                ds_cnh = ?
		where 	id_cliente = ?;
        
delete from 	tb_cliente
	  where		id_cliente = ?;
                
                
select  	id_clinte as id,
			nm_cliente as nome,
            ds_email as email,
            ds_telefone as telefone,
            ds_cpf as CPF,
            ds_cnh as CNH
from 		tb_clinte;
                
                
select  	id_clinte as id,
			nm_cliente as nome,
            ds_email as email,
            ds_telefone as telefone,
            ds_cpf as CPF,
            ds_cnh as CNH
from 		tb_clinte
where		nm_nome = ?;