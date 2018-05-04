document.write(unescape("%3Cscript src='excluir.js' type='text/javascript'%3E%3C/script%3E"));
function listar(ObjPessoa) {
    console.log(ObjPessoa);
    $.each(ObjPessoa, function (chave, valor) {
        //adicionando os objetos dentro da tabela com o comando append
        $("#listaPessoas tbody").append(
            "<tr>" +
            "<td>" + valor.nome + "</td>" +
            "<td>" + valor.email + "</td>" +
            "<td>" + valor.telefone + "</td>" +
            "<td>" + valor.Sexo + "</td>" +
            "<td>" + valor.idade + "</td>" +
            "<td>" + valor.Cep + "</td>" +
            // "<td class='btn-primary'><a href='file:///C:/Users/misaelzeferino/Documents/projetosAulaMarth/aula02Ajax/cadastro.html'><button type='button' onclick='editar(" + JSON.stringify(valor.id) + "); ' id='editar'>Editar</button></a></td>" +
            "<td><button type='button' onclick='carregarCadastroParaEdicao(" + JSON.stringify(valor.id) + "); ' id='editar'>Editar</button></td>" +
            "<td><button class='button-excluir' type='button' onclick='excluir(" + JSON.stringify(valor.id) + ");' id='remover'>X</button></td>"

        );
    });
}


function carregarCadastroParaEdicao(id) {

    window.location = "cadastro.html?id=" + id;
}

function listarPorNome(pessoa) {
console.log("entrou no listar por nome"+ pessoa);
console.log(JSON.stringify(pessoa))
        $("#dadosPessoais").append(
            "<thead>"+
        
            "<tr>"+
                "<th>Nome</th>"+
                "<th>Email</th>"+
                "<th>Telefone</th>"+
                "<th>Sexo</th>"+
                "<th>Nascimento</th>"+
                "<th>CEP</th>"+
                "<th>CPF</th>"+
                "<th>RG</th>"+
            "</tr>"+
        "</thead>"+
        "<tbody>"+
            "<tr>"+
            "<td>"+pessoa.nome+"</td>"+
            "<td>"+pessoa.email+"</td>"+
            "<td>"+pessoa.telefone+"</td>"+
            "<td>"+pessoa.Sexo+"</td>"+
            "<td>"+pessoa.Nascimento+"</td>"+
            "<td>"+pessoa.Cep+"</td>"+
            "<td>"+pessoa.CPF+"</td>"+
            "<td>"+pessoa.RG+"</td>"+
            "</tr>"+
            "</tbody>"
        )
}


