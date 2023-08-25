import connection from "./connection.js";


export async function inserir( cliente ){
    const comando = 
    `insert into tb_cliente( nm_cliente, ds_email, ds_telefone, ds_cpf, ds_cnh)
                    values( ?, ?, ?, ?, ?)`;

    let [dados] = await connection.query( comando , [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.cpf,
        cliente.cnh
    ]);
    
    cliente.id = dados.insertID;
    return cliente;
            
};

export async function alterar( cliente , id){
    const comando = 
    `	 update 	tb_cliente
         set		nm_clinte = ?,
                    ds_email = ?,
                    ds_telefone = ?,
                    ds_cpf = ? ,
                    ds_cnh = ?
        where       id_cliente = ?`

     let [dados] = await connection.query( comando , [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.cpf,
        cliente.cnh,
        id
     ])
     let linha= dados.affectedRows;
     return linha
}

export async function deletar( id ){
    const comando = 
    `   delete from 	tb_cliente
        where		    id_cliente = ?`

    let [dados] = await connection.query( comando , [id])

    let linha= dados.affectedRows;
    return linha
}

export async function consultar(){
    const comando = 
    `select  	id_clinte as id,
                nm_cliente as nome,
                ds_email as email,
                ds_telefone as telefone,
                ds_cpf as CPF,
                ds_cnh as CNH
    from 		tb_clinte`

    let [dados] = connection.query( comando );
    return dados
}

export async function consultarporNome( nome ){
    const comando = 
    `select  	id_clinte as id,
                nm_cliente as nome,
                ds_email as email,
                ds_telefone as telefone,
                ds_cpf as CPF,
                ds_cnh as CNH
    from 		tb_clinte
    where       nm_nome = ?`

    let [dados] = connection.query( comando, ['%' + nome + '%'] );
    return dados
}