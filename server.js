const express=require ('express');
const mysql = require('mysql2');

const mysql_config=require('.mysql_config/');

const app = express();

app.listen(3000,()=>{
    console.log('Servidor em execução');
})

//criando a execução
const connection = mysql.createConnection(mysql_config);

//definindo uma rota

app.get('/',(req,res)=>{
    //criano um objeto result para todos os endpoints da api
    let result ={
        status: "sucesso",
        message: null,
        data: null
    }
    //fazendo a conexão
    connection.query('SELECT * FROM tasks',(err,result,fields)=>{
        //cuidar do erro
        if(err){
            result.status = 'erro';
            result.message = 'Erro na obtenção das tarefas';
            result.data = [];
            //res.send(result);
            res.json(result);
        }else{
            result.status = 'sucesso';
            result.message = 'Tarefas obtidas com sucesso';
            result.data = [];
             //res.send(result);
            res.json(result);
        }
    })
})