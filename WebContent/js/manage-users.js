// Check if user is logged in and is admin
function checkAdminAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');
    
    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return;
    }
    
    if (!isAdmin(username)) {
        window.location.href = 'plants.html';
        return;
    }
}

// Handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Toggle password visibility
function togglePassword(inputId, rowId) {
    const input = document.getElementById(inputId);
    if (!input) {
        const passwordCell = document.querySelector(`#${rowId} .password-cell`);
        const passwordText = passwordCell.getAttribute('data-password');
        const isVisible = passwordCell.querySelector('.fa-eye-slash');
        
        if (isVisible) {
            passwordCell.innerHTML = `
                ${'•'.repeat(8)}
                <button type="button" class="password-toggle" onclick="togglePassword(null, '${rowId}')">
                    <i class="fas fa-eye"></i>
                </button>
            `;
        } else {
            passwordCell.innerHTML = `
                ${passwordText}
                <button type="button" class="password-toggle" onclick="togglePassword(null, '${rowId}')">
                    <i class="fas fa-eye-slash"></i>
                </button>
            `;
        }
        return;
    }

    const button = input.nextElementSibling.querySelector('i');
    if (input.type === 'password') {
        input.type = 'text';
        button.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        button.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Display users list
function displayUsers() {
    const usersList = document.getElementById('usersList');
    const users = getUsers();
    
    usersList.innerHTML = users.map(user => `
        <tr id="user-${user.username}">
            <td>${user.username}</td>
            <td class="password-cell" data-password="${user.password}">
                ${'•'.repeat(8)}
                <button type="button" class="password-toggle" onclick="togglePassword(null, 'user-${user.username}')">
                    <i class="fas fa-eye"></i>
                </button>
            </td>
            <td><span class="user-role ${user.role}">${user.role}</span></td>
            <td>
                <button type="button" class="btn-icon" title="Edit User">
                    <i class="fas fa-edit"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

// Handle add user form submission
function handleAddUser(event) {
    event.preventDefault();
    const errorMessage = document.getElementById('error-message');
    
    try {
        const formData = new FormData(event.target);
        const newUser = {
            username: formData.get('username'),
            password: formData.get('password'),
            role: formData.get('role')
        };
        
        const currentUsername = localStorage.getItem('username');
        addUser(currentUsername, newUser);
        
        // Clear form
        event.target.reset();
        errorMessage.textContent = '';
        
        // Refresh users list
        displayUsers();
        
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuth();
    displayUsers();
    
    // Add form submission handler
    const form = document.getElementById('addUserForm');
    form.addEventListener('submit', handleAddUser);
}); 