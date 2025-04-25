<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${plant.name} - Plant Details</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>${plant.name}</h1>
            <nav>
                <a href="${pageContext.request.contextPath}/plants">Back to Plants</a>
                <a href="${pageContext.request.contextPath}/logout">Logout</a>
            </nav>
        </header>
        
        <main>
            <div class="plant-details">
                <div class="plant-image">
                    <img src="${plant.imageUrl}" alt="${plant.name}">
                </div>
                <div class="plant-info">
                    <h2>${plant.name}</h2>
                    <p class="scientific-name">${plant.scientificName}</p>
                    
                    <section class="description">
                        <h3>Description</h3>
                        <p>${plant.description}</p>
                    </section>
                    
                    <section class="care-instructions">
                        <h3>Care Instructions</h3>
                        <p>${plant.careInstructions}</p>
                    </section>
                </div>
            </div>
        </main>
    </div>
</body>
</html> 