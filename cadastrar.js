
function cadastrar(pessoa){
    $('input:radio[name=valor]').each(function () {
        //Verifica qual está selecionado
        if ($(this).is(':checked'))
            valor = $(this).val();
    })
    // obtendo o valor do atributo value da tag option
    valorEscolhido = $("#Escolaridade option:selected").val();

    var pessoa = JSON.stringify({
        nome: $("#cadNome").val(),
        email: $("#cadEmail").val(),
        telefone: $("#cadTelefone").val(),
        Nascimento: $("#cadNascimento").val(),
        CPF: $("#cadCpf").val(),
        Cep: $("#cadCep").val(),
        RG: $("#cadRG").val(),
        Sexo: valor
    });
    return pessoa;


}
function RedirecionaParaCadastrar(){
    window.location.href = "http://10.1.2.23:8080/cadastro.html"
}