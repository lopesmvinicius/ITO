const themes = [
    "Mangá / anime famoso (0 = pouca gente conhece, 100 = famoso)",
    "Esportes mais conhecidos (0 = desconhecido, 100 = muito popular)",
    "Contos de fadas populares (0 = não valeria um encontro, 100 = popular)",
    "Personagens da ficção com quem você gostaria de ter um encontro (0 = provavelmente casaria, 100 = não gostaria de ser)",
    "Pessoas famosas que você gostaria de ser (0 = não ficaria lá 5 minutos, 100 = gostaria de ser)",
    "Lugares onde você gostaria de morar (0 = não gostaria, 100 = passaria lá a eternidade)",
    "Poderes especiais que você gostaria de ter (0 = gostaria, 100 = ninguém viu)",
    "Filmes conhecidos (0 = nem um sustinho, 100 = todo mundo assistiu)",
    "Coisas que te dão medo (0 = nem arranha, 100 = morreria de medo)",
    "Itens do dia a dia que poderiam ser boas armas (0 = nada demais, 100 = arma forte)",
    "Coisas que você não conseguiria perdoar (0 = não, obrigado, 100 = imperdoável)",
    "Coisas nas quais você gostaria de ficar em imersão (0 = não vale o clique, 100 = quero uma piscina cheia disso)",
    "Coisas que você gostaria de fotografar (0 = nem pararia pra olhar, 100 = faria um book)",
    "Coisas que você ficaria olhando com admiração o dia inteiro (0 = não acreditaria, 100 = ficaria olhando por horas)",
    "Mentiras que você acreditaria (0 = credo, horrível!, 100 = acreditaria com certeza)",
    "Sabores de sorvete que poderiam ser deliciosos (0 = não é nada, 100 = comeria toneladas)",
    "Coisas importantes na vida (0 = não importante, 100 = importantíssimo)",
    "Habilidades importantes para ser líder (0 = não te faz feliz, 100 = essencial)",
    "Coisas que te fazem feliz (0 = é pra fazer cosquinha?, 100 = felicidade pura)",
    "Itens / armas que você gostaria de ter para lutar contra zumbis (0 = sei nem quem é, 100 = adiós, zumbi!)",
    "Atletas famosos (0 = pouca gente conhece, 100 = grande campeão)",
    "Comidas famosas (0 = não seria, 100 = encontradas em todo o mundo)",
    "Personagens da ficção que você gostaria de ser (0 = fez poucas participações, 100 = seria muito)",
    "Celebridades de filmes e séries mais conhecidas da atualidade (0 = cheiro normal, 100 = está sempre nos lançamentos)",
    "Coisas que cheiram bem (0 = não teria isso, 100 = faria um perfume disso)",
    "Coisas que você gostaria de ter como souvenir (0 = não faria, 100 = teria mais de mil)",
    "Coisas que você gostaria de fazer quando se aposentar (0 = não tão difícil, 100 = faria com toda certeza)",
    "Coisas difíceis de suportar (0 = pouco importante, 100 = praticamente impossível)",
    "Coisas importantes para fazer sucesso nas mídias sociais (0 = desnecessária, 100 = obrigatório)",
    "Habilidades essenciais para um comediante (0 = levinho, 100 = obrigatória)",
    "Coisas pesadas (0 = ninguém conhece, 100 = pesado)",
    "Canções famosas (0 = sei nem quem é, 100 = todo mundo canta junto)",
    "Figuras históricas populares (0 = vale pouco, 100 = figura importante)",
    "Marcas mais valiosas (0 = nem queria, 100 = vale bilhões)",
    "Coisas que você desejava quando criança (0 = não quero fazer, 100 = queria pra caramba)",
    "Coisas que você quer fazer logo quando acorda (0 = inútil, 100 = quero muito)",
    "Coisas úteis em uma casa (0 = nem é som, 100 = muito útil)",
    "Sons que te fazem feliz (0 = não faz, 100 = felicidade para os ouvidos)",
    "Coisas que fazem você se sentir amado(a) (0 = cringe, 100 = é puro amor)",
    "Pense como um estudante do ensino médio: o que é legal? (0 = ninguém ganha, 100 = super legal)",
    "Presentes de aniversário mais comuns (0 = até eu encarava, 100 = todo mundo já ganhou)",
    "Vilões mais temíveis (0 = ninguém vai, 100 = me faz ter pesadelos)",
    "Países populares para viajar (0 = pouco fofinho, 100 = todo mundo já foi)",
    "Coisas fofinhas (0 = pouco feliz, 100 = um cuti-cuti)",
    "Coisas que te fazem feliz quando feitas pelo seu amor (0 = dá pra fazer, 100 = muito feliz)",
    "Atividades difíceis de serem feitas sozinho(a) (0 = não gostaria, 100 = impossível)",
    "Animais nos quais você gostaria de montar (0 = inútil, 100 = queria demais)",
    "Habilidades úteis para o trabalho (0 = não te faz muito feliz, 100 = muito útil)",
    "Pense como uma criança: o que te faz feliz? (0 = pouco confortável, 100 = isso sim é felicidade)",
    "Pense como um gato: os lugares mais confortáveis do mundo (0 = pequeno, 100 = muito confortável)",
    "Tamanho de animais (0 = vai pouco, 100 = enorme)",
    "Lugares onde você vai com frequência (0 = desconhecido, 100 = vai muito)",
    "Brinquedos mais conhecidos (0 = praticamente uma ofensa, 100 = toda criança já teve um)",
    "Palavras que você gostaria de ouvir (0 = pouco leve, 100 = mais que um elogio)",
    "Coisas leves (0 = ninguém bebe isso, 100 = levíssimo)",
    "Drinques populares (0 = acordadíssimo, 100 = todo mundo já bebeu)",
    "Coisas que te deixam com sono (0 = nunca vi, 100 = zzzzz…)",
    "Veículos mais comuns (0 = normal, 100 = tem um em cada esquina)",
    "Frases estranhas se ditas por uma criança de 5 anos (0 = aquele de passar vergonha, 100 = muito estranho)",
    "Pedidos de casamento que te fariam feliz (0 = não serve para nada, 100 = algo memorável)",
    "Itens úteis quando você está perdido(a) no deserto (0 = normal, 100 = salvaria sua vida)",
    "Coisas que te surpreenderiam se saíssem do seu corpo (0 = algo comum, 100 = não dá pra imaginar isso)",
    "Algo que te surpreenderia se fosse achado embaixo de uma pedra no parque (0 = não gostaria, 100 = algo surpreendente)",
    "Itens encontrados em um baú do tesouro que você gostaria de ter (0 = fuja, louco!, 100 = queria muito)",
    "Momentos históricos que você visitaria se tivesse uma máquina do tempo (0 = nada saudável, 100 = iria agora)",
    "Alimentos que fazem bem (0 = pouco confiável, 100 = puro suco de saúde)",
    "Coisas confiáveis por todo o sempre (0 = não iria nem pagando, 100 = confiável eternamente)",
    "Tipos de festivais que você gostaria de participar (0 = derrotaria facilmente, 100 = gastaria o salário pra ir)",
    "Pense como um vilão: qual seria o personagem heróico que você menos gostaria de enfrentar? (0 = não gostaria de descobrir, 100 = tenho medo até da sombra)",
    "Pense como um cientista: o que você gostaria de descobrir? (0 = inútil, 100 = merece um Nobel)",
    "Itens úteis para levar a uma ilha deserta (0 = aquele que flopou muito, 100 = muito útil)",
    "Melhores jogos de tabuleiro já lançados (0 = isso é ofensivo, 100 = digno de um prêmio Spiel)",
    "Piadas mais engraçadas (0 = nem tanto, 100 = ri litros)",
    "Itens diferentões que você gostaria de ter (0 = não botou medo, 100 = isso é muito legal)",
    "Melhores nomes de golpes especiais para gritar (0 = nada interessante, 100 = isso sim impõe respeito)",
    "Características de pessoas que você gostaria de ter em seu círculo de amizade (0 = ninguém se importa, 100 = BFF na certa)",
    "Títulos de livros que te deixariam curioso para saber seu conteúdo (0 = feitiço comum, 100 = vou comprar)",
    "Pense como um mago: qual seria o seu feitiço favorito? (0 = nada AU-AUdacioso, 100 = usaria toda hora)",
    "Pense como um cachorro: o que te faz feliz? (0 = faz parte da aula, 100 = de balançar a cauda)",
    "Coisas que surpreenderiam se fossem ditas por um professor (0 = ok, 100 = por essa ninguém esperava)",
    "As coisas mais bonitas do mundo (0 = pouco conhecida, 100 = visão do paraíso)",
    "Coisas populares com crianças (0 = nunca vi, nem comi, só ouço falar, 100 = muito famosa)",
    "Os doces mais conhecidos (0 = muito comum, 100 = vende em todo lugar)",
    "Os nomes mais legais (0 = aventura, 100 = meu filho vai ter)",
    "Amor verdadeiro ou apenas uma aventura? (0 = nunca faço, 100 = amor verdadeiro)",
    "Coisas que você faz quando está de bom humor (0 = lamentável, 100 = faço muito)",
    "Pense como um herói: qual seria sua pose? (0 = um desânimo só, 100 = épica)",
    "Pense como um explorador: que lugares te deixam animado? (0 = não gostaria, 100 = bora lá, agora?)",
    "Mundos imaginários que você gostaria de visitar (0 = inútil, 100 = viveria lá o resto da vida)",
    "Habilidades úteis em relacionamentos (0 = fraco demais, 100 = essencial)",
    "Personagens mais fortes da ficção (0 = nada feliz, 100 = indestrutível)",
    "Coisas que você ficaria feliz em encontrar no seu bolso ou bolsa (0 = poucos encontros, 100 = alegria pura)",
    "Lugares onde mais acontecem encontros românticos (0 = isso é ridículo, 100 = está acontecendo um agora)",
    "Caretas engraçadas (faça-as) (0 = não escolheria, 100 = muito engraçado!)",
    "Um único prato pra comer até o fim da vida (0 = nada corajoso, 100 = comeria agora, inclusive)",
    "Ações e atitudes que exigem coragem (0 = nem tão ruim, 100 = pura coragem)",
    "Pense como um adolescente: o que seria algo ruim se acontecesse durante a aula? (0 = não gostaria, 100 = que vergonha!)",
    "Se você tivesse um alter ego, o que gostaria que ele fosse? (0 = de boas, 100 = é meu tipo)",
    "Personagens fictícios com os piores temperamentos (0 = desnecessária, 100 = explosivo)",
    "Habilidades importantes para um streamer (0 = desnecessária, 100 = obrigatória)",
    "Músicas pop que marcaram uma época (0 = poucos lembram, 100 = todo mundo canta junto)",
    "Habilidades úteis para um apocalipse zumbi (0 = inútil, 100 = essencial)",
    "Nível de dificuldade de um esporte (0 = muito fácil, 100 = impossível)",
    "Famosos que parecem ser amigáveis (0 = não passaria 5 minutos, 100 = BFF)",
    "Séries de TV que você maratonaria de novo (0 = nem se me pagassem, 100 = com certeza)",
    "Objetos que são mais caros do que parecem (0 = parece valioso mas não é, 100 = vale uma fortuna)",
    "Nível de emoção em um filme de terror (0 = é comédia, 100 = morro de medo)",
    "Piores conselhos que alguém já te deu (0 = até que faz sentido, 100 = pior conselho do mundo)",
    "Títulos de livros que te fazem rir (0 = sem graça, 100 = gargalhei)",
    "Nível de fofura de um animal selvagem (0 = zero fofura, 100 = o mais fofo do mundo)",
    "Comidas que são muito overrated (0 = por que as pessoas gostam disso?, 100 = comeria todo dia)",
    "Melhores poses para uma foto de grupo (0 = vergonha alheia, 100 = épica)",
    "Coisas que você odeia que aconteçam no trabalho (0 = normal do dia a dia, 100 = o pior)",
    "Vilões de filmes que são totalmente compreensíveis (0 = incompreensível, 100 = faria o mesmo)",
    "Nível de irritação ao encontrar uma meia molhada (0 = não ligo, 100 = nível de raiva 100)",
    "Tipos de pizza que te fazem feliz (0 = nem provaria, 100 = felicidade pura)",
    "Piores desculpas para se atrasar (0 = totalmente aceitável, 100 = a pior de todas)",
    "Sons irritantes do dia a dia (0 = até que é ok, 100 = insuportável)",
    "Habilidades que parecem inúteis, mas são importantes (0 = inútil mesmo, 100 = essencial)",
    "Coisas que te fazem sentir velho (0 = nem ligo, 100 = me senti um idoso)",
    "Probabilidade de sobreviver em um filme de terror (0 = seria o herói, 100 = zero chance)",
    "Lugares que todo mundo viaja, mas você não tem vontade (0 = meu sonho, 100 = zero interesse)",
    "Nível de aleatoriedade de um sonho (0 = super normal, 100 = total sem sentido)",
    "Celebridades que são talentosas em tudo que fazem (0 = nem tanto, 100 = o mais talentoso do mundo)",
    "Coisas que você diz que vai fazer, mas nunca faz (0 = sempre faço, 100 = nunca fiz)",
    "Personagens de videogame que você seria (0 = NPC aleatório, 100 = o mais forte)",
    "Melhores sabores de bolo (0 = nem provaria, 100 = comeria todos os dias)",
    "Nível de coragem em uma action do dia a dia (0 = normal, 100 = pura coragem)",
    "Filmes que parecem ser de um gênero, mas são de outro (0 = exatamente o que esperava, 100 = completamente diferente)",
    "Nível de sorte (0 = azarado, 100 = sortudo)",
    "Mitos urbanos que você acredita (0 = acho ridículo, 100 = acredito totalmente)",
    "Piores comidas de festa de aniversário (0 = a melhor, 100 = horrível)",
    "Itens de cozinha mais úteis (0 = não serve para nada, 100 = super útil)",
    "Melhores jogos de tabuleiro para jogar com estranhos (0 = ninguém se fala, 100 = quebra-gelo)",
    "Nível de irritação com um bug em um jogo (0 = nem liguei, 100 = que raiva)",
    "Coisas que você compraria se ficasse rico (0 = algo super normal, 100 = o mais bizarro)",
    "Melhores nomes para um mascote (0 = genérico, 100 = épico)",
    "Atitudes que mostram que uma pessoa é educada (0 = sem educação, 100 = a pessoa mais educada do mundo)",
    "Séries que duraram tempo demais (0 = nunca deveria ter acabado, 100 = deveria ter acabado na primeira temporada)",
    "Lugares que você acharia relaxantes (0 = estressante, 100 = o mais relaxante do mundo)",
    "Nível de estranheza em uma festa (0 = normal, 100 = muito estranho)",
    "Piores combinações de comida (0 = surpreendentemente bom, 100 = nojento)",
    "Coisas que te dão nostalgia (0 = não sinto nada, 100 = me lembra a infância)",
    "Melhores comidas para comer no frio (0 = nem ligo, 100 = a melhor)",
    "Piadas que você conta, mas ninguém entende (0 = sem graça, 100 = hilária)",
    "Nível de perigo de uma situação (0 = zero perigo, 100 = perigo iminente)",
    "Super-heróis com os piores poderes (0 = o melhor, 100 = o pior poder do mundo)",
    "Lugares que você visitaria se pudesse teletransportar (0 = nem me pagando, 100 = iria agora)",
    "Coisas que te fazem duvidar da humanidade (0 = normal do ser humano, 100 = inacreditável)",
    "Melhores filmes de comédia (0 = sem graça, 100 = ri litros)",
    "Nível de inteligência de um vilão (0 = o mais burro, 100 = o mais inteligente)",
    "Coisas que você gostaria que nunca tivessem sido inventadas (0 = a melhor invenção, 100 = a pior invenção)",
    "Melhores sabores de refrigerante (0 = o pior, 100 = o melhor do mundo)",
    "Sons que te acalmam (0 = me irrita, 100 = o mais relaxante)",
    "Melhores finais de séries de TV (0 = pior final, 100 = final épico)",
    "Nível de irritação com o trânsito (0 = tranquilo, 100 = insuportável)",
    "Coisas que você gostaria que estivessem na sua casa (0 = normal, 100 = o mais bizarro)",
    "Nível de utilidade de um objeto antigo (0 = não serve pra nada, 100 = super útil)",
    "Melhores sobremesas (0 = a pior, 100 = a melhor)",
    "Nível de dificuldade de uma receita (0 = muito fácil, 100 = impossível)",
    "Piores filmes de todos os tempos (0 = um dos melhores, 100 = o pior)",
    "Nível de emoção em um jogo de futebol (0 = o mais chato, 100 = o mais emocionante)",
    "Coisas que te fazem sentir como um adulto (0 = me sinto criança, 100 = me sinto adulto)",
    "Melhores comidas de rua (0 = a pior, 100 = a melhor)",
    "Nível de paciência em uma fila (0 = muita paciência, 100 = zero paciência)",
    "Coisas que te dão vontade de chorar (0 = não sinto nada, 100 = choro na hora)",
    "Piores músicas para cantar no karaokê (0 = a melhor, 100 = a pior)",
    "Nível de desconforto de uma roupa (0 = super confortável, 100 = insuportável)",
    "Melhores jogos de tabuleiro para jogar em família (0 = o pior, 100 = o melhor)",
    "Nível de aleatoriedade de uma conversa (0 = super coerente, 100 = total sem sentido)",
    "Melhores filmes de action (0 = o pior, 100 = o melhor)",
    "Nível de perigo de uma atividade radical (0 = zero perigo, 100 = muito perigoso)",
    "Coisas que te fazem sentir sortudo (0 = azarado, 100 = sou muito sortudo)",
    "Piores sabores de pizza (0 = o melhor, 100 = o pior)",
    "Nível de fofura de um objeto inanimado (0 = zero fofura, 100 = o mais fofo)",
    "Melhores sobremesas de festa de aniversário (0 = a pior, 100 = a melhor)",
    "Nível de importância de um meme (0 = inútil, 100 = super importante)",
    "Piores filmes de terror (0 = o melhor, 100 = o pior)",
    "Coisas que te dão vontade de gritar (0 = calma, 100 = gritaria)",
    "Nível de emoção em um livro (0 = sem graça, 100 = me emociona)",
    "Melhores comidas para comer com a mão (0 = a pior, 100 = a melhor)",
    "Nível de utilidade de um super-poder (0 = inútil, 100 = super útil)",
    "Coisas que você faria se fosse invisível (0 = faria algo bom, 100 = faria a pior coisa)",
    "Melhores sabores de pizza doce (0 = a pior, 100 = a melhor)",
    "Nível de perigo de um animal selvagem (0 = zero perigo, 100 = perigo iminente)",
    "Coisas que te deixam irritado (0 = normal, 100 = a pior)",
    "Melhores músicas para dançar (0 = a pior, 100 = a melhor)",
    "Nível de perigo de uma viagem (0 = zero perigo, 100 = muito perigoso)",
    "Coisas que te fazem rir (0 = não sinto nada, 100 = gargalhei)",
    "Melhores filmes de animação (0 = o pior, 100 = o melhor)",
    "Nível de utilidade de um aplicativo (0 = inútil, 100 = super útil)",
    "Coisas que te dão vontade de cantar (0 = odeio cantar, 100 = canto o tempo todo)",
    "Melhores sabores de bolo de aniversário (0 = o pior, 100 = o melhor)",
    "Nível de perigo de um esporte radical (0 = zero perigo, 100 = muito perigoso)",
    "Coisas que te fazem sentir em casa (0 = me sinto um estranho, 100 = me sinto em casa)",
    "Nível de emoção em uma série de TV (0 = o mais chato, 100 = o mais emocionante)",
    "Coisas que você faria se pudesse voltar no tempo (0 = faria o que não podia, 100 = faria o que sempre quis)",
    "Melhores sabores de sorvete de massa (0 = o pior, 100 = o melhor)",
    "Nível de utilidade de um acessório (0 = inútil, 100 = super útil)",
    "Coisas que te fazem querer ser um adulto (0 = quero ser criança, 100 = quero ser adulto)",
    "Melhores filmes de ficção científica (0 = o pior, 100 = o melhor)",
    "Nível de perigo de uma situação no trabalho (0 = zero perigo, 100 = muito perigoso)"
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
        // Exibe o número sorteado puro (0 a 100)
        numberTextElement.textContent = playersNumbers[currentPlayerIndex];
        
        currentPlayerIndex++;
        
        if (currentPlayerIndex === playersNumbers.length) {
            nextButton.textContent = "Mostrar Assunto";
        }

    } else {
        showScreen(themeScreen);
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

