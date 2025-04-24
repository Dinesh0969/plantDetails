<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login - Plant Details</title>
<link rel="stylesheet" href="css/styles.css">
</head>
<body>
<nav class="navbar">
	<a href="index.jsp" class="navbar-brand">Plant Details</a>
	<div class="nav-links">
		<a href="register.jsp">Register</a>
		<a href="about.jsp">About</a>
	</div>
</nav>

<div class="container">
	<div class="form-container">
		<h2>Welcome Back</h2>
		<p>Please login to access your plant details</p>
		
		<% if(request.getAttribute("error") != null) { %>
			<div class="alert alert-error">
				<%= request.getAttribute("error") %>
			</div>
		<% } %>
		
		<form action="login" method="post" onsubmit="return validateForm()">
			<div class="form-group">
				<label for="username">Username</label>
				<input type="text" class="form-control" id="username" name="username" required>
			</div>
			
			<div class="form-group">
				<label for="password">Password</label>
				<input type="password" class="form-control" id="password" name="password" required>
			</div>
			
			<div class="form-group">
				<button type="submit" class="btn btn-primary">Login</button>
			</div>
			
			<p>Don't have an account? <a href="register.jsp">Register here</a></p>
		</form>
	</div>
</div>

<script src="js/validation.js"></script>
</body>
</html>