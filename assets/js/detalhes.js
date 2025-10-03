// ARQUIVO: assets/js/detalhes.js

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Obter o ID do livro na URL (Ex: ?id=1)
    // A função 'obterParametroURL' deve estar no seu app.js.
    const urlParams = new URLSearchParams(window.location.search);
    const livroId = parseInt(urlParams.get('id')); 

    // O objeto 'dados' (com a lista de livros) foi carregado pelo app.js!
    const livro = dados.livros.find(l => l.id === livroId);
    
    const detalhesContainer = document.getElementById('detalhes-livro');

    if (!livro) {
        detalhesContainer.innerHTML = '<h2 class="text-center text-danger">Erro: Livro não encontrado no catálogo.</h2>';
        return;
    }

    // 2. Montar o HTML com as informações detalhadas
    detalhesContainer.innerHTML = `
        <a href="index.html" class="btn btn-outline-secondary mb-4">← Voltar ao Catálogo</a>

        <div class="row align-items-start">
            <div class="col-md-4 text-center">
                <img src="${livro.imagem_pincipal}" class="img-fluid rounded shadow-lg mb-4" alt="Capa de ${livro.titulo}" style="max-height: 450px; object-fit: cover;">
            </div>
            
            <div class="col-md-8">
                <h1 class="display-5 fw-bold">${livro.titulo}</h1>
                <p class="lead text-muted">${livro.autor} (${livro.ano_publicacao})</p>
                
                <hr>

                <h3>Sinopse</h3>
                <p class="mb-4">${livro.sinopse}</p>

                <p><strong>Gênero:</strong> ${livro.genero}</p>
                <p><strong>Páginas:</strong> ${livro.num_paginas || 'aproximadamente 500 páginas'}</p> 

                ${livro.imagens_complementares && livro.imagens_complementares.length > 0 ? 
                    `
                    <h4 class="mt-5">Outras Edições:</h4>
                    <div class="row g-2">
                        ${livro.imagens_complementares.map(img => `
                            <div class="col-6 col-md-4">
                                <img src="${img.src}" class="img-fluid rounded shadow-sm" alt="${img.descricao}">
                            </div>
                        `).join('')}
                    </div>
                    ` 
                    : ''}
            </div>
        </div>
    `;
});