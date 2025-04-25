package model;

public class Plant {
    private int id;
    private String name;
    private String scientificName;
    private String description;
    private String careInstructions;
    private String imageUrl;
    
    public Plant() {}
    
    public Plant(int id, String name, String scientificName, String description, 
                String careInstructions, String imageUrl) {
        this.id = id;
        this.name = name;
        this.scientificName = scientificName;
        this.description = description;
        this.careInstructions = careInstructions;
        this.imageUrl = imageUrl;
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getScientificName() { return scientificName; }
    public void setScientificName(String scientificName) { this.scientificName = scientificName; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public String getCareInstructions() { return careInstructions; }
    public void setCareInstructions(String careInstructions) { this.careInstructions = careInstructions; }
    
    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
} 