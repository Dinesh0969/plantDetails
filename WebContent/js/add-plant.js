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

// Display username
function displayUsername() {
    const username = localStorage.getItem('username');
    if (username) {
        const header = document.querySelector('header h1');
        header.textContent = `Welcome, ${username}!`;
    }
}

// Get the next available ID
function getNextId() {
    return Math.max(...plants.map(plant => plant.id), 0) + 1;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    displayUsername();
    
    // Add form submission handler
    const form = document.getElementById('addPlantForm');
    form.addEventListener('submit', handleAddPlant);
});

// Handle form submission
function handleAddPlant(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    
    // Create new plant object
    const newPlant = {
        id: getNextId(),
        name: formData.get('name'),
        scientificName: formData.get('scientificName'),
        imageUrl: formData.get('imageUrl'),
        description: formData.get('description'),
        careInstructions: formData.get('careInstructions')
    };
    
    // Add new plant to the array
    plants.push(newPlant);
    
    // Save updated plants array to localStorage
    localStorage.setItem('plants', JSON.stringify(plants));
    
    // Redirect to plants page
    window.location.href = 'plants.html';
}

// Validate form data
function validateForm(data) {
    const errorMessage = document.getElementById('error-message');
    
    // Check if all fields are filled
    for (const [key, value] of Object.entries(data)) {
        if (!value.trim()) {
            errorMessage.textContent = 'Please fill in all fields';
            return false;
        }
    }
    
    // Validate image URL
    try {
        new URL(data.imageUrl);
    } catch (e) {
        errorMessage.textContent = 'Please enter a valid image URL';
        return false;
    }
    
    return true;
} 