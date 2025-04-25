package dao;

import model.Plant;
import util.DBConnection;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class PlantDAO {
    
    public List<Plant> getAllPlants() throws SQLException {
        List<Plant> plants = new ArrayList<>();
        String query = "SELECT * FROM plants";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {
            
            while (rs.next()) {
                Plant plant = new Plant();
                plant.setId(rs.getInt("id"));
                plant.setName(rs.getString("name"));
                plant.setScientificName(rs.getString("scientific_name"));
                plant.setDescription(rs.getString("description"));
                plant.setCareInstructions(rs.getString("care_instructions"));
                plant.setImageUrl(rs.getString("image_url"));
                plants.add(plant);
            }
        }
        return plants;
    }
    
    public Plant getPlantById(int id) throws SQLException {
        String query = "SELECT * FROM plants WHERE id = ?";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setInt(1, id);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    Plant plant = new Plant();
                    plant.setId(rs.getInt("id"));
                    plant.setName(rs.getString("name"));
                    plant.setScientificName(rs.getString("scientific_name"));
                    plant.setDescription(rs.getString("description"));
                    plant.setCareInstructions(rs.getString("care_instructions"));
                    plant.setImageUrl(rs.getString("image_url"));
                    return plant;
                }
            }
        }
        return null;
    }
    
    public void addPlant(Plant plant) throws SQLException {
        String query = "INSERT INTO plants (name, scientific_name, description, care_instructions, image_url) " +
                      "VALUES (?, ?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setString(1, plant.getName());
            pstmt.setString(2, plant.getScientificName());
            pstmt.setString(3, plant.getDescription());
            pstmt.setString(4, plant.getCareInstructions());
            pstmt.setString(5, plant.getImageUrl());
            pstmt.executeUpdate();
        }
    }
} 