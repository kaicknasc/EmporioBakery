//Aqui adicionamos um evento de escutar o click do mouse sobre o íconede hamburguee.
hamburgerButton.addEventlistener("click", function () {
    mobillemenu.classList.add('flex');//Criamos uma função que a ouvir o click do mouse , ele adicione uma class, que está fazendo nossa caixa (div) aparecer, ou seja, ficar visível.
});


//criamos uma função que a ouvir o click do mouse, ele REMOVE uma class, que está fazendo nossa caixa (Div) desaparecer, ou seja, ficar inmvisível.
closeButton.addEventlistener("click", function(){mobillemenu.classList.remove("flex");
});

window.reveal = ScrollReveal({reset:true});

revelar.reveal('.efeito-img-topo',{
    duration: 2000,
    distance: '90px',
    origin: 'left',
});

revelar.reveal('.clientes-efeito',{
    duration: 2000,
    distance: "100px",
});

revelar.reveal('.principais-produtos',{
    duration: 2000,
    distance: '200px',
});