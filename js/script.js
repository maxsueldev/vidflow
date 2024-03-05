// Modo noturno 

const inputMode = document.querySelector('input[type=checkbox]');
const body = document.querySelector('body');

inputMode.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});



// Carregamento de vídeos

const listaVideos = document.querySelector('[data-lista]');

function criarCard(element) {
    if(element.categoria == '') {
        throw new Error('Vídeo não tem categoria');
    }
    const liElement = document.createElement('li');
    liElement.className = 'videos-item';
    liElement.innerHTML = `
        <iframe src="${element.url}" title="${element.titulo}" frameborder="0" allowfullscreen></iframe>
        <div class="descricao-video">
            <img class="img-canal" src="${element.imagem}" alt="Logo do Canal">
            <h3 class="titulo-video">${element.titulo}</h3>
            <p class="titulo-canal">${element.descricao}</p>
            <p class="categoria" hidden>${element.categoria}</p>
        </div>
    `;
    return liElement;
}

async function getDados() {
    try {
        const api = await fetch('https://vidflow-max.vercel.app/backend/videos.json');
        const apiConvertida = await api.json();
        console.log(apiConvertida);
    
        apiConvertida.forEach(element => listaVideos.appendChild(criarCard(element)));
    } catch(error) {
        listaVideos.innerHTML = `Aconteceu algum erro: ${error}`;
    }
}

getDados();

// const barraDePesquisa = document.querySelector('[data-pesquisa]');
// barraDePesquisa.addEventListener('input', filtrarPesquisa);

// function filtrarPesquisa() {
//     const videos = document.querySelectorAll('.videos-item');
//     const valorFiltro = barraDePesquisa.value.toLowerCase();

//     videos.forEach(video => {
//         const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();
//         video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
//     });
// }

// const botaoCategoria = document.querySelectorAll('.superior-item');

// botaoCategoria.forEach(botao => {
//     let nomeCategoria = botao.getAttribute('name');
//     botao.addEventListener('click', () => filtrarCategoria(nomeCategoria));
// });

// function filtrarCategoria(filtro) {
//     const videos = document.querySelectorAll('.videos-item');

//     // videos.forEach(video => {
//     //     let categoria = video.querySelector('.categoria').textContent.toLowerCase();
//     //     let valorFiltro = filtro.toLowerCase();

//     //     video.style.display = valorFiltro ? !categoria.includes(valorFiltro) && valorFiltro !== 'Tudo' ? 'none': 'block';
//     // });

//     for(let video of videos) {
//         let categoria = video.querySelector('.categoria').textContent.toLowerCase();
//         let valorFiltro = filtro.toLowerCase();

//         if(!categoria.includes(valorFiltro) && valorFiltro !== 'Tudo') {
//             video.style.display = 'none';
//         } else {
//             video.style.display = 'block';
//         }
//     }
// }