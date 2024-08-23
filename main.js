

// Step 1: Get user's last name
let lastName = prompt("Familyangizni kiriting:");

// Step 2: Get user's first name
let firstName = prompt("Ismingizni kiriting:");

// Step 3: Get user's age
let age = prompt("Yoshingizni kiriting:");

// Step 4: Ask if they want their name in uppercase or lowercase
let nameCase = prompt("Ismingiz katta harf yoki kichikligini tanlang:\n1) Katta\n2) Kichik");

// Step 5: Process the name case selection
if (nameCase === "1") {
    firstName = firstName.toUpperCase();
} else if (nameCase === "2") {
    firstName = firstName.toLowerCase();
}

// Step 6: Display the results on the webpage
let resultDiv = document.getElementById('result');
resultDiv.innerHTML = `
    <p><strong>Familya:</strong> ${lastName}</p>
    <p><strong>Ism:</strong> ${firstName}</p>
    <p><strong>Yosh:</strong> ${age}</p>
`;
