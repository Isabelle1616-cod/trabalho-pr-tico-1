
// A. DADOS (JSON) - Estrutura dos livros
const dados = {
    "livros": [
        {
            "id": 1,
            "titulo": "1984",
            "autor": "George Orwell",
            "genero": "Ficção Distópica",
            "descricao_curta": "Um futuro sombrio onde a vigilância é total e a liberdade de pensamento é proibida.",
            "sinopse": "Winston, herói de 1984, último romance de George Orwell, vive aprisionado na engrenagem totalitária de uma sociedade completamente dominada pelo Estado, onde tudo é feito coletivamente, mas cada qual vive sozinho. Ninguém escapa à vigilância do Grande Irmão, a mais famosa personificação literária de um poder cínico e cruel ao infinito, além de vazio de sentido histórico. De fato, a ideologia do Partido dominante em Oceânia não visa nada de coisa alguma para ninguém, no presente ou no futuro. O'Brien, hierarca do Partido, é quem explica a Winston que só nos interessa o poder em si. Nem riqueza, nem luxo, nem vida longa, nem felicidade: só o poder pelo poder, poder puro .Quando foi publicada em 1949, essa assustadora distopia datada de forma arbitrária num futuro perigosamente próximo logo experimentaria um imenso sucesso de público. Seus principais ingredientes - um homem sozinho desafiando uma tremenda ditadura; sexo furtivo e libertador; horrores letais - atraíram leitores de todas as idades, à esquerda e à direita do espectro político, com maior ou menor grau de instrução. À parte isso, a escrita translúcida de George Orwell, os personagens fortes, traçados a carvão por um vigoroso desenhista de personalidades, a trama seca e crua e o tom de sátira sombria garantiram a entrada precoce de 1984 no restrito panteão dos grandes clássicos modernos.",
            "destaque": true,
            "ano_publicacao": 1949,
            "imagem_pincipal": "assets/img/livro_1984.jpg",
            "imagens_complementares": [
                { "id": 1, "src": "assets/img/capa_antiga_1984.jpg", "descricao": "Capa de uma edição clássica" }
            ]
        },
        {
            "id": 2,
            "titulo": "Cem Anos de Solidão",
            "autor": "Gabriel García Márquez",
            "genero": "Realismo Mágico",
            "descricao_curta": "A história da família Buendía ao longo de sete gerações na cidade fictícia de Macondo.",
            "sinopse": "Em Cem anos de solidão, um dos maiores clássicos da literatura, o prestigiado autor narra a incrível e triste história dos Buendía - a estirpe de solitários para a qual não será dada “uma segunda oportunidade sobre a terra” e apresenta o maravilhoso universo da fictícia Macondo, onde se passa o romance. É lá que acompanhamos diversas gerações dessa família, assim como a ascensão e a queda do vilarejo. Para além dos artifícios técnicos e das influências literárias que transbordam do livro, ainda vemos em suas páginas o que por muitos é considerado uma autêntica enciclopédia do imaginário, num estilo que consagrou o colombiano como um dos maiores autores do século XX. Em nenhum outro livro García Márquez empenhou-se tanto para alcançar o tom com que sua avó materna lhe contava os episódios mais fantásticos sem alterar um só traço do rosto. Assim, ao mesmo tempo em que a incrível e triste história dos Buendía pode ser entendida como uma autêntica enciclopédia do imaginário, ela é narrada de modo a parecer que tudo faz parte da mais banal das realidades. Gabo, apelido de Gabriel García Márquez, costumava dizer que todo grande escritor está sempre escrevendo o mesmo livro. “E qual seria o seu?”, perguntaram-lhe. “O livro da solidão”, foi a resposta. Apesar disso, ele não considerava Cem anos sua melhor obra (gostava demais de O outono do patriarca). O que importa? O certo é que nenhum outro romance resume tão completamente o formidável talento deste contador de histórias de solitários - que se espalham e se espalharão por muito mais de cem anos pelas Macondos de todo o mundo. Cem anos de solidão é uma obra grandiosa e atemporal, sobre a qual é possível construir diversos paralelos com a nossa própria existência.",
            "destaque": true,
            "ano_publicacao": 1967,
            "imagem_pincipal": "assets/img/livro_cem_anos.jpg",
            "imagens_complementares": [
                { "id": 2, "src": "assets/img/capa_antiga_cem_anos.jpg", "descricao": "Capa de uma edição clássica" }
            ]
        },
        {
            "id": 3,
            "titulo": "Orgulho e Preconceito",
            "autor": "Jane Austen",
            "genero": "Romance Clássico",
            "descricao_curta": "A saga das irmãs Bennet, focada na espirituosa Elizabeth e no arrogante Sr. Darcy.",
            "sinopse": "Na Inglaterra do final do século XVIII, as possibilidades de ascensão social eram limitadas para uma mulher sem dote. Elizabeth Bennet, de vinte anos, uma das cinco filhas de um espirituoso mas imprudente senhor, no entanto, é um novo tipo de heroína, que não precisará de estereótipos femininos para conquistar o nobre Fitzwilliam Darcy e defender suas posições com perfeita lucidez de uma filósofa liberal da província. Lizzy é uma espécie de Cinderela esclarecida, iluminista, protofeminista.Neste livro, Jane Austen faz também uma crítica à futilidade das mulheres na voz dessa admirável heroína - recompensada, ao final, com uma felicidade que não lhe parecia possível na classe em que nasceu.",
            "destaque": true,
            "ano_publicacao": 1813,
            "imagem_pincipal": "assets/img/livro_orgulho.jpg",
            "imagens_complementares": [
                { "id": 3, "src": "assets/img/capa_antiga_orgulho_e_preconceito.jpg", "descricao": "Capa de uma edição clássica" }
            ]
        }
    ]
};

