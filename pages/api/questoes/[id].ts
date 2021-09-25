import questoes from "../bancoDeQuestoes"

export default function questoesProId(req, res)  {
    const idSelecionada = +req.query.id
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionada)
    if(unicaQuestaoOuNada.length === 1){
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas()
        res.status(200).json(questaoSelecionada.converterParaObjeto())
    }else{
        res.status(204).send()
    }

}

