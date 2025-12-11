import { Sequelize } from "sequelize";

const db = new Sequelize(
    "projetobarbearia",
    "projetobarbearia_user",
    "rOvRN6WUnM6s7GVtxG10VOteoIDVBZWB",
    {
        host: "dpg-d4tanochg0os73cq0nrg-a.oregon-postgres.render.com",
        dialect: "postgres",
        port: "5432",
        dialectOptions: {
            ssl: { require: true, rejectUnauthorized: false },
        }
    }
);

db.authenticate().then(function(){
    console.log("Conectado ao banco de dados com sucesso")
}).catch(function(erro){
    console.log("Erro ao conectar com o banco de dados " + erro)
});

export default db;
