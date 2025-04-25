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

// Display username in header
function displayUsername() {
    const username = localStorage.getItem('username');
    const userDisplay = document.querySelector('.user-display');
    if (userDisplay && username) {
        userDisplay.textContent = `Welcome, ${username}`;
    }
}

// Get the next available ID
function getNextId() {
    const plants = getPlants();
    return Math.max(...plants.map(plant => plant.id), 0) + 1;
}

// Handle form submission
function handleAddPlant(event) {
    event.preventDefault();
    const errorMessage = document.getElementById('error-message');
    
    try {
        // Get form data
        const formData = new FormData(event.target);
        const newPlant = {
            name: formData.get('name').trim(),
            scientificName: formData.get('scientificName').trim(),
            imageUrl: formData.get('imageUrl').trim(),
            description: formData.get('description').trim(),
            careInstructions: formData.get('careInstructions').trim()
        };
        
        // Validate form data
        if (!validateForm(newPlant)) {
            return false;
        }
        
        // Add new plant
        addPlant(newPlant);
        
        // Redirect to plants page
        window.location.href = 'plants.html';
        
    } catch (error) {
        errorMessage.textContent = error.message;
        return false;
    }
}

// Validate form data
function validateForm(data) {
    const errorMessage = document.getElementById('error-message');
    
    // Check if all fields are filled
    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            errorMessage.textContent = `Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
            return false;
        }
    }
    
    // Validate image URL format
    if (!data.imageUrl.startsWith('http://') && 
        !data.imageUrl.startsWith('https://') && 
        !data.imageUrl.startsWith('images/')) {
        errorMessage.textContent = 'Please enter a valid image URL (starting with http://, https://, or images/)';
        return false;
    }
    
    return true;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    displayUsername();
}); 