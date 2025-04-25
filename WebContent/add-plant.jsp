<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Add New Plant</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Add New Plant</h1>
            <nav>
                <a href="${pageContext.request.contextPath}/plants">Back to Plants</a>
                <a href="${pageContext.request.contextPath}/logout">Logout</a>
            </nav>
        </header>
        
        <main>
            <form action="${pageContext.request.contextPath}/plants" method="post" class="add-plant-form">
                <div class="form-group">
                    <label for="name">Plant Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="scientificName">Scientific Name:</label>
                    <input type="text" id="scientificName" name="scientificName" required>
                </div>
                
                <div class="form-group">
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" rows="4" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="careInstructions">Care Instructions:</label>
                    <textarea id="careInstructions" name="careInstructions" rows="4" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="imageUrl">Image URL:</label>
                    <input type="url" id="imageUrl" name="imageUrl" required>
                </div>
                
                <button type="submit" class="btn">Add Plant</button>
            </form>
        </main>
    </div>
</body>
</html> 