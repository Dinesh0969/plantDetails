<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Plant Details</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="navbar">
        <a href="index.jsp" class="navbar-brand">Plant Details</a>
        <div class="nav-links">
            <a href="login.jsp">Login</a>
            <a href="about.jsp">About</a>
        </div>
    </nav>

    <div class="container">
        <div class="form-container">
            <h2>Create Account</h2>
            <p>Join us to track your plants' health and growth</p>
            
            <form action="register" method="post" onsubmit="return validateRegistration()">
                <div class="form-group">
                    <label for="fullname">Full Name</label>
                    <input type="text" class="form-control" id="fullname" name="fullname" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                </div>
                
                <div class="form-group">
                    <button type="submit" class="btn btn-primary">Register</button>
                </div>
            </form>
        </div>
    </div>
</body>
</html> 