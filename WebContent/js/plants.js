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
        const header = document.querySelector('header h1');
        header.textContent = `My Plant Collection`;

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

// Load plants into the grid
function loadPlants() {
    const plantGrid = document.getElementById('plantGrid');
    plantGrid.innerHTML = ''; // Clear existing content
    
    // Get plants from localStorage
    const currentPlants = getPlants();
    
    currentPlants.forEach(plant => {
        const plantCard = document.createElement('div');
        plantCard.className = 'plant-card';
        plantCard.innerHTML = `
            <img src="${plant.imageUrl}" alt="${plant.name}">
            <div class="card-content">
                <h3>${plant.name}</h3>
                <p class="scientific-name">${plant.scientificName}</p>
                <a href="plant-details.html?id=${plant.id}" class="btn">View Details</a>
            </div>
        `;
        plantGrid.appendChild(plantCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    updateHeader();
    loadPlants();
}); 