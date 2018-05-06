function editar(resposta){
    var e = resposta;
    console.log("retorno do callback"+e);

    console.log("retorno: " + JSON.stringify(e.nome));
    document.getElementById('cadNome').value = e.nome;
    document.getElementById('cadEmail').value = e.email;
    document.getElementById('cadTelefone').value = e.telefone;
    document.getElementById('cadNascimento').value = e.Nascimento;
    document.getElementById('cadCpf').value = e.CPF;
    document.getElementById('cadCep').value = e.Cep;
    document.getElementById('cadRG').value = e.RG;
    $("input[name=valor][value=" + e.Sexo + "]").attr('checked', 'checked');

    $('#btnCadastrar').click(function () {
        $('input:radio[name=valor]').each(function () {
            //Verifica qual está selecionado
            if ($(this).is(':checked'))
                valor = $(this).val();
        })

        e.nome = document.getElementById('cadNome').value;
        e.email = document.getElementById('cadEmail').value;
        e.telefone = document.getElementById('cadTelefone').value;
        e.Sexo = valor;
        e.Nascimento = document.getElementById('cadNascimento').value;
        e.CPF = document.getElementById('cadCpf').value;
        e.Cep = document.getElementById('cadCep').value;
        e.RG = document.getElementById('cadRG').value;
        console.log("valores do objeto e"+
            e.nome,
            e.email,
            e.telefone,
            e.Cep,
            e.CPF,
            e.Nascimento
        );

        var id = e.id;
        var pessoa = e;
        put(id ,pessoa);
    });
}