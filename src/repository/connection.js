import mysql2 from 'mysql2/promise';


const connection = await mysql2.createConnection({
    host: "127.0.0.1",
    user: "root" ,
    password: "1234" ,
    database: "infoB_db" 
})

console.log('BD conectado!!!');

export default connection;