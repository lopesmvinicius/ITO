const themes = [
    "Mangá / anime famoso (0 = famoso, 100 = pouca gente conhece)",
    "Esportes mais conhecidos (0 = muito popular, 100 = desconhecido)",
    "Contos de fadas populares (0 = popular, 100 = não valeria um encontro)",
    "Personagens da ficção com quem você gostaria de ter um encontro (0 = não gostaria de ser, 100 = provavelmente casaria)",
    "Pessoas famosas que você gostaria de ser (0 = gostaria de ser, 100 = não ficaria lá 5 minutos)",
    "Lugares onde você gostaria de morar (0 = passaria lá a eternidade, 100 = não gostaria)",
    "Poderes especiais que você gostaria de ter (0 = ninguém viu, 100 = gostaria)",
    "Filmes conhecidos (0 = todo mundo assistiu, 100 = nem um sustinho)",
    "Coisas que te dão medo (0 = morreria de medo, 100 = nem arranha)",
    "Itens do dia a dia que poderiam ser boas armas (0 = arma forte, 100 = nada demais)",
    "Coisas que você não conseguiria perdoar (0 = imperdoável, 100 = não, obrigado)",
    "Coisas nas quais você gostaria de ficar em imersão (0 = quero uma piscina cheia disso, 100 = não vale o clique)",
    "Coisas que você gostaria de fotografar (0 = faria um book, 100 = nem pararia pra olhar)",
    "Coisas que você ficaria olhando com admiração o dia inteiro (0 = ficaria olhando por horas, 100 = não acreditaria)",
    "Mentiras que você acreditaria (0 = acreditaria com certeza, 100 = credo, horrível!)",
    "Sabores de sorvete que poderiam ser deliciosos (0 = comeria toneladas, 100 = não é nada)",
    "Coisas importantes na vida (0 = importantíssimo, 100 = não importante)",
    "Habilidades importantes para ser líder (0 = essencial, 100 = não te faz feliz)",
    "Coisas que te fazem feliz (0 = felicidade pura, 100 = é pra fazer cosquinha?)",
    "Itens / armas que você gostaria de ter para lutar contra zumbis (0 = adiós, zumbi!, 100 = sei nem quem é)",
    "Atletas famosos (0 = grande campeão, 100 = pouca gente conhece)",
    "Comidas famosas (0 = encontradas em todo o mundo, 100 = não seria)",
    "Personagens da ficção que você gostaria de ser (0 = seria muito, 100 = fez poucas participações)",
    "Celebridades de filmes e séries mais conhecidas da atualidade (0 = está sempre nos lançamentos, 100 = cheiro normal)",
    "Coisas que cheiram bem (0 = faria um perfume disso, 100 = não teria isso)",
    "Coisas que você gostaria de ter como souvenir (0 = teria mais de mil, 100 = não faria)",
    "Coisas que você gostaria de fazer quando se aposentar (0 = faria com toda certeza, 100 = não tão difícil)",
    "Coisas difíceis de suportar (0 = praticamente impossível, 100 = pouco importante)",
    "Coisas importantes para fazer sucesso nas mídias sociais (0 = obrigatório, 100 = desnecessária)",
    "Habilidades essenciais para um comediante (0 = obrigatória, 100 = levinho)",
    "Coisas pesadas (0 = pesado, 100 = ninguém conhece)",
    "Canções famosas (0 = todo mundo canta junto, 100 = sei nem quem é)",
    "Figuras históricas populares (0 = figura importante, 100 = vale pouco)",
    "Marcas mais valiosas (0 = vale bilhões, 100 = nem queria)",
    "Coisas que você desejava quando criança (0 = queria pra caramba, 100 = não quero fazer)",
    "Coisas que você quer fazer logo quando acorda (0 = quero muito, 100 = inútil)",
    "Coisas úteis em uma casa (0 = muito útil, 100 = nem é som)",
    "Sons que te fazem feliz (0 = felicidade para os ouvidos, 100 = não faz)",
    "Coisas que fazem você se sentir amado(a) (0 = é puro amor, 100 = cringe)",
    "Pense como um estudante do ensino médio: o que é legal? (0 = super legal, 100 = ninguém ganha)",
    "Presentes de aniversário mais comuns (0 = todo mundo já ganhou, 100 = até eu encarava)",
    "Vilões mais temíveis (0 = me faz ter pesadelos, 100 = ninguém vai)",
    "Países populares para viajar (0 = todo mundo já foi, 100 = pouco fofinho)",
    "Coisas fofinhas (0 = um cuti-cuti, 100 = pouco feliz)",
    "Coisas que te fazem feliz quando feitas pelo seu amor (0 = muito feliz, 100 = dá pra fazer)",
    "Atividades difíceis de serem feitas sozinho(a) (0 = impossível, 100 = não gostaria)",
    "Animais nos quais você gostaria de montar (0 = queria demais, 100 = inútil)",
    "Habilidades úteis para o trabalho (0 = muito útil, 100 = não te faz muito feliz)",
    "Pense como uma criança: o que te faz feliz? (0 = isso sim é felicidade, 100 = pouco confortável)",
    "Pense como um gato: os lugares mais confortáveis do mundo (0 = muito confortável, 100 = pequeno)",
    "Tamanho de animais (0 = enorme, 100 = vai pouco)",
    "Lugares onde você vai com frequência (0 = vai muito, 100 = desconhecido)",
    "Brinquedos mais conhecidos (0 = toda criança já teve um, 100 = praticamente uma ofensa)",
    "Palavras que você gostaria de ouvir (0 = mais que um elogio, 100 = pouco leve)",
    "Coisas leves (0 = levíssimo, 100 = ninguém bebe isso)",
    "Drinques populares (0 = todo mundo já bebeu, 100 = acordadíssimo)",
    "Coisas que te deixam com sono (0 = zzzzz…, 100 = nunca vi)",
    "Veículos mais comuns (0 = tem um em cada esquina, 100 = normal)",
    "Frases estranhas se ditas por uma criança de 5 anos (0 = muito estranho, 100 = aquele de passar vergonha)",
    "Pedidos de casamento que te fariam feliz (0 = algo memorável, 100 = não serve para nada)",
    "Itens úteis quando você está perdido(a) no deserto (0 = salvaria sua vida, 100 = normal)",
    "Coisas que te surpreenderiam se saíssem do seu corpo (0 = não dá pra imaginar isso, 100 = algo comum)",
    "Algo que te surpreenderia se fosse achado embaixo de uma pedra no parque (0 = algo surpreendente, 100 = não gostaria)",
    "Itens encontrados em um baú do tesouro que você gostaria de ter (0 = queria muito, 100 = fuja, louco!)",
    "Momentos históricos que você visitaria se tivesse uma máquina do tempo (0 = iria agora, 100 = nada saudável)",
    "Alimentos que fazem bem (0 = puro suco de saúde, 100 = pouco confiável)",
    "Coisas confiáveis por todo o sempre (0 = confiável eternamente, 100 = não iria nem pagando)",
    "Tipos de festivais que você gostaria de participar (0 = gastaria o salário pra ir, 100 = derrotaria facilmente)",
    "Pense como um vilão: qual seria o personagem heróico que você menos gostaria de enfrentar? (0 = tenho medo até da sombra, 100 = não gostaria de descobrir)",
    "Pense como um cientista: o que você gostaria de descobrir? (0 = merece um Nobel, 100 = inútil)",
    "Itens úteis para levar a uma ilha deserta (0 = muito útil, 100 = aquele que flopou muito)",
    "Melhores jogos de tabuleiro já lançados (0 = digno de um prêmio Spiel, 100 = isso é ofensivo)",
    "Piadas mais engraçadas (0 = ri litros, 100 = nem tanto)",
    "Itens diferentões que você gostaria de ter (0 = isso é muito legal, 100 = não botou medo)",
    "Melhores nomes de golpes especiais para gritar (0 = isso sim impõe respeito, 100 = nada interessante)",
    "Características de pessoas que você gostaria de ter em seu círculo de amizade (0 = BFF na certa, 100 = ninguém se importa)",
    "Títulos de livros que te deixariam curioso para saber seu conteúdo (0 = vou comprar, 100 = feitiço comum)",
    "Pense como um mago: qual seria o seu feitiço favorito? (0 = usaria toda hora, 100 = nada AU-AUdacioso)",
    "Pense como um cachorro: o que te faz feliz? (0 = de balançar a cauda, 100 = faz parte da aula)",
    "Coisas que surpreenderiam se fossem ditas por um professor (0 = por essa ninguém esperava, 100 = ok)",
    "As coisas mais bonitas do mundo (0 = visão do paraíso, 100 = pouco conhecida)",
    "Coisas populares com crianças (0 = muito famosa, 100 = nunca vi, nem comi, só ouço falar)",
    "Os doces mais conhecidos (0 = vende em todo lugar, 100 = muito comum)",
    "Os nomes mais legais (0 = meu filho vai ter, 100 = aventura)",
    "Amor verdadeiro ou apenas uma aventura? (0 = amor verdadeiro, 100 = nunca faço)",
    "Coisas que você faz quando está de bom humor (0 = faço muito, 100 = lamentável)",
    "Pense como um herói: qual seria sua pose? (0 = épica, 100 = um desânimo só)",
    "Pense como um explorador: que lugares te deixam animado? (0 = bora lá, agora?, 100 = não gostaria)",
    "Mundos imaginários que você gostaria de visitar (0 = viveria lá o resto da vida, 100 = inútil)",
    "Habilidades úteis em relacionamentos (0 = essencial, 100 = fraco demais)",
    "Personagens mais fortes da ficção (0 = indestrutível, 100 = nada feliz)",
    "Coisas que você ficaria feliz em encontrar no seu bolso ou bolsa (0 = alegria pura, 100 = poucos encontros)",
    "Lugares onde mais acontecem encontros românticos (0 = está acontecendo um agora, 100 = isso é ridículo)",
    "Caretas engraçadas (faça-as) (0 = muito engraçado!, 100 = não escolheria)",
    "Um único prato pra comer até o fim da vida (0 = comeria agora, inclusive, 100 = nada corajoso)",
    "Ações e atitudes que exigem coragem (0 = pura coragem, 100 = nem tão ruim)",
    "Pense como um adolescente: o que seria algo ruim se acontecesse durante a aula? (0 = que vergonha!, 100 = não gostaria)",
    "Se você tivesse um alter ego, o que gostaria que ele fosse? (0 = é meu tipo, 100 = de boas)",
    "Personagens fictícios com os piores temperamentos (0 = explosivo, 100 = desnecessária)",
    "Habilidades importantes para um streamer (0 = obrigatória)",
	"Músicas pop que marcaram uma época (0 = todo mundo canta junto, 100 = poucos lembram)",
    "Habilidades úteis para um apocalipse zumbi (0 = essencial, 100 = inútil)",
    "Nível de dificuldade de um esporte (0 = muito fácil, 100 = impossível)",
    "Famosos que parecem ser amigáveis (0 = BFF, 100 = não passaria 5 minutos)",
    "Séries de TV que você maratonaria de novo (0 = com certeza, 100 = nem se me pagassem)",
    "Objetos que são mais caros do que parecem (0 = vale uma fortuna, 100 = parece valioso mas não é)",
    "Nível de emoção em um filme de terror (0 = morro de medo, 100 = é comédia)",
    "Piores conselhos que alguém já te deu (0 = pior conselho do mundo, 100 = até que faz sentido)",
    "Títulos de livros que te fazem rir (0 = gargalhei, 100 = sem graça)",
    "Nível de fofura de um animal selvagem (0 = o mais fofo do mundo, 100 = zero fofura)",
    "Comidas que são muito overrated (0 = comeria todo dia, 100 = por que as pessoas gostam disso?)",
    "Melhores poses para uma foto de grupo (0 = épica, 100 = vergonha alheia)",
    "Coisas que você odeia que aconteçam no trabalho (0 = o pior, 100 = normal do dia a dia)",
    "Vilões de filmes que são totalmente compreensíveis (0 = faria o mesmo, 100 = incompreensível)",
    "Nível de irritação ao encontrar uma meia molhada (0 = nível de raiva 100, 100 = não ligo)",
    "Tipos de pizza que te fazem feliz (0 = felicidade pura, 100 = nem provaria)",
    "Piores desculpas para se atrasar (0 = a pior de todas, 100 = totalmente aceitável)",
    "Sons irritantes do dia a dia (0 = insuportável, 100 = até que é ok)",
    "Habilidades que parecem inúteis, mas são importantes (0 = essencial, 100 = inútil mesmo)",
    "Coisas que te fazem sentir velho (0 = me senti um idoso, 100 = nem ligo)",
    "Probabilidade de sobreviver em um filme de terror (0 = zero chance, 100 = seria o herói)",
    "Lugares que todo mundo viaja, mas você não tem vontade (0 = zero interesse, 100 = meu sonho)",
    "Nível de aleatoriedade de um sonho (0 = total sem sentido, 100 = super normal)",
    "Celebridades que são talentosas em tudo que fazem (0 = o mais talentoso do mundo, 100 = nem tanto)",
    "Coisas que você diz que vai fazer, mas nunca faz (0 = nunca fiz, 100 = sempre faço)",
    "Personagens de videogame que você seria (0 = o mais forte, 100 = NPC aleatório)",
    "Melhores sabores de bolo (0 = comeria todos os dias, 100 = nem provaria)",
    "Nível de coragem em uma ação do dia a dia (0 = pura coragem, 100 = normal)",
    "Filmes que parecem ser de um gênero, mas são de outro (0 = completamente diferente, 100 = exatamente o que esperava)",
    "Nível de sorte (0 = sortudo, 100 = azarado)",
    "Mitos urbanos que você acredita (0 = acredito totalmente, 100 = acho ridículo)",
    "Piores comidas de festa de aniversário (0 = horrível, 100 = a melhor)",
    "Itens de cozinha mais úteis (0 = super útil, 100 = não serve para nada)",
    "Melhores jogos de tabuleiro para jogar com estranhos (0 = quebra-gelo, 100 = ninguém se fala)",
    "Nível de irritação com um bug em um jogo (0 = que raiva, 100 = nem liguei)",
    "Coisas que você compraria se ficasse rico (0 = o mais bizarro, 100 = algo super normal)",
    "Melhores nomes para um mascote (0 = épico, 100 = genérico)",
    "Atitudes que mostram que uma pessoa é educada (0 = a pessoa mais educada do mundo, 100 = sem educação)",
    "Séries que duraram tempo demais (0 = deveria ter acabado na primeira temporada, 100 = nunca deveria ter acabado)",
    "Lugares que você acharia relaxantes (0 = o mais relaxante do mundo, 100 = estressante)",
    "Nível de estranheza em uma festa (0 = muito estranho, 100 = normal)",
    "Piores combinações de comida (0 = nojento, 100 = surpreendentemente bom)",
    "Coisas que te dão nostalgia (0 = me lembra a infância, 100 = não sinto nada)",
    "Melhores comidas para comer no frio (0 = a melhor, 100 = nem ligo)",
    "Piadas que você conta, mas ninguém entende (0 = hilária, 100 = sem graça)",
    "Nível de perigo de uma situação (0 = perigo iminente, 100 = zero perigo)",
    "Super-heróis com os piores poderes (0 = o pior poder do mundo, 100 = o melhor)",
    "Lugares que você visitaria se pudesse teletransportar (0 = iria agora, 100 = nem me pagando)",
    "Coisas que te fazem duvidar da humanidade (0 = inacreditável, 100 = normal do ser humano)",
    "Melhores filmes de comédia (0 = ri litros, 100 = sem graça)",
    "Nível de inteligência de um vilão (0 = o mais inteligente, 100 = o mais burro)",
    "Coisas que você gostaria que nunca tivessem sido inventadas (0 = a pior invenção, 100 = a melhor invenção)",
    "Melhores sabores de refrigerante (0 = o melhor do mundo, 100 = o pior)",
    "Sons que te acalmam (0 = o mais relaxante, 100 = me irrita)",
    "Melhores finais de séries de TV (0 = final épico, 100 = pior final)",
    "Nível de irritação com o trânsito (0 = insuportável, 100 = tranquilo)",
    "Coisas que você gostaria que estivessem na sua casa (0 = o mais bizarro, 100 = normal)",
    "Nível de utilidade de um objeto antigo (0 = super útil, 100 = não serve pra nada)",
    "Melhores sobremesas (0 = a melhor, 100 = a pior)",
    "Nível de dificuldade de uma receita (0 = impossível, 100 = muito fácil)",
    "Piores filmes de todos os tempos (0 = o pior, 100 = um dos melhores)",
    "Nível de emoção em um jogo de futebol (0 = o mais emocionante, 100 = o mais chato)",
    "Coisas que te fazem sentir como um adulto (0 = me sinto adulto, 100 = me sinto criança)",
    "Melhores comidas de rua (0 = a melhor, 100 = a pior)",
    "Nível de paciência em uma fila (0 = zero paciência, 100 = muita paciência)",
    "Coisas que te dão vontade de chorar (0 = choro na hora, 100 = não sinto nada)",
    "Piores músicas para cantar no karaokê (0 = a pior, 100 = a melhor)",
    "Nível de desconforto de uma roupa (0 = insuportável, 100 = super confortável)",
    "Melhores jogos de tabuleiro para jogar em família (0 = o melhor, 100 = o pior)",
    "Nível de aleatoriedade de uma conversa (0 = total sem sentido, 100 = super coerente)",
    "Melhores filmes de ação (0 = o melhor, 100 = o pior)",
    "Nível de perigo de uma atividade radical (0 = muito perigoso, 100 = zero perigo)",
    "Coisas que te fazem sentir sortudo (0 = sou muito sortudo, 100 = azarado)",
    "Piores sabores de pizza (0 = o pior, 100 = o melhor)",
    "Nível de fofura de um objeto inanimado (0 = o mais fofo, 100 = zero fofura)",
    "Melhores sobremesas de festa de aniversário (0 = a melhor, 100 = a pior)",
    "Nível de importância de um meme (0 = super importante, 100 = inútil)",
    "Piores filmes de terror (0 = o pior, 100 = o melhor)",
    "Coisas que te dão vontade de gritar (0 = gritaria, 100 = calma)",
    "Nível de emoção em um livro (0 = me emociona, 100 = sem graça)",
    "Melhores comidas para comer com a mão (0 = a melhor, 100 = a pior)",
    "Nível de utilidade de um super-poder (0 = super útil, 100 = inútil)",
    "Coisas que você faria se fosse invisível (0 = faria a pior coisa, 100 = faria algo bom)",
    "Melhores sabores de pizza doce (0 = a melhor, 100 = a pior)",
    "Nível de perigo de um animal selvagem (0 = perigo iminente, 100 = zero perigo)",
    "Coisas que te deixam irritado (0 = a pior, 100 = normal)",
    "Melhores músicas para dançar (0 = a melhor, 100 = a pior)",
    "Nível de perigo de uma viagem (0 = muito perigoso, 100 = zero perigo)",
    "Coisas que te fazem rir (0 = gargalhei, 100 = não sinto nada)",
    "Melhores filmes de animação (0 = o melhor, 100 = o pior)",
    "Nível de utilidade de um aplicativo (0 = super útil, 100 = inútil)",
    "Coisas que te dão vontade de cantar (0 = canto o tempo todo, 100 = odeio cantar)",
    "Melhores sabores de bolo de aniversário (0 = o melhor, 100 = o pior)",
    "Nível de perigo de um esporte radical (0 = muito perigoso, 100 = zero perigo)",
    "Coisas que te fazem sentir em casa (0 = me sinto em casa, 100 = me sinto um estranho)",
    "Nível de emoção em uma série de TV (0 = o mais emocionante, 100 = o mais chato)",
    "Coisas que você faria se pudesse voltar no tempo (0 = faria o que sempre quis, 100 = faria o que não podia)",
    "Melhores sabores de sorvete de massa (0 = o melhor, 100 = o pior)",
    "Nível de utilidade de um acessório (0 = super útil, 100 = inútil)",
    "Coisas que te fazem querer ser um adulto (0 = quero ser adulto, 100 = quero ser criança)",
    "Melhores filmes de ficção científica (0 = o melhor, 100 = o pior)",
    "Nível de perigo de uma situação no trabalho (0 = muito perigoso, 100 = zero perigo)"
];

