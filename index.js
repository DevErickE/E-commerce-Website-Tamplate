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
        errorMessage.style.color = "red"; // Mensagem vermelha de erro
        emailInput.style.border = "2px solid red"; // Borda vermelha para indicar erro
        alert("Por favor, insira um email válido!");
    } else {
        errorMessage.textContent = "Email válido!";
        errorMessage.style.color = "green"; // Mensagem verde de sucesso
        emailInput.style.border = "2px solid green"; // Borda verde para indicar sucesso
        alert("Você se inscreveu com sucesso!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const opinionContainer = document.querySelector(".group-opinions");
    const opinions = document.querySelectorAll(".opinion-box");
    const leftArrow = document.querySelector(".arrow-container .arrow:first-child");
    const rightArrow = document.querySelector(".arrow-container .arrow:last-child");

    let currentIndex = 0;
    const visibleOpinions = 3; // Número de opiniões visíveis

    function updateOpinions() {
        opinions.forEach((opinion, index) => {
            if (index >= currentIndex && index < currentIndex + visibleOpinions) {
                opinion.style.display = "block";
            } else {
                opinion.style.display = "none";
            }
        });
    }

    leftArrow.addEventListener("click", function () {
        if (currentIndex === 0) {
            currentIndex = opinions.length - visibleOpinions; // Volta para o final
        } else {
            currentIndex--;
        }
        updateOpinions();
    });

    rightArrow.addEventListener("click", function () {
        if (currentIndex >= opinions.length - visibleOpinions) {
            currentIndex = 0; // Volta para o começo
        } else {
            currentIndex++;
        }
        updateOpinions();
    });

    updateOpinions(); // Inicializa com os três primeiros visíveis
});
