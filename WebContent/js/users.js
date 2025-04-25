// Default users data
const defaultUsers = [
    {
        username: 'kavin',
        password: 'Kavin001',
        role: 'admin'
    },
    {
        username: 'dinesh',
        password: '123456789',
        role: 'user'
    }
];

// Initialize users in localStorage if not exists
function initializeUsers() {
    const storedUsers = localStorage.getItem('users');
    if (!storedUsers) {
        localStorage.setItem('users', JSON.stringify(defaultUsers));
    }
}

// Get all users
function getUsers() {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : defaultUsers;
}

// Validate user credentials
function validateUser(username, password) {
    const users = getUsers();
    return users.find(user => 
        user.username.toLowerCase() === username.toLowerCase() && 
        user.password === password
    );
}

// Check if user is admin
function isAdmin(username) {
    const users = getUsers();
    const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
    return user && user.role === 'admin';
}

// Add new user (admin only)
function addUser(currentUsername, newUser) {
    if (!isAdmin(currentUsername)) {
        throw new Error('Only administrators can add new users');
    }

    const users = getUsers();
    
    // Check if username already exists
    if (users.some(u => u.username.toLowerCase() === newUser.username.toLowerCase())) {
        throw new Error('Username already exists');
    }

    // Add role if not specified
    if (!newUser.role) {
        newUser.role = 'user';
    }

    // Add new user
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

// Initialize users when the script loads
initializeUsers(); 