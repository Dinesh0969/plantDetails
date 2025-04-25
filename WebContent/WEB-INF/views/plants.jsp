<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Plant List</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Plant Collection</h1>
            <nav>
                <a href="${pageContext.request.contextPath}/plants">All Plants</a>
                <a href="${pageContext.request.contextPath}/add-plant.jsp">Add New Plant</a>
                <a href="${pageContext.request.contextPath}/logout">Logout</a>
            </nav>
        </header>
        
        <main>
            <div class="plant-grid">
                <c:forEach items="${plants}" var="plant">
                    <div class="plant-card">
                        <img src="${plant.imageUrl}" alt="${plant.name}">
                        <h3>${plant.name}</h3>
                        <p class="scientific-name">${plant.scientificName}</p>
                        <a href="${pageContext.request.contextPath}/plants/${plant.id}" class="btn">View Details</a>
                    </div>
                </c:forEach>
            </div>
        </main>
    </div>
</body>
</html> 