// Banco de dados com a história do futebol dividida por eras
const historiaFutebol = {
    origens: {
        titulo: "As Origens Antigas (Antes do Século XIX)",
        texto: "Embora o futebol moderno tenha nascido na Inglaterra, jogos com os pés já existiam há milhares de anos. Na China antiga (por volta de 2500 a.C.), o <strong>Cuju</strong> consistia em chutar uma bola de couro em uma rede. No Japão, existia o <strong>Kemari</strong>, um jogo mais cerimonial. Já na Itália medieval, o <strong>Calcio Storico</strong> era uma disputa violenta entre bairros, que misturava chutes com muita força física."
    },
    inglaterra: {
        titulo: "A Unificação e Criação das Regras (1863)",
        texto: "Nas escolas públicas da Inglaterra, o jogo era praticado de formas diferentes em cada região. Em 26 de outubro de 1863, representantes de vários clubes se reuniram na <em>Freemasons' Tavern</em>, em Londres, e fundaram a <strong>Football Association (FA)</strong>. Ali foram criadas as primeiras regras unificadas, proibindo de vez o uso das mãos para carregar a bola (o que separou o futebol do Rugby)."
    },
    seculoxx: {
        titulo: "A Expansão Global e a Primeira Copa (Século XX)",
        texto: "O esporte se espalhou pelo mundo através dos marinheiros e trabalhadores britânicos. Em 1904, foi fundada a <strong>FIFA</strong> para organizar o esporte mundialmente. O grande marco veio em 1930, com a realização da <strong>Primeira Copa do Mundo no Uruguai</strong>, vencida pelos donos da casa. Nas décadas seguintes, surgiram lendas como Pelé, Maradona e Cruyff, transformando o futebol no maior espetáculo da Terra."
    },
    atualidade: {
        titulo: "O Futebol Moderno e a Era Digital (Dias de Hoje)",
        texto: "Hoje, o futebol move bilhões de dólares e é uma indústria global altamente profissionalizada. Vimos a era de rivalidades históricas como Messi e Cristiano Ronaldo, e a introdução de tecnologias revolucionárias como o <strong>VAR (Árbitro de Vídeo)</strong> e chips nas bolas. O futebol feminino também ganhou um espaço gigante e merecido, quebrando recordes de público e audiência pelo mundo."
    }
};

// Função para mudar o texto na tela
function mudarEra(era) {
    const containerConteudo = document.getElementById('conteudo-era');
    
    // Atualiza o HTML com as informações da era selecionada
    containerConteudo.innerHTML = `
        <h3>${historiaFutebol[era].titulo}</h3>
        <p>${historiaFutebol[era].texto}</p>
    `;

    // Atualiza a classe ativa nos botões para mudar a cor do botão clicado
    const botoes = document.querySelectorAll('.tab-btn');
    botoes.forEach(botao => {
        botao.classList.remove('active');
    });

    // Encontra o botão clicado usando o evento ou o atributo correspondente
    event.currentTarget.classList.add('active');
}

// Inicializa a página mostrando a primeira era
document.addEventListener("DOMContentLoaded", () => {
    mudarEra('origens');
});