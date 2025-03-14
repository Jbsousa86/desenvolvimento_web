function salvarBtn(){
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const idade = document.getElementById("telefone").value
    const cidade = document.getElementById("cidade").value

    //Verificar se os nomes estão preenchidos
    if (!nome || !email || !idade || !cidade){
        alert("Preencha todos os campos!")
        return
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios"))|| []
    usuarios.push({nome, email, idade, cidade})
    localStorage.setItem("usuarios",JSON.stringify(usuarios))

    alert("Dados salvos com sucesso!")
    // Resetar o formulário
    document.getElementById("cadastroForm").reset()
}
//Função para carregar os dados e exibir na tabela
function carregarDados(){
    let usuarios = JSON.parse(localStorage.getItem("usuarios"))|| []
    const tabela = document.getElementById("dadosTabela")

    if (tabela){
        tabela.innerHTML =  ""

    if (usuarios.length === 0){
        tabela.innerHTML = "<tr></td colspan ='4'>Nenhum dado cadastrado.<td><tr>"
        return
    }

    usuarios.forEach(usuario => {
        let linha = `<tr>
            <td>${usuario.nome}</td>
            <td>${usuario.email}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.cidade}</td>
        </tr>`
        tabela.innerHTML += linha
    });
  }
}
function limparDados(){
    localStorage.removeItem("usuarios")
    carregarDados()
    alert("todos os dados foram apagados")
}

window.onload = carregarDados