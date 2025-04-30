function buscarGato() {
    // Pega o valor digitado
    const codigo = document.getElementById('statusInput').value;
    const resultado = document.getElementById('resultado');
    
   
    if (!codigo) {
        alert('Por favor, digite um código!');
        return;
    }

    try {
        resultado.innerHTML = `
            <h3>Status: ${codigo}</h3>
            <img src="https://http.cat/${codigo}.jpg" alt="Gato ${codigo}">
        `;
    } catch (erro) {
        resultado.innerHTML = 'Erro ao carregar a imagem';
    }
}

buscarButton.addEventListener('click', buscarGato);

