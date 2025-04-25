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

// Get plant ID from URL
function getPlantId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load plant details
function loadPlantDetails() {
    const plantId = getPlantId();
    if (!plantId) {
        window.location.href = 'plants.html';
        return;
    }

    // In a real application, this would be an API call
    const plant = plants.find(p => p.id === parseInt(plantId));
    if (!plant) {
        window.location.href = 'plants.html';
        return;
    }

    // Update page title
    document.title = `${plant.name} - Plant Details`;
    document.getElementById('plantName').textContent = plant.name;

    // Create plant details HTML
    const plantDetails = document.getElementById('plantDetails');
    plantDetails.innerHTML = `
        <div class="plant-image">
            <img src="${plant.imageUrl}" alt="${plant.name}">
        </div>
        <div class="plant-info">
            <h2>${plant.name}</h2>
            <p class="scientific-name">${plant.scientificName}</p>
            
            <section class="description">
                <h3>Description</h3>
                <p>${plant.description}</p>
            </section>
            
            <section class="care-instructions">
                <h3>Care Instructions</h3>
                <p>${plant.careInstructions.replace(/\n/g, '<br>')}</p>
            </section>
        </div>
    `;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    loadPlantDetails();
}); 