import express from "express";
import Agendamento from "./agendamentos.js";
import cors from "cors";
import path from "path";    

const app = express();

app.use(cors());

app.use(express.json());

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname,"public")));

app.get("/agendamentos", async (req, res)=>{
    try {
        const showAgendamentos = await Agendamento.findAll();
        res.send(showAgendamentos);
    } catch (error) {
        res.send("Erro ao buscar os dados no banco:" + error);
    }
});

app.post('/agendamentos', (req, res)=>{
    try {
        Agendamento.create(
            {
                nome: req.body.nome,
                telefone: req.body.telefone,
                servico: req.body.servico,
                data: req.body.data,
                horario: req.body.horario
            }
        );
        res.send("agendamento realizado com sucesso");
    } catch (error) {
        res.send("erro ao cadastrar o agendamento " + error);
    }
});

app.patch("/agendamentos/:id", async (req, res) => {
    try {
        await Agendamento.update(
            {
                nome: req.body.nome,
                telefone: req.body.telefone,
                servico: req.body.servico,
                data: req.body.data,
                horario: req.body.horario
            },
            { where: { id: req.params.id }}
        );
        res.send("Agendamento atualizado com sucesso!");
    } catch (erro) {
        res.send("Erro ao atualizar o agendamento: " + erro);
    }
});

app.delete("/agendamentos/:id", async (req, res) =>{
    try {
        await Agendamento.destroy({
            where: { id: req.params.id}
        });
        res.send("Agendamento deletado com sucesso!");
    } catch (erro) {
        res.send("Erro ao deletar agendamento: " + erro);
    }
});

app.listen(3000, function(){
    console.log("O servidor está rodando na porta 3000");
});