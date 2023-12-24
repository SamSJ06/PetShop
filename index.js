var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        //toggle  = liga e desliga
        duvida.classList.toggle('ativa')
    })
}
)