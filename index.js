function validateEmail() {
    // Obter o valor do campo de entrada
    const email = document.getElementById("email").value;
    const errorMessage = document.getElementById("error-message");
    const emailInput = document.getElementById("email");

    // Expressão regular para validar o formato do email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Resetar mensagens e borda
    errorMessage.textContent = "";
    emailInput.style.border = "1px solid #ccc";

    // Verificar se o email corresponde ao padrão
    if (!emailPattern.test(email) || email === "") {
        errorMessage.textContent = "Por favor, insira um endereço de email válido!";
        errorMessage.style.color = "red"; // Mensagem vermelha de erro
        emailInput.style.border = "2px solid red"; // Borda vermelha para indicar erro
    } else {
        errorMessage.textContent = "Email válido!";
        errorMessage.style.color = "green"; // Mensagem verde de sucesso
        emailInput.style.border = "2px solid green"; // Borda verde para indicar sucesso
        alert("Você se inscreveu com sucesso!");
    }
}
