$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DD) 12345-6789'
    });
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    });
    
    $('#cep').mask('00000-000', {
        placeholder: '01234-567'
    });
    
    $('form').validate({
        rules: {
            nome: {
                requerido: true
            },
            email: {
                requerido: true,
                email: true
            },
            telefone: {
                requerido: true
            },
            endereco: {
                requerido: true
            },
            cep: {
                requerido: true
            },
            cpf: {
                requerido: true
            },
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})