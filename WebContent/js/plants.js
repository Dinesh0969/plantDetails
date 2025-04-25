// Check if user is logged in
function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// Sample plant data (in a real application, this would come from a backend)
const plants = [
    {
        id: 1,
        name: 'Monstera Deliciosa',
        scientificName: 'Monstera deliciosa',
        imageUrl: 'images/plant1.jpg',
        description: 'The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a popular houseplant known for its large, glossy, perforated leaves.',
        careInstructions: 'Light: Bright, indirect light\nWater: Water when top inch of soil is dry\nHumidity: Prefers high humidity\nTemperature: 65-85°F (18-29°C)\nSoil: Well-draining potting mix'
    },
    {
        id: 2,
        name: 'Snake Plant',
        scientificName: 'Sansevieria trifasciata',
        imageUrl: 'images/plant2.jpg',
        description: 'The Snake Plant is a hardy houseplant known for its upright, sword-like leaves with yellow edges.',
        careInstructions: 'Light: Low to bright indirect light\nWater: Allow soil to dry between waterings\nHumidity: Tolerates low humidity\nTemperature: 60-85°F (15-29°C)\nSoil: Well-draining potting mix'
    }
];

// Load plants into the grid
function loadPlants() {
    const plantGrid = document.getElementById('plantGrid');
    plantGrid.innerHTML = ''; // Clear existing content
    
    plants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.className = 'plant-card';
        plantCard.innerHTML = `
            <img src="${plant.imageUrl}" alt="${plant.name}">
            <h3>${plant.name}</h3>
            <p class="scientific-name">${plant.scientificName}</p>
            <a href="plant-details.html?id=${plant.id}" class="btn">View Details</a>
        `;
        plantGrid.appendChild(plantCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadPlants();
}); 