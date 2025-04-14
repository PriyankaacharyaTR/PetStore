const pets = [
    { name: "Fluffy", type: "Cat", price: 25000, image: "images/cat1.jpg" },
    { name: "Buddy", type: "Dog", price: 40000, image: "images/dog3.jpg" },
    { name: "Hoppy", type: "Rabbit", price: 12500, image: "images/dog4.jpg" },
    { name: "Tweety", type: "Bird", price: 7500, image: "images/s2.jpg" },
    { name: "Goldie", type: "Fish", price: 2500, image: "images/cat2.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/dog7.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat3.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/dog8.jpeg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat5.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/huski.webp" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/r1.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/huski1.jpeg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/r2.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat4.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/s1.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat7.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/dog5.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/r3.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/p3.webp" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat8.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/p1.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/image1.webp" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat9.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/r4.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/huski3.jpg" },
    { name: "Hammy", type: "Hamster", price: 3750, image: "images/cat10.jpg" },
    
];

function createPetCard(pet) {
    const card = document.createElement("div");
    card.className = "pet-card";
    card.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}">
        <div class="pet-info">
            <div class="pet-name">${pet.name}</div>
            <div>${pet.type}</div>
            <div class="pet-price">₹${pet.price.toLocaleString('en-IN')}</div>
            <button onclick="buyPet('${pet.name}')">Adopt Me!</button>
        </div>
    `;
    return card;
}

function displayPets() {
    const petGrid = document.createElement("div");
    petGrid.className = "pet-grid";
    pets.forEach(pet => {
        petGrid.appendChild(createPetCard(pet));
    });
    return petGrid;
}

function buyPet(petName) {
    alert(`Yay! You're adopting ${petName}! 🎉 (This is a demo, no actual adoption has occurred)`);
}

function loadHome() {
    const main = document.getElementById("mainContent");
    main.innerHTML = `
        <h2>Featured Furry Friends</h2>
        ${displayPets().outerHTML}
    `;
}

function loadAbout() {
    const main = document.getElementById("mainContent");
    main.innerHTML = `
        <div class="content">
            <h2>About Us</h2>
            <p>Welcome to Cute PetPals Marketplace! We're passionate about connecting loving homes with adorable pets. Our mission is to ensure every pet finds a caring family and every animal lover finds their perfect companion.</p>
            <p>Founded in 2024, we've helped thousands of pets find their forever homes. We work closely with local shelters and responsible breeders to provide a wide variety of pets for adoption.</p>
            <p>At Cute PetPals Marketplace, we believe in responsible pet ownership and strive to educate our community about proper pet care, nutrition, and training.</p>
        </div>
    `;
}

function loadContact() {
    const main = document.getElementById("mainContent");
    main.innerHTML = `
        <div class="content">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you! Whether you have questions about a specific pet, need advice on pet care, or want to share your adoption story, we're here to help.</p>
            <p>📞 Phone: +91 1234567890</p>
            <p>✉️ Email: info@cutepetpals.com</p>
            <p>🏠 Address: 123 Pet Street, Pawsome City, India 123456</p>
            <p>Follow us on social media for cute pet pictures and adoption updates!</p>
        </div>
    `;
}

function handleNavigation() {
    const currentPage = window.location.pathname.split("/").pop();
    switch(currentPage) {
        case "about.html":
            loadAbout();
            break;
        case "contact.html":
            loadContact();
            break;
        default:
            loadHome();
    }
}

window.onload = handleNavigation;