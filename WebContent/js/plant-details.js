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
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Display username and update navigation
function updateHeader() {
    const username = localStorage.getItem('username');
    if (username) {
        // Add admin navigation if user is admin
        if (isAdmin(username)) {
            const nav = document.querySelector('nav .main-nav');
            const manageUsersLink = document.createElement('a');
            manageUsersLink.href = 'manage-users.html';
            manageUsersLink.textContent = 'Manage Users';
            manageUsersLink.className = 'admin-link';
            nav.insertBefore(manageUsersLink, nav.lastElementChild);
        }
    }
}

// Get plant ID from URL
function getPlantId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

// Load plant details
function loadPlantDetails() {
    const plantId = getPlantId();
    if (!plantId) {
        window.location.href = 'plants.html';
        return;
    }

    // Get plants from localStorage
    const currentPlants = getPlants();
    const plant = currentPlants.find(p => p.id === plantId);
    
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
    updateHeader();
    loadPlantDetails();
}); 