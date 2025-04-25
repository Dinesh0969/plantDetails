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

// Handle form submission
function handleAddPlant(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        scientificName: document.getElementById('scientificName').value,
        description: document.getElementById('description').value,
        careInstructions: document.getElementById('careInstructions').value,
        imageUrl: document.getElementById('imageUrl').value
    };
    
    // Validate form data
    if (!validateForm(formData)) {
        return false;
    }
    
    // In a real application, this would be an API call
    // For demo purposes, we'll just redirect to the plants page
    window.location.href = 'plants.html';
    
    return false;
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

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
}); 