function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Simple validation
    if (!username || !password) {
        errorMessage.textContent = 'Please fill in all fields';
        return false;
    }
    
    // For demo purposes, using hardcoded credentials
    // In a real application, this would be handled by a backend server
    if (username === 'admin' && password === 'admin123') {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to plants page
        window.location.href = 'plants.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
    
    return false;
} 