function validar() {
    let nome = document.getElementById("nome");
    let senha = document.getElementById("senha");
    let erro = document.getElementById("Erro");

    nome.style.border = '';
    senha.style.border = '';
    erro.innerText = '';

    let valid = true;

    if (nome.value === '') {
        erro.innerText = 'Campo não foi preenchido.';
        nome.style.border = '2px solid red';
        valid = false;
        nome.focus();
    } else if (nome.value !== 'nome') {
        erro.innerText = 'Nome invalido';
        nome.style.border = '2px solid red';
        valid = false;
        nome.focus();
        nome.value = "";
    } else if (senha.value === '') {
        erro.innerText = 'Campo não preenchido';
        senha.style.border = '2px solid red';
        valid = false;
        senha.focus();
    } else if (senha.value !== 'senha') {
        erro.innerText = 'Senha invalido';
        senha.style.border = '2px solid red';
        valid = false;
        senha.focus();
    }

    if (valid) {
        window.location.href = 'Agenda.html';
    }
}


let Contato = [];
let Index = -1;
let AdClik = false;
let Mudar = false;

function incluir() {
    if (!AdClik) {
        AdClik = true;
        Mudar = false;

        let Nome = document.getElementById("Nome");
        let Sobrenome = document.getElementById("Sobrenome");
        let Email = document.getElementById("Email");
        let Telefone = document.getElementById("Telefone");

        Nome.disabled = false;
        Sobrenome.disabled = false;
        Email.disabled = false;
        Telefone.disabled = false;
        Nome.focus();

        Nome.style.border = "2px solid #000";
        Sobrenome.style.border = "2px solid #000";
        Email.style.border = "2px solid #000";
        Telefone.style.border = "2px solid #000";

        let Incluir = document.getElementById("incluir");
        let Editar = document.getElementById("editar");
        let Salvar = document.getElementById("salvar");
        let Cancelar = document.getElementById("cancelar");
        let Excluir = document.getElementById("excluir");

        Incluir.disabled = true;
        Salvar.disabled = false;
        Cancelar.disabled = false;
        Excluir.disabled = true;
        Incluir.style.backgroundColor = "#fff";
        Incluir.style.borderColor = "#000";
        Salvar.style.backgroundColor = "#04C9F4";
        Cancelar.style.color = "#04C9F4";
        Cancelar.style.borderColor = "#04C9F4";
        Editar.style.backgroundColor = "#fff";
        Editar.style.borderColor = "#000";
        Excluir.style.backgroundColor = "#fff";
        Excluir.style.borderColor = "#000";

        Nome.value = "";
        Sobrenome.value = "";
        Email.value = "";
        Telefone.value = "";

        MouseOver(Nome);
        MouseOver(Sobrenome);
        MouseOver(Email);
        MouseOver(Telefone);
    }
}

function MouseOver(elemento) {
    elemento.addEventListener('mouseover', function() {
        elemento.style.border = '2px solid blue';
    });

    elemento.addEventListener('mouseout', function() {
        elemento.style.border = '2px solid #000';
    });
}

function Bordas() {
    let Nome = document.getElementById("Nome");
    let Sobrenome = document.getElementById("Sobrenome");
    let Email = document.getElementById("Email");
    let Telefone = document.getElementById("Telefone");

    Nome.style.border = "none";
    Sobrenome.style.border = "none";
    Email.style.border = "none";
    Telefone.style.border = "none";
}

function cancelar() {
    if (AdClik) {
        let Nome = document.getElementById("Nome");
        let Sobrenome = document.getElementById("Sobrenome");
        let Email = document.getElementById("Email");
        let Telefone = document.getElementById("Telefone");

        Nome.disabled = true;
        Sobrenome.disabled = true;
        Email.disabled = true;
        Telefone.disabled = true;

        Bordas();

        let Salvar = document.getElementById("salvar");
        let Cancelar = document.getElementById("cancelar");
        let Incluir = document.getElementById("incluir");
        let Editar = document.getElementById("editar");
        let Excluir = document.getElementById("excluir");

        Salvar.disabled = true;
        Cancelar.disabled = true;
        Incluir.disabled = false;
        Editar.disabled = true;
        Excluir.disabled = true;

        Incluir.style.backgroundColor = "green";
        Salvar.style.backgroundColor = "#fff";
        Salvar.style.color = "#000";
        Salvar.style.borderColor = "#000";
        Editar.style.borderColor = "#000";
        Excluir.style.borderColor = "#000";
        Cancelar.style.color = "#000";
        Cancelar.style.borderColor = "#000";

        Nome.value = "";
        Sobrenome.value = "";
        Email.value = "";
        Telefone.value = "";

        AdClik = false;
        Mudar = false;
    }
}