function obterParametroURL(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// C. LÓGICA DE MONTAGEM E INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    const livros = dados.livros;
    const destaques = livros.filter(livro => livro.destaque);
    
    // 1. Montar Carrossel de Destaques
    const sliderContainer = document.getElementById('slider-destaques-container');
    sliderContainer.innerHTML = destaques.map((livro, index) => {
        const activeClass = index === 0 ? 'active' : '';
        return `
            <div class="carousel-item ${activeClass}">
                <a href="detalhes.html?id=${livro.id}" class="text-decoration-none text-dark">
                    <div class="row align-items-center p-4">
                        <div class="col-md-4 text-center">
                            <img src="${livro.imagem_pincipal}" class="d-block w-75 mx-auto rounded shadow-lg" alt="${livro.titulo}" style="max-height: 300px; object-fit: cover;">
                        </div>
                        <div class="col-md-8">
                            <h3 class="display-6">${livro.titulo}</h3>
                            <p class="lead">${livro.autor}</p>
                            <p>${livro.descricao_curta}</p>
                            <span class="btn btn-primary mt-2">Ver Detalhes</span>
                        </div>
                    </div>
                </a>
            </div>
        `;
    }).join('');

    // **INICIALIZAÇÃO MANUAL DO CARROSSEL** (Garante que ele se mova)
    const carouselElement = document.getElementById('carouselDestaques');
    if (carouselElement && typeof bootstrap !== 'undefined' && bootstrap.Carousel) {
        new bootstrap.Carousel(carouselElement, {
            interval: 5000, 
            wrap: true
        });
    }

    // 2. Montar Cards de Livros
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = livros.map(livro => `
        <div class="col">
            <div class="card h-100 shadow-sm">
                <img src="${livro.imagem_pincipal}" class="card-img-top" alt="${livro.titulo}" style="height: 300px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${livro.titulo}</h5>
                    <p class="card-text text-muted">${livro.autor}</p>
                    <p class="card-text">${livro.descricao_curta}</p>
                </div>
                <div class="card-footer bg-white border-0">
                    <a href="detalhes.html?id=${livro.id}" class="btn btn-dark w-100">Ver Sinopse</a>
                </div>
            </div>
        </div>
    `).join('');
});