// ... (seu código de variáveis e temas aqui)

const setupScreen = document.getElementById("setup-screen");
const cardScreen = document.getElementById("card-screen");
const themeScreen = document.getElementById("theme-screen");
const playerCountInput = document.getElementById("player-count");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const newRoundButton = document.getElementById("new-round-button");
const numberTextElement = document.getElementById("number-text");
const themeTextElement = document.getElementById("theme-text");
const themeTitleElement = document.getElementById("theme-title");

let playersNumbers = [];
let currentPlayerIndex = 0;

// Função para mostrar uma tela e esconder as outras
function showScreen(screenToShow) {
    const allScreens = [setupScreen, cardScreen, themeScreen];
    allScreens.forEach(screen => {
        screen.classList.remove("active");
    });
    screenToShow.classList.add("active");
}

// Evento de clique no botão "Começar Jogo"
startButton.addEventListener("click", () => {
    const playerCount = parseInt(playerCountInput.value);
    if (playerCount >= 2 && playerCount <= 99) {
        showScreen(cardScreen); // Chama a função para mostrar a tela de cartas
        
        // Gera os números para os jogadores
        playersNumbers = generateUniqueNumbers(playerCount);
        currentPlayerIndex = 0;
        
        numberTextElement.textContent = "Clique em 'Próximo' para ver o número!";
        nextButton.textContent = "Próximo Número";

    } else {
        alert("Por favor, insira um número de jogadores entre 2 e 99.");
    }
});

// Evento de clique no botão "Próximo Número"
nextButton.addEventListener("click", () => {
    if (currentPlayerIndex < playersNumbers.length) {
        // ... (seu código para mostrar o número e atualizar o índice)
        numberTextElement.textContent = playersNumbers[currentPlayerIndex];
        
        currentPlayerIndex++;
        
        if (currentPlayerIndex === playersNumbers.length) {
            nextButton.textContent = "Mostrar Assunto";
        }

    } else {
        // Todos os números foram mostrados, agora é a vez do tema
        showScreen(themeScreen); // Chama a função para mostrar a tela de tema
        showTheme();
    }
});

// Evento de clique no botão "Nova Rodada"
newRoundButton.addEventListener("click", () => {
    showScreen(setupScreen); // Chama a função para voltar à tela inicial
    
    // Reseta as variáveis
    playersNumbers = [];
    currentPlayerIndex = 0;
});

function generateUniqueNumbers(count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * 101); // Gera de 0 a 100
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function showTheme() {
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    themeTextElement.textContent = randomTheme;
}