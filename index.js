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
        emailInput.style.border = "2px solid red"; // Borda vermelha para indicar erro
        alert("Por favor, insira um email válido!");
    } else {
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


document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".close-x");
    const footer = document.querySelector("footer");

    closeButton.addEventListener("click", function () {
        footer.classList.add("hide"); // Adiciona a classe para esconder o footer
    });
});


// Função para selecionar e manter o círculo clicado
document.querySelectorAll('.tshirt-option').forEach(option => {
    option.addEventListener('click', function() {
      // Remove a classe 'selected' de todos os círculos
      document.querySelectorAll('.tshirt-option').forEach(opt => {
        opt.classList.remove('selected');
      });
      
      // Adiciona a classe 'selected' ao círculo clicado
      this.classList.add('selected');
    });
  });
  
document.querySelector('.negrito').addEventListener('click', function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    document.querySelector('#signup-section').scrollIntoView({
        behavior: 'smooth' // Faz a rolagem suave
    });
});


function selectTshirtSize(selectedElement) {
    // Remove a classe 'selected' de todas as opções de tamanho da T-shirt
    document.querySelectorAll(".tshirt-size-option").forEach(option => {
        option.classList.remove("selected");
    });

    // Adiciona a classe 'selected' apenas à opção clicada
    selectedElement.classList.add("selected");
}


let tshirtQuantity = 1; // Quantidade inicial

function increaseTshirtQuantity() {
    tshirtQuantity++;
    document.getElementById("tshirt-quantity").innerText = tshirtQuantity;
}

function decreaseTshirtQuantity() {
    if (tshirtQuantity > 1) { // Evita valores negativos
        tshirtQuantity--;
        document.getElementById("tshirt-quantity").innerText = tshirtQuantity;
    }
}


document.querySelector('.shop-toggle').addEventListener('click', function() {
    const options = document.querySelector('.shop-options');
    const arrow = document.querySelector('.arrow');
    
    // Alterna a exibição das opções
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
    
    // Alterna a direção da seta
    arrow.classList.toggle('up');
  });
  

  document.querySelector('.button-Add-to-Cart').addEventListener('click', function() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    setTimeout(() => {
        if (notification.classList.contains('show')) {
            notification.classList.remove('show');
        }
    }, 1500); // 1.5 segundos
});

function closeNotification() {
    document.getElementById('notification').classList.remove('show');
}

function moveNotificationUp() {
    const notification = document.getElementById('notification');
    if (notification.classList.contains('show')) {
        notification.classList.add('move-up');
    }
}