function salvar() {
    if (AdClik) {
        let Nome = document.getElementById("Nome").value;
        let Sobrenome = document.getElementById("Sobrenome").value;
        let Email = document.getElementById("Email").value;
        let Telefone = document.getElementById("Telefone").value;

        if (Mudar) {
            Contato[Index] = {
                nome: Nome,
                sobrenome: Sobrenome,
                email: Email,
                telefone: Telefone
            };
        } else {
            Contato.push({
                nome: Nome,
                sobrenome: Sobrenome,
                email: Email,
                telefone: Telefone
            });
            Index = Contato.length - 1;
        }

        console.log(Contato);

        let Incluir = document.getElementById("incluir");
        let Cancelar = document.getElementById("cancelar");
        let Editar = document.getElementById("editar");
        let Salvar = document.getElementById("salvar");
        let Excluir = document.getElementById("excluir");

        Incluir.disabled = false;
        Incluir.style.backgroundColor = "green";
        Incluir.style.borderColor = "#000";
        Editar.disabled = false;
        Editar.style.backgroundColor = "orange";
        Excluir.disabled = false;
        Excluir.style.backgroundColor = "red";
        Salvar.disabled = true;
        Salvar.style.backgroundColor = "#fff";
        Salvar.style.borderColor = "#000";
        Cancelar.disabled = true;
        Cancelar.style.color = "#000";
        Cancelar.style.borderColor = "#000";

        let NomeElem = document.getElementById("Nome");
        let SobrenomeElem = document.getElementById("Sobrenome");
        let EmailElem = document.getElementById("Email");
        let TelefoneElem = document.getElementById("Telefone");

        NomeElem.disabled = true;
        SobrenomeElem.disabled = true;
        EmailElem.disabled = true;
        TelefoneElem.disabled = true;

        AdClik = false;
        Mudar = false;
    }
}

function atualizar(index) {
    if (index >= 0 && index < Contato.length) {
        document.getElementById("Nome").value = Contato[index].nome;
        document.getElementById("Sobrenome").value = Contato[index].sobrenome;
        document.getElementById("Email").value = Contato[index].email;
        document.getElementById("Telefone").value = Contato[index].telefone;

        let Editar = document.getElementById("editar");
        let Excluir = document.getElementById("excluir");

        Editar.disabled = false;
        Excluir.disabled = false;
        Editar.style.backgroundColor = "orange";
        Excluir.style.backgroundColor = "red";
    } else {
        document.getElementById("Nome").value = "";
        document.getElementById("Sobrenome").value = "";
        document.getElementById("Email").value = "";
        document.getElementById("Telefone").value = "";

        let Editar = document.getElementById("editar");
        let Excluir = document.getElementById("excluir");

        Editar.disabled = true;
        Excluir.disabled = true;
        Editar.style.backgroundColor = "#fff";
        Editar.style.borderColor = "#000";
        Excluir.style.backgroundColor = "#fff";
        Excluir.style.borderColor = "#000";
    }
}

function voltar() {
    if (Contato.length > 0) {
        Index = 0;
        atualizar(Index);
    }
}

function anterior() {
    if (Index > 0) {
        Index--;
        atualizar(Index);
    }
}

function proximo() {
    if (Index < Contato.length - 1) {
        Index++;
        atualizar(Index);
    }
}

function ultimo() {
    if (Contato.length > 0) {
        Index = Contato.length - 1;
        atualizar(Index);
    }
}

function editar() {
    if (Index >= 0 && Index < Contato.length) {
        Mudar = true;
        AdClik = true;

        let Nome = document.getElementById("Nome");
        let Sobrenome = document.getElementById("Sobrenome");
        let Email = document.getElementById("Email");
        let Telefone = document.getElementById("Telefone");

        Nome.disabled = false;
        Sobrenome.disabled = false;
        Email.disabled = false;
        Telefone.disabled = false;
        Nome.focus();

        Nome.style.border = "2px solid #000";
        Sobrenome.style.border = "2px solid #000";
        Email.style.border = "2px solid #000";
        Telefone.style.border = "2px solid #000";

        let Incluir = document.getElementById("incluir");
        let Editar = document.getElementById("editar");
        let Salvar = document.getElementById("salvar");
        let Cancelar = document.getElementById("cancelar");
        let Excluir = document.getElementById("excluir");

        Incluir.disabled = true;
        Salvar.disabled = false;
        Cancelar.disabled = false;
        Excluir.disabled = true;
        Incluir.style.backgroundColor = "#fff";
        Incluir.style.borderColor = "#000";
        Salvar.style.backgroundColor = "#04C9F4";
        Cancelar.style.color = "#04C9F4";
        Cancelar.style.borderColor = "#04C9F4";
        Editar.style.backgroundColor = "#fff";
        Editar.style.borderColor = "#000";
        Excluir.style.backgroundColor = "#fff";
        Excluir.style.borderColor = "#000";

        MouseOver(Nome);
        MouseOver(Sobrenome);
        MouseOver(Email);
        MouseOver(Telefone);
    }
}

function excluir() {
    if (Index >= 0 && Index < Contato.length) {
        Contato.splice(Index, 1);
        if (Index >= Contato.length) {
            Index = Contato.length - 1;
        }
        atualizar(Index);
    }
}