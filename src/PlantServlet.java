import java.io.IOException;
import java.sql.SQLException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.Plant;
import dao.PlantDAO;

@WebServlet("/plants/*")
public class PlantServlet extends HttpServlet {
    private PlantDAO plantDAO;
    
    @Override
    public void init() throws ServletException {
        plantDAO = new PlantDAO();
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        String pathInfo = request.getPathInfo();
        
        try {
            if (pathInfo == null || pathInfo.equals("/")) {
                // List all plants
                List<Plant> plants = plantDAO.getAllPlants();
                request.setAttribute("plants", plants);
                request.getRequestDispatcher("/WEB-INF/views/plants.jsp").forward(request, response);
            } else {
                // Get specific plant
                String[] splits = pathInfo.split("/");
                if (splits.length > 1) {
                    int plantId = Integer.parseInt(splits[1]);
                    Plant plant = plantDAO.getPlantById(plantId);
                    if (plant != null) {
                        request.setAttribute("plant", plant);
                        request.getRequestDispatcher("/WEB-INF/views/plant-details.jsp").forward(request, response);
                    } else {
                        response.sendError(HttpServletResponse.SC_NOT_FOUND);
                    }
                }
            }
        } catch (SQLException e) {
            throw new ServletException("Database error", e);
        }
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
            throws ServletException, IOException {
        // Handle form submission for adding new plants
        try {
            Plant plant = new Plant();
            plant.setName(request.getParameter("name"));
            plant.setScientificName(request.getParameter("scientificName"));
            plant.setDescription(request.getParameter("description"));
            plant.setCareInstructions(request.getParameter("careInstructions"));
            plant.setImageUrl(request.getParameter("imageUrl"));
            
            plantDAO.addPlant(plant);
            response.sendRedirect(request.getContextPath() + "/plants");
        } catch (SQLException e) {
            throw new ServletException("Database error", e);
        }
    }
} 