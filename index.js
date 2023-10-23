var elementosDuvida = document.querySelectorAll('.duvida')//Seleciona todos os elementos duvida

//Para cada elemento duvida selecionado, executar uma função
elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function() {
        duvida.classList.toggle('ativa')
    })
})