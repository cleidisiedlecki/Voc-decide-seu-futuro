const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você, um jovem universitário, está se sentindo cada vez mais isolado apesar de estar constantemente conectado online. Após ver um aviso sobre um encontro para discutir o impacto da tecnologia nas relações humanas, você se depara apenas com uma opção: participar do encontro.",
        alternativas: [
            {
                texto: "Participar do Encontro",
                afirmacao: "Você decide participar do encontro. Chegando lá, você encontra um pequeno grupo de pessoas, todas com histórias diferentes, mas sentimentos parecidos. Durante a conversa, uma pessoa menciona um novo aplicativo que promove encontros presenciais entre pessoas com interesses em comum. O grupo decide se inscrever, e logo vocês combinam de se encontrar pessoalmente mais vezes, ajudando a criar laços reais."
            },
        ]
    },
    {
        enunciado: "Chegando lá, você encontra um pequeno grupo de pessoas, todas com histórias diferentes, mas sentimentos parecidos. Durante a conversa, uma pessoa menciona um novo aplicativo que promove encontros presenciais entre pessoas com interesses em comum. O grupo decide se inscrever, e logo vocês combinam de se encontrar pessoalmente mais vezes, ajudando a criar laços reais. Após alguns encontros bem-sucedidos, você é convidado a se tornar um dos organizadores do grupo, ajudando a trazer mais pessoas para essa iniciativa. No entanto, surge uma nova escolha:",
        alternativas: [
            {
                texto: "Aceitar o convite e se tornar organizador.",
                afirmacao: "Ao aceitar, você se torna um líder dentro da comunidade, ajudando outras pessoas a se reconectarem no mundo real. O impacto positivo na vida dos outros e na sua própria vida é profundo, e você sente que encontrou um propósito."
            },
            {
                texto: "Recusar o convite e manter um papel de participante.",
                afirmacao: "Após recusar o convite, você continua participando dos encontros, mas sente que perdeu uma oportunidade de fazer algo maior. Eventualmente, sua motivação para comparecer diminui, e você volta ao ciclo de isolamento que estava antes."
            }
        ]
    },
    {
        enunciado: "Você decide voltar para casa, se desconectando do mundo online por uma noite. A tranquilidade é bem-vinda, e você decide estender essa experiência, limitando o tempo que passa nas redes sociais. Aos poucos, você começa a sair mais, buscando atividades fora de casa, como esportes e hobbies que sempre quis tentar. Entretanto, após algum tempo, você recebe uma notificação de um amigo de longa data, alguém com quem você costumava se conectar apenas online. Ele está na cidade e sugere um reencontro. Agora, você enfrenta outra escolha:",
        alternativas: [
            {
                texto: "Aceitar o reencontro e reavivar a amizade.",
                afirmacao: "Aceitando o convite, você descobre que a amizade de vocês é mais forte do que a distância e o tempo. Vocês voltam a se encontrar regularmente, e essa conexão real traz alegria e sentido à sua vida."
            },
            {
                texto: "Ignorar a mensagem e continuar sua desconexão.",
                afirmacao: "Ao ignorar a mensagem, você perde a chance de reavivar uma amizade importante. Com o tempo, o vazio que você tentou preencher com novas atividades começa a crescer novamente, e você percebe que, apesar das mudanças, ainda falta algo em sua vida."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Os resultados...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();