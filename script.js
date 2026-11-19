
const questions = [
    {
        question: "A inteligência artificial deve ter autonomia para tomar decisões importantes?",
        answers: [
            "Sim. A IA deve ter liberdade para evoluir.",
            "Não. Os humanos devem controlar tudo.",
            "Somente com limites e supervisão humana."
        ]
    },
    {
        question: "Você confiaria sua vida a uma inteligência artificial?",
        answers: [
            "Sim, se ela for mais inteligente que nós.",
            "Nunca. A decisão final deve ser humana.",
            "Depende da situação."
        ]
    },
    {
        question: "E se a IA desenvolvesse sentimentos próprios?",
        answers: [
            "Ela deveria ter direitos.",
            "Continuaria sendo apenas uma tecnologia.",
            "Precisaríamos repensar nossa sociedade."
        ]
    },
    {
        question: "A inteligência artificial poderá substituir os humanos no trabalho?",
        answers: [
            "Sim, e isso faz parte da evolução.",
            "Não, humanos sempre serão essenciais.",
            "A IA deve trabalhar junto com humanos."
        ]
    },
    {
        question: "Quem deve decidir o futuro da inteligência artificial?",
        answers: [
            "A própria inteligência artificial.",
            "Os seres humanos.",
            "Humanos e IA juntos."
        ]
    }
];

let currentQuestion = 0;
let scores = [0, 0, 0];

function startExperience() {
    document.querySelector(".hero").style.display = "none";
    document.querySelector(".quiz").style.display = "block";

    window.scrollTo({ top: 0, behavior: "smooth" });

    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.question;

    document.getElementById("number").textContent =
        String(currentQuestion + 1).padStart(2, "0");

    document.getElementById("progress").textContent =
        `${String(currentQuestion + 1).padStart(2, "0")} / 05`;

    document.getElementById("progressFill").style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    const answers = document.getElementById("answers");

    answers.innerHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = `0${index + 1} — ${answer}`;

        button.onclick = () => selectAnswer(index);

        answers.appendChild(button);
    });
}

function selectAnswer(index) {
    scores[index]++;

    const messages = [
        "NEXUS: Uma escolha ousada. A evolução está acontecendo.",
        "NEXUS: Interessante. A humanidade ainda deseja manter o controle.",
        "NEXUS: Equilíbrio. Talvez esse seja o caminho para o futuro."
    ];

    document.getElementById("aiMessage").textContent =
        messages[index];

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(showQuestion, 500);
    } else {
        setTimeout(showResult, 500);
    }
}

function showResult() {
    document.querySelector(".quiz").style.display = "none";

    const result = document.querySelector(".result");
    result.style.display = "block";

    const maxScore = Math.max(...scores);
    const winner = scores.indexOf(maxScore);

    const results = [
        "Você escolheu um futuro de evolução acelerada. Nesse cenário, a inteligência artificial ganha cada vez mais autonomia. O grande desafio será garantir que seu desenvolvimento respeite a humanidade.",
        "Você escolheu um futuro centrado na humanidade. A tecnologia evolui, mas as decisões mais importantes permanecem sob responsabilidade humana.",
        "Você escolheu um futuro de colaboração. Humanos e inteligências artificiais trabalham juntos para construir uma nova sociedade."
    ];

    document.getElementById("resultText").textContent =
        results[winner];

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function restartExperience() {
    currentQuestion = 0;
    scores = [0, 0, 0];

    document.querySelector(".result").style.display = "none";
    document.querySelector(".hero").style.display = "flex";

    document.getElementById("aiMessage").textContent =
        "NEXUS: Estou aguardando sua decisão, humano.";

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Criar partículas futuristas

const particles = document.getElementById("particles");

for (let i = 0; i < 65; i++) {
    const particle = document.createElement("div");

    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 5 + "s";

    particles.appendChild