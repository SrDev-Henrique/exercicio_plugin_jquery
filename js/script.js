$(document).ready(function(){
    $('#carouselImages').slick({
        autoplay:true,
        arrows:false
    })

    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    })
})

$('#telefone').mask('(00) 00000-0000')

$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        mensagem: {
            required: true
        },
        veiculo: {
            required: false
        }
    },
    messages: {
        nome: "Por favor, digite seu nome",
        email: "Por favor, digite seu email",
        telefone: "Por favor, digite seu telefone",
        mensagem: "Por favor, digite sua mensagem"
    },
    submitHandler: function (form) {
        console.log(form)
    },
    invalidHandler: function (evento, validador) {
        let camposInvalidos = validador.numberOfInvalids();
        if (camposInvalidos) {
            alert(`Existem ${camposInvalidos} campos inválidos`)
        }
    }
})

$('.lista-veiculos li button').click(function() {
    const destino = $('#contato');

    const nomeVeiculo = $(this).parent().find('h3').text()

    $('#veiculo').val(nomeVeiculo)

    $('html').animate({
        scrollTop: destino.offset().top
    }, 1000)
})

