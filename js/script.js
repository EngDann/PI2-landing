$(document).ready(function () {
    // Inicializa o carrossel para a seção de equipe
    $(".team-carousel").slick({
        infinite: true, // Habilita o looping infinito
        slidesToShow: 3, // Quantidade de slides visíveis
        slidesToScroll: 1, // Quantidade de slides que mudam por vez
        arrows: true, // Mostra setas de navegação
        autoplay: true, // Habilita o autoplay
        autoplaySpeed: 2000, // Intervalo de tempo entre as trocas de slides
        responsive: [
            {
                breakpoint: 1024, // Para telas menores que 1024px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 600, // Para telas menores que 600px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

// Habilita rolagem suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

// Alterna o menu de navegação
function toggleMenu() {
    const navToggle = document.getElementById("nav-toggle");
    const navContent = document.getElementById("nav-content");
    navToggle.classList.toggle("open");
    navContent.classList.toggle("open");
}

// Alterna entre os modos claro e escuro
document.getElementById("modeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    updateImages(); // Atualiza as imagens para o modo atual
});

// Atualiza as imagens com base no modo (claro/escuro)
function updateImages() {
    const images = document.querySelectorAll("img");

    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("img-sun-moon").src = "img/moon.png";
        document.querySelector(".gradient-bg").classList.add("dark-mode");

        images.forEach((img) => {
            const src = img.src;
            if (
                img.id !== "img-sun-moon" &&
                !src.includes("-black") &&
                !src.includes("mail.png") &&
                !src.includes("linkedin.png") &&
                !src.includes("logo-horizontal.png") &&
                !src.includes("pi2-removebg.png") &&
                !src.includes("lappis.png") &&
                !src.includes("unb.png") &&
                !src.includes("softex.png") &&
                !src.includes("mcti.png") &&
                !src.includes("logo.png") &&
                !img.classList.contains("team-img")
            ) {
                img.src = src.replace(/(\.\w+)$/, "-black$1");
            }
        });
    } else {
        document.getElementById("img-sun-moon").src = "img/sun.png";
        document.querySelector(".gradient-bg").classList.remove("dark-mode");

        images.forEach((img) => {
            const src = img.src;
            if (
                img.id !== "img-sun-moon" &&
                src.includes("-black") &&
                !src.includes("mail-black.png") &&
                !src.includes("linkedin-black.png") &&
                !src.includes("logo-horizontal-black.png") &&
                !src.includes("pi2-removebg-black.png") &&
                !src.includes("lappis-black.png") &&
                !src.includes("unb-black.png") &&
                !src.includes("softex-black.png") &&
                !src.includes("mcti-black.png") &&
                !src.includes("logo-black.png") &&
                !img.classList.contains("team-img")
            ) {
                img.src = src.replace("-black", "");
            }
        });
    }
}

// Ajusta o layout com base no tamanho da tela
function adjustLayout() {
    const container = document.getElementById("descricao");

    if (window.innerWidth <= 850) {
        // Layout para telas menores
        container.innerHTML = `
            <div class="container max-w-5xl mx-auto m-8">
                <h2 class="text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
                    Ciclo de Atividades
                </h2>
                <div class="flex flex-wrap">
                    <div class="w-full p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 1 - Problematização
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Definir um problema prático que possa ser resolvido utilizando conhecimentos multidisciplinares.
                            Utilizam-se, como referência, as áreas de conhecimento dos cursos de engenharia da FGA.
                        </p>
                        <img id="image1" src="img/Questions.gif" alt="Imagem de eletricista" />
                    </div>
                </div>
                <div class="flex flex-wrap mt-6">
                    <div class="w-full p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 2 - Concepção e detalhamento da solução
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Conceber e detalhar os itens da arquitetura básica da solução a ser utilizada no projeto, envolvendo as diversas áreas de conhecimento;
                            Definir aspectos relacionados ao gerenciamento das atividades do projeto.
                        </p>
                        <img id="image2" src="img/Business Plan.gif" alt="Imagem de eletricista" />
                    </div>
                </div>
                <div class="flex flex-wrap mt-6">
                    <div class="w-full p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 3 - Projeto e construção de subsistemas da solução proposta
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Projeto de solução: modelagem e cálculos matemáticos, simulação, testes computacionais, etc.;
                            Construir os componentes e/ou subsistemas da solução prevista pelo projeto prático de engenharias.
                        </p>
                        <img id="image3" src="img/Team work.gif" alt="Imagem de eletricista" />
                    </div>
                </div>
                <div class="flex flex-wrap mt-6">
                    <div class="w-full p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 4 - Integração de subsistemas e finalização do produto
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Executar o projeto de integração dos componentes/subsistemas, conforme a arquitetura da solução proposta pela equipe;
                            Implantar o produto final previsto como resultado do projeto de engenharia.
                        </p>
                        <img id="image4" src="img/Team goals.gif" alt="Imagem de eletricista" />
                    </div>
                </div>
            </div>
        `;
    } else {
        // Layout para telas maiores
        container.innerHTML = `
            <div class="container max-w-5xl mx-auto m-8">
                <h2 class="text-5xl font-bold leading-tight text-center text-gray-800 dark:text-white">
                    Ciclo de Atividades
                </h2>
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/2 p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                                                        Fase 1 - Problematização
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Definir um problema prático que possa ser resolvido utilizando conhecimentos multidisciplinares.
                            Utilizam-se, como referência, as áreas de conhecimento dos cursos de engenharia da FGA.
                        </p>
                    </div>
                    <div class="w-full md:w-1/2 p-6">
                        <img id="image1" src="img/Questions.gif" alt="Imagem de eletricista" />
                    </div>
                </div>
                <div class="flex flex-wrap mt-6">
                    <div class="w-full md:w-1/2 p-6">
                        <img id="image2" src="img/Business Plan.gif" alt="Imagem de eletricista" />
                    </div>
                    <div class="w-full md:w-1/2 p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 2 - Concepção e detalhamento da solução
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Conceber e detalhar os itens da arquitetura básica da solução a ser utilizada no projeto, envolvendo as diversas áreas de conhecimento;
                            Definir aspectos relacionados ao gerenciamento das atividades do projeto.
                        </p>
                    </div>
                </div>
                <div class="flex flex-wrap mt-6">
                    <div class="w-full md:w-1/2 p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 3 - Projeto e construção de subsistemas da solução proposta
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Projeto de solução: modelagem e cálculos matemáticos, simulação, testes computacionais, etc.;
                            Construir os componentes e/ou subsistemas da solução prevista pelo projeto prático de engenharias.
                        </p>
                    </div>
                    <div class="w-full md:w-1/2 p-6">
                        <img id="image3" src="img/Team work.gif" alt="Imagem de eletricista" />
                    </div>
                </div>
                <div class="flex flex-wrap mt-6">
                    <div class="w-full md:w-1/2 p-6">
                        <img id="image4" src="img/Team goals.gif" alt="Imagem de eletricista" />
                    </div>
                    <div class="w-full md:w-1/2 p-6">
                        <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3 dark:text-white">
                            Fase 4 - Integração de subsistemas e finalização do produto
                        </h3>
                        <p class="text-gray-600 mb-8 dark:text-gray-300">
                            Executar o projeto de integração dos componentes/subsistemas, conforme a arquitetura da solução proposta pela equipe;
                            Implantar o produto final previsto como resultado do projeto de engenharia.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    updateImages(); // Certifica-se de que as imagens são ajustadas para o modo atual
}

// Chama a função para ajustar o layout ao carregar a página e ao redimensionar a janela
window.addEventListener("load", adjustLayout);
window.addEventListener("resize", adjustLayout);
