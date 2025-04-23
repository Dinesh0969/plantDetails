<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%
    // Check if user is logged in
    if (session.getAttribute("username") == null) {
        response.sendRedirect("login.jsp");
        return;
    }
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Plant Details</title>
    <!-- Fix the CSS path with proper context root -->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <style>
        /* Fallback styles in case external CSS fails to load */
        .navbar {
            background-color: #4CAF50;
            padding: 1rem;
            color: white;
        }
        .container {
            width: 90%;
            margin: 0 auto;
            padding: 20px;
        }
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <a href="dashboard.jsp" style="color: white; text-decoration: none; font-weight: bold;">
            <i class="fas fa-leaf"></i> Plant Details
        </a>
        <div style="float: right;">
            <a href="profile.jsp" style="color: white; text-decoration: none; margin-right: 15px;">
                <i class="fas fa-user"></i> Profile
            </a>
            <a href="plants.jsp" style="color: white; text-decoration: none; margin-right: 15px;">
                <i class="fas fa-seedling"></i> My Plants
            </a>
            <a href="logout" style="color: white; text-decoration: none;">
                <i class="fas fa-sign-out-alt"></i> Logout
            </a>
        </div>
    </nav>

    <div class="container">
        <h1>Welcome, <%= session.getAttribute("username") %></h1>
        
        <div class="dashboard-grid">
            <div class="stat-card">
                <h3><i class="fas fa-seedling"></i> Total Plants</h3>
                <p style="font-size: 24px; font-weight: bold;">12</p>
            </div>
            
            <div class="stat-card">
                <h3><i class="fas fa-tint"></i> Plants Needing Water</h3>
                <p style="font-size: 24px; font-weight: bold;">3</p>
            </div>
            
            <div class="stat-card">
                <h3><i class="fas fa-heart"></i> Healthy Plants</h3>
                <p style="font-size: 24px; font-weight: bold;">9</p>
            </div>
        </div>

        <div style="margin-top: 30px;">
            <div class="stat-card">
                <h2>Recent Activities</h2>
                <ul style="list-style: none; padding: 0;">
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">Added new plant: Monstera</li>
                    <li style="padding: 10px 0; border-bottom: 1px solid #eee;">Watered Snake Plant</li>
                    <li style="padding: 10px 0;">Updated light conditions for Pothos</li>
                </ul>
            </div>
        </div>
    </div>

    <script>
        // Check if CSS loaded successfully
        window.onload = function() {
            var styles = document.styleSheets;
            var cssLoaded = false;
            for (var i = 0; i < styles.length; i++) {
                if (styles[i].href && styles[i].href.includes('styles.css')) {
                    cssLoaded = true;
                    break;
                }
            }
            if (!cssLoaded) {
                console.log('External CSS failed to load');
            }
        }
    </script>
</body>
</html> 
</body>
</html> 