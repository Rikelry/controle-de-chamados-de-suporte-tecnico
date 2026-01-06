import { ICallController } from "../funcionalidade/iCallController";
import { ICallUI } from "./iCallUI";

export class TextCallUI implements ICallUI{
    
    callController : ICallController;

    constructor(callController:ICallController){
        this.callController = callController;
    }

    start(): void {
        let op = 1;
        while(op!=0){
            op = Number(prompt(
                'Escolha uma opção\n' +
                '1- Cadastrar\n' +
                '2- Listar\n' +
                '3- Marcar como concluido\n' +
                '0- Sair'
            ));

            switch(op){
                case 1:
                    let nome : string = prompt('Digite seu nome')!;
                    let descricao : string = prompt('Digite a descrição do problema')!;
                    let deuCerto : boolean = this.callController.abrirChamado(nome,descricao);
                    alert(deuCerto ? 'Chamado cadastrado' : 'Não foi possível cadastrar o chamado');
                    break;

                case 2:
                    const chamados = this.callController.listarChamado();

                    if (chamados.length === 0) {
                        alert("Nenhum chamado cadastrado.");
                        break;
                    }

                    let mensagem = "Chamados cadastrados:\n";
                    chamados.forEach((c, index) => {
                        mensagem += `${index} - ${c.solicitante} | ${c.descricao} | `;
                        mensagem += c.status ? "Atendido\n" : "Pendente\n";
                    });

                    alert(mensagem);
                    break;

                case 3:
                    const lista = this.callController.listarChamado();

                    if (lista.length === 0) {
                        alert("Não há chamados para atender.");
                        break;
                    }

                    let indice = Number(prompt("Digite o índice do chamado a ser concluído:"));

                    if (isNaN(indice) || indice < 0 || indice >= lista.length) {
                        alert("Índice inválido.");
                        break;
                    }

                    let sucesso = this.callController.marcarComoAtendido(lista[indice]);
                    alert(sucesso ? "Chamado marcado como atendido." : "Erro ao atualizar chamado.");
                    break;

                case 0:
                    alert("Sistema encerrado.");
                    break;

                default:
                    alert('Opção Inválida');
            }
        }
    }
}
