// Display available users for testing
function displayAvailableUsers() {
    const users = getUsers();
    const usersList = document.querySelector('.login-info ul');
    
    if (!usersList) return;
    
    usersList.innerHTML = users.map(user => `
        <li>
            <strong>Username:</strong> ${user.username}
            <br>
            <strong>Password:</strong> 
            <span class="user-password">••••••••</span>
            <button type="button" class="password-toggle" onclick="toggleTestPassword(this)">
                <i class="fas fa-eye"></i>
            </button>
            <span class="actual-password" style="display: none;">${user.password}</span>
        </li>
    `).join('');
}

// Toggle test password visibility
function toggleTestPassword(button) {
    const li = button.closest('li');
    const passwordSpan = li.querySelector('.user-password');
    const actualPassword = li.querySelector('.actual-password');
    const icon = button.querySelector('i');
    
    if (icon.classList.contains('fa-eye')) {
        passwordSpan.textContent = actualPassword.textContent;
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordSpan.textContent = '••••••••';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Toggle password visibility for login form
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentElement.querySelector('.password-toggle i');
    
    if (input.type === 'password') {
        input.type = 'text';
        button.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        button.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    const errorMessage = document.getElementById('error-message');
    
    try {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (validateUser(username, password)) {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', username);
            
            // Redirect based on role
            if (isAdmin(username)) {
                window.location.href = 'manage-users.html';
            } else {
                window.location.href = 'plants.html';
            }
        } else {
            throw new Error('Invalid username or password');
        }
        
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Initialize the login page
document.addEventListener('DOMContentLoaded', () => {
    // Clear any existing login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    
    // Display available users
    displayAvailableUsers();
}); 