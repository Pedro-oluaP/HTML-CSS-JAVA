function validar() {
    var texto_1 = document.getElementById("texto_1").value;
    var texto_2 = document.getElementById("texto_2").value;
    var texto_3 = document.getElementById("texto_3").value;

    if (texto_1 == "" || texto_2 == "" || texto_3 == "") {
        alert("Todos os campos devem ser preenchidos.");
    } else {
        alert("Tudo foi preenchido com sucesso!");
    }
}