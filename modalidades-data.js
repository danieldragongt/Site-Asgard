// ==========================================================
// DADOS DAS MODALIDADES - CT ASGARD
// Centralizar aqui facilita reaproveitar o mesmo conteúdo
// no futuro app (basta importar este objeto/JSON).
//
// Cada modalidade pode ter um array "extras" com seções
// adicionais (filosofia, rituais, equipamentos, pontuação...).
// Tipos suportados em extras: "texto" | "lista" | "cards" | "tabela"
// ==========================================================

const MODALIDADES = {

  // ======================================================
  // MUAY THAI
  // ======================================================
  "muaythai": {
    nome: "Muay Thai",
    subtitulo: "A Arte das Oito Armas",
    imagem: "muaythai.png",
    horarioMod: "Muay Thai",
    historia: `O Muay Thai, conhecido como "a arte das oito armas", nasceu junto com a própria formação do povo tailandês. Entre os séculos XIV e XVIII, nas eras de Sukhothai e Ayutthaya, o antigo Reino do Sião vivia em constante conflito com reinos vizinhos, principalmente a Birmânia. Como as batalhas muitas vezes evoluíam para o combate corpo a corpo após a perda de espadas e lanças, os soldados desenvolveram um sistema de luta desarmada extremamente eficiente.

O rei Naresuan, no fim do século XVI, foi um dos maiores incentivadores da arte, treinando seus próprios soldados para serem ágeis e implacáveis. Ao longo do século XX, o Muay Thai de guerra (Muay Boran) foi se transformando em esporte de ringue: surgiram regras modernas, divisões de peso, rounds cronometrados e o uso de luvas de boxe no lugar das cordas de cânhamo amarradas nas mãos dos lutadores.`,
    golpes: [
      { nome: "Mhad (Socos)", desc: "Golpes de mão como o Mhad Trong (soco direto), usados para medir distância e abrir combinações." },
      { nome: "Dteh (Chutes circulares)", desc: "O golpe mais característico da arte: chutes devastadores aplicados com a canela, e não com o peito do pé." },
      { nome: "Teep (Chute frontal)", desc: "Chute/empurrão frontal usado para manter a distância e desestabilizar o adversário." },
      { nome: "Sok (Cotoveladas)", desc: "Uma das armas mais perigosas e cortantes do jogo, aplicada de perto." },
      { nome: "Khao (Joelhadas)", desc: "Extremamente fortes no combate de curta distância, muito usadas dentro do clinch." },
      { nome: "Clinch (Pam)", desc: "Agarrar o adversário pelo pescoço ou tronco para desferir joelhadas e desequilibrá-lo." }
    ],
    extras: [
      {
        titulo: "Filosofia: os 10 Mandamentos do Muay Thai",
        tipo: "lista",
        texto: "Apesar de ser uma arte de combate contundente, o Muay Thai é fundamentado no respeito absoluto. Os \"10 Mandamentos\" funcionam como um código de ética que o praticante carrega dentro e fora do camp (academia):",
        itens: [
          "Respeitar os pais — a base de tudo",
          "Respeitar o Mestre (Kru), que transmite o conhecimento",
          "Respeitar os mais graduados, valorizando hierarquia e experiência",
          "Respeitar os mais fracos, nunca usando a força para humilhar ou oprimir",
          "Respeitar os mais fortes, reconhecendo o valor e a dedicação alheia",
          "Nunca agredir fora do ambiente de treino",
          "Usar as técnicas apenas para defesa — sua arte é seu escudo, não sua arma",
          "Treinar sempre, mantendo disciplina e evolução constante",
          "Manter o caráter e a honra em primeiro lugar",
          "Ter amor à equipe, enxergando a academia como uma segunda família"
        ]
      },
      {
        titulo: "Rituais Sagrados",
        tipo: "cards",
        itens: [
          { nome: "Wai Kru", desc: "Gesto de reverência com as mãos juntas. O lutador se ajoelha no centro do ringue e faz três reverências, agradecendo aos pais, aos mestres e à sua espiritualidade." },
          { nome: "Ram Muay", desc: "Dança tradicional em que o lutador percorre o ringue tocando as cordas e os quatro cantos, \"selando\" o espaço sagrado da luta e aquecendo corpo e mente. Cada academia tem sua própria coreografia." },
          { nome: "A Sarama", desc: "Música tradicional tocada ao vivo com Pi Java (flauta), Klong Khaek/Ta Pong (tambores) e Ching (címbalos), que começa lenta no Wai Kru e acelera conforme a luta avança." }
        ]
      },
      {
        titulo: "Objetos Tradicionais e Espirituais",
        tipo: "cards",
        itens: [
          { nome: "Mongkon", desc: "Coroa de cordões sagrados abençoada por monges, colocada na cabeça do lutador antes da luta. Apenas o mestre pode colocá-la e retirá-la." },
          { nome: "Prajied", desc: "Braçadeira trançada usada no bíceps, historicamente feita com tecidos caros ao guerreiro, servindo como amuleto de proteção e coragem." },
          { nome: "Kruang / Pracruang", desc: "Termos ligados aos adornos sagrados: Kruang é o adorno de proteção no braço, e Pracruang é o amuleto em si, muitas vezes costurado dentro do Prajied." }
        ]
      },
      {
        titulo: "Os 4 Principais Estilos de Luta",
        tipo: "cards",
        itens: [
          { nome: "Muay Femur (O Técnico)", desc: "Estilo elegante e inteligente, baseado em timing perfeito, contra-ataques precisos e domínio total da distância. O lutador usa a técnica e a leitura de jogo para desgastar e neutralizar o adversário com o mínimo de esforço." },
          { nome: "Muay Khao (O Joelheiro)", desc: "Focado no clinch e nas joelhadas. O lutador busca agarrar o adversário o quanto antes para controlar a luta de perto e aplicar joelhadas constantes, desgastando o oponente fisicamente." },
          { nome: "Muay Mat (O Batedor)", desc: "Estilo de pressão constante com socos fortes e combinações pesadas, avançando sempre para cima do adversário. Prioriza o poder de nocaute através da troca direta." },
          { nome: "Muay Sok (O Cotoveleiro)", desc: "Especialista em cotoveladas, geralmente aplicadas de perto ou no clinch. É um estilo agressivo e cortante, muito temido pelo risco de cortes profundos no adversário." }
        ]
      },
      {
        titulo: "Como os juízes avaliam uma luta",
        tipo: "lista",
        texto: "Diferente do Boxe, onde o volume de socos conta muito, no Muay Thai os critérios seguem esta ordem de importância:",
        itens: [
          "Efetividade e dano real — só pontua o golpe aplicado com força e precisão que desestabiliza o oponente",
          "Postura e equilíbrio — perder o equilíbrio sozinho após um golpe tira pontos; projetar o adversário no clinch soma pontos",
          "Domínio tático e controle do ringue — ditar o ritmo do combate",
          "Habilidade técnica geral — a plasticidade dos movimentos"
        ]
      }
    ],
    beneficios: [
      "Condicionamento cardiovascular e resistência muscular",
      "Alto gasto calórico e definição corporal",
      "Desenvolvimento de coordenação motora e reflexos",
      "Defesa pessoal eficiente em curta e média distância",
      "Disciplina, foco e controle emocional"
    ]
  },

  // ======================================================
  // MUAY THAI KIDS
  // ======================================================
  "muaythaikids": {
    nome: "Muay Thai Kids",
    subtitulo: "Disciplina e Coordenação desde Cedo",
    imagem: "muaythaikids.png",
    horarioMod: "Muay Thai Kids",
    historia: `O Muay Thai Kids segue a mesma origem tailandesa do Muay Thai tradicional, mas com metodologia totalmente adaptada para o universo infantil. Diferente do que muitos imaginam pela intensidade dos combates profissionais, o treino infantil não foca em contato físico traumático — o contato na região da cabeça costuma ser terminantemente proibido — e sim na disciplina, na coordenação e no respeito aos limites do próprio corpo e do próximo.

O treino para crianças de até 10-12 anos é guiado pelo lúdico: os professores usam brincadeiras como "pega-pega" adaptado, circuitos de agilidade e jogos de reflexo para ensinar as bases do Muay Thai sem que a aula se torne maçante ou perigosa.`,
    golpes: [
      { nome: "Guarda e postura básica", desc: "Primeiro passo do treino, ensina a criança a se posicionar e se proteger corretamente." },
      { nome: "Jab (soco direto)", desc: "Introduzido com foco em técnica e coordenação, sem contato pesado." },
      { nome: "Teep controlado", desc: "Chute frontal trabalhado em aparadores (paos/manoplas), sem contato direto entre alunos." },
      { nome: "Jogos de deslocamento", desc: "Atividades lúdicas que desenvolvem equilíbrio, agilidade e noção de distância." },
      { nome: "Combinações em aparadores", desc: "Sequências simples de golpes aplicadas em equipamentos, nunca em sparring pesado." }
    ],
    extras: [
      {
        titulo: "Desenvolvimento motor e físico completo",
        tipo: "cards",
        itens: [
          { nome: "Coordenação e equilíbrio", desc: "Chutar com uma perna enquanto se equilibra na outra e alternar braços e pernas estimula o cerebelo e a consciência corporal." },
          { nome: "Flexibilidade e postura", desc: "Chutes altos e movimentação constante desenvolvem a elasticidade natural, prevenindo desvios posturais do excesso de tempo em telas." },
          { nome: "Resistência cardiorrespiratória", desc: "Treinos em circuitos dinâmicos e lúdicos fortalecem coração e pulmão, combatendo a obesidade infantil de forma divertida." }
        ]
      },
      {
        titulo: "Disciplina, autoestima e foco",
        tipo: "lista",
        itens: [
          "Hierarquia saudável — saudar o mestre (Kru) com o tradicional Wai desenvolve respeito à autoridade de forma natural",
          "Autocontrole — a criança aprende que as técnicas pertencem estritamente ao tatame",
          "Superação de barreiras — aprender um golpe difícil transmite a sensação de \"eu consigo\" para a vida escolar e pessoal",
          "Segurança pessoal — melhora a postura e reduz as chances de a criança virar alvo de bullying",
          "Foco no presente — segurar um aparador ou desviar de um golpe lúdico exige atenção plena, ajudando em quadros de ansiedade e hiperatividade",
          "Válvula de escape saudável — socar e chutar sacos de pancada de forma controlada ajuda a descarregar estresse, resultando em crianças mais calmas em casa e com melhor sono"
        ]
      },
      {
        titulo: "Socialização e espírito de equipe",
        tipo: "texto",
        texto: "Embora o combate seja individual, o treino diário é coletivo: grande parte dos exercícios exige que uma criança segure as manoplas para a outra, ensinando empatia e cooperação. O tatame é um ambiente democrático onde diferenças sociais, físicas ou de personalidade se dissolvem — crianças tímidas encontram voz, e as mais expansivas aprendem a dividir o espaço."
      }
    ],
    beneficios: [
      "Melhora da coordenação motora e do equilíbrio",
      "Disciplina, respeito e foco dentro e fora do tatame",
      "Gasto de energia de forma saudável e orientada",
      "Ganho de confiança e ferramentas contra o bullying",
      "Socialização em um ambiente seguro e supervisionado"
    ]
  },

  // ======================================================
  // BOXE
  // ======================================================
  "boxe": {
    nome: "Boxe",
    subtitulo: "A Nobre Arte",
    imagem: "galeria5.png",
    horarioMod: "Boxe",
    historia: `O Boxe é uma das formas de combate mais antigas e documentadas da humanidade. Há registros de combates de punhos na Mesopotâmia, mas foi na Grécia Antiga que o esporte se oficializou, integrando os Jogos Olímpicos em 688 a.C. Na Roma Antiga, os combates ocorriam em arenas com o uso do caestus (luvas de couro reforçadas com metal), frequentemente fatais.

Após séculos esquecido, o Boxe ressurgiu na Inglaterra dos séculos XVII e XVIII como combate de mãos nuas, sem limite de tempo. As Regras de Broughton (1743) — criadas após o campeão Jack Broughton matar acidentalmente um oponente — introduziram a contagem de 30 segundos e as primeiras luvas de treino. Já as Regras do Marquês de Queensberry (1867) transformaram o Boxe no esporte moderno: luvas acolchoadas obrigatórias, rounds de 3 minutos, contagem de 10 segundos (knockout) e proibição de agarrar, derrubar ou chutar o oponente.`,
    golpes: [
      { nome: "Jab", desc: "Soco direto com a mão da frente. Mede distância, pontua e abre caminho para golpes mais fortes." },
      { nome: "Direto (Cross)", desc: "Soco reto forte com a mão de trás, carregando o peso do corpo e o giro do quadril." },
      { nome: "Cruzado (Hook)", desc: "Soco lateral curto em ângulo de 90°, mirando têmporas, queixo ou fígado." },
      { nome: "Upper (Uppercut)", desc: "Golpe ascendente mirando o queixo ou o plexo do adversário em curta distância." },
      { nome: "Footwork e esquiva", desc: "Trabalho de pernas para manter distância e movimentos de cabeça/tronco (slip, bob and weave) para evitar golpes sem perder posição." },
      { nome: "Clinche", desc: "Segurar o corpo do adversário para travar a luta ou recuperar o fôlego, até o árbitro comandar \"Break!\"." }
    ],
    extras: [
      {
        titulo: "Filosofia: os princípios da Nobre Arte",
        tipo: "lista",
        texto: "O Boxe é chamado de \"a nobre arte\" porque prega que a força bruta não é nada sem estratégia, respeito e elegância de espírito:",
        itens: [
          "Autodisciplina extrema no treino repetitivo",
          "Respeito ao oponente, que compartilha dos mesmos riscos e sacrifícios",
          "Resiliência mental para absorver um golpe e manter o plano de luta",
          "Honra no ringue — jamais golpear um adversário caído, pelas costas ou abaixo da cintura",
          "Humildade na vitória e na derrota",
          "Proteção da própria vida e do companheiro de treino"
        ]
      },
      {
        titulo: "Rituais e Tradições",
        tipo: "cards",
        itens: [
          { nome: "A Pesagem (Weigh-in)", desc: "Um dia antes da luta, é o primeiro combate psicológico: os lutadores sobem na balança e fazem a encarada (face-off)." },
          { nome: "Bandaging", desc: "Ritual quase meditativo no vestiário, quando o treinador envolve as mãos do atleta com bandagem — momento de silêncio e foco." },
          { nome: "O Corner", desc: "O minuto de descanso no canto do ringue é sagrado: o treinador passa instruções enquanto o cutman cuida de cortes e inchaços." }
        ]
      },
      {
        titulo: "Como os juízes avaliam o round",
        tipo: "lista",
        texto: "O Boxe profissional usa o sistema de 10 pontos: o vencedor do round leva 10, o perdedor 9 (ou 8 em caso de domínio amplo ou knockdown). A ordem de prioridade na avaliação é:",
        itens: [
          "Golpes efetivos — socos limpos e contundentes nas áreas válidas",
          "Defesa efetiva — bloqueios, esquivas e movimentação que neutralizam o ataque",
          "Generalato de ringue — quem controla o ritmo e o espaço do combate",
          "Agressividade limpa — atacar de forma técnica, sem jogar socos no vento"
        ]
      }
    ],
    beneficios: [
      "Excelente condicionamento cardiorrespiratório",
      "Reflexos rápidos e coordenação olho-mão",
      "Fortalecimento de core, ombros e pernas",
      "Alívio de estresse e ganho de autoconfiança",
      "Base técnica valiosa para outras modalidades de combate"
    ]
  },

  // ======================================================
  // JIU-JITSU
  // ======================================================
  "jiujitsu": {
    nome: "Jiu-Jitsu",
    subtitulo: "A Arte Suave",
    imagem: "jiujitsu.png",
    horarioMod: "Jiu-Jitsu",
    historia: `A história do Jiu-Jitsu atravessa séculos e continentes. Há teorias de que as bases da luta agarrada surgiram na Índia, mas foi no Japão Feudal que a arte se consolidou: os samurais desenvolveram o Jujutsu para o combate corpo a corpo quando perdiam suas espadas, já que socos e chutes eram ineficazes contra armaduras rígidas — a solução eram quedas, chaves e estrangulamentos.

No fim do século XIX, o mestre Jigoro Kano reuniu as melhores técnicas do Jujutsu e criou o Judô, focado em educação física e mental. Em 1914, o japonês Mitsuyo Maeda ("Conde Koma"), aluno de Kano, chegou a Belém do Pará e ensinou a arte ao jovem Carlos Gracie. Carlos e, mais tarde, seu irmão mais novo Hélio Gracie — fisicamente mais fraco — adaptaram as técnicas: sem força bruta para projetar adversários, Hélio aprimorou o uso de alavancas, tempo e peso corporal, permitindo que uma pessoa menor dominasse um oponente muito maior. Nascia o Brazilian Jiu-Jitsu (BJJ).`,
    golpes: [
      { nome: "Guarda", desc: "Posição onde o lutador está no chão mas usa as pernas para controlar a distância e impedir o avanço do adversário — o \"escudo\" do jiu-jitsu." },
      { nome: "Passagem de Guarda", desc: "Técnica do lutador que está por cima para transpor as pernas do oponente e dominá-lo." },
      { nome: "Montada", desc: "Uma das posições mais dominantes: o lutador senta diretamente sobre o tronco do oponente." },
      { nome: "Pegada pelas Costas", desc: "A posição mais perigosa da luta: domina as costas do adversário com os \"ganchos\" nas pernas, abrindo caminho para estrangulamentos." },
      { nome: "Armlock", desc: "Chave de braço que força a articulação do cotovelo além do limite natural, usando o quadril como alavanca." },
      { nome: "Mata-Leão", desc: "Estrangulamento pelas costas que comprime as artérias carótidas, cortando o fluxo de oxigênio para o cérebro." },
      { nome: "Kimura / Americana", desc: "Chaves que rotacionam a articulação do ombro do oponente para trás ou para a frente." }
    ],
    extras: [
      {
        titulo: "Filosofia: o conceito de \"Arte Suave\"",
        tipo: "lista",
        texto: "Jiu (suave, maleável) + Jitsu (arte, técnica). A filosofia principal é a não-resistência: em vez de opor força contra força, o praticante cede à força do adversário para usá-la contra ele mesmo.",
        itens: [
          "A mente sobre a força — inteligência estratégica e paciência vencem a brutalidade",
          "Eficiência máxima com esforço mínimo — encontrar o ângulo e a alavanca perfeita",
          "Humildade no tap out — bater três vezes é o maior ato de aprendizado, reconhecendo o erro sem se lesionar",
          "Calma sob pressão — respirar e raciocinar mesmo em extremo desconforto físico"
        ]
      },
      {
        titulo: "Rituais e Tradições do Tatame",
        tipo: "cards",
        itens: [
          { nome: "Rei (Cumprimento)", desc: "Ao entrar e sair do tatame, o praticante faz uma reverência em respeito ao espaço sagrado de treino, dizendo \"Oss\"." },
          { nome: "\"Oss\"", desc: "Termo japonês usado para quase tudo no tatame: sim, entendido, obrigado, respeito ou olá." },
          { nome: "Banho de Faixa", desc: "Quando um aluno é promovido, passa por um corredor onde os colegas aplicam leves pancadas com as próprias faixas, simbolizando a jornada até ali." }
        ]
      },
      {
        titulo: "Gi vs. No-Gi",
        tipo: "cards",
        itens: [
          { nome: "Jiu-Jitsu de Kimono (Gi)", desc: "O tecido resistente do kimono permite segurar gola, mangas e calça do adversário para quedas, raspagens e estrangulamentos. A faixa (Obi) indica a graduação: Branca, Azul, Roxa, Marrom e Preta." },
          { nome: "No-Gi (Submission Grappling)", desc: "Os atletas usam rashguard e shorts de compressão. Sem a pegada do tecido, a luta fica mais rápida e escorregadia, focada em chaves de calcanhar, tornozelo e estrangulamentos anatômicos." }
        ]
      },
      {
        titulo: "Sistema de Pontuação (IBJJF)",
        tipo: "tabela",
        colunas: ["Ação", "Pontos", "Descrição"],
        itens: [
          ["Queda (Take-down)", "2", "Desequilibrar o oponente e levá-lo ao solo"],
          ["Raspagem (Sweep)", "2", "Inverter a posição de baixo para cima a partir da guarda"],
          ["Passagem de Guarda", "3", "Transpor as pernas do adversário e dominá-lo de lado"],
          ["Joelho na Barriga", "2", "Colocar o joelho sobre o abdômen do oponente"],
          ["Montada", "4", "Sentar sobre o peito/abdômen do oponente virado para a cabeça dele"],
          ["Pegada pelas Costas", "4", "Dominar o oponente pelas costas com os calcanhares na parte interna das coxas dele"]
        ]
      },
      {
        titulo: "Jiu-Jitsu para Crianças",
        tipo: "lista",
        texto: "O Jiu-Jitsu infantil é uma das ferramentas pedagógicas e de inclusão social mais recomendadas por psicólogos e educadores:",
        itens: [
          "Anti-bullying prático — a criança aprende a neutralizar e imobilizar uma ameaça sem machucar o colega",
          "Propriocepção — rolar, dar cambalhotas e rastejar estimula a percepção do próprio corpo no espaço",
          "Humildade e tolerância à frustração — desistir (\"bater\") muitas vezes antes de aprender a finalizar ensina a lidar com perdas",
          "Respeito às diferenças físicas — crianças menores descobrem que a técnica certa nivela o ambiente",
          "Socialização — o contato constante gera laços profundos de confiança e amizade"
        ]
      }
    ],
    beneficios: [
      "Defesa pessoal real, mesmo contra oponentes maiores",
      "Fortalecimento muscular e melhora da flexibilidade",
      "Desenvolvimento do raciocínio tático e paciência",
      "Controle emocional sob pressão",
      "Forte senso de comunidade e evolução constante (faixas)"
    ]
  }

};
