// Default plants data
const defaultPlants = [
    {
        id: 1,
        name: 'Pink Rose',
        scientificName: 'Rosa × centifolia',
        imageUrl: 'images/rose.jpeg',
        description: 'The pink rose is a classic garden flower known for its delicate petals and sweet fragrance. It symbolizes grace, gentility, and happiness.',
        careInstructions: 'Light: Full sun to partial shade\nWater: Regular watering, keep soil moist but not waterlogged\nSoil: Well-draining, rich soil\nTemperature: 60-70°F (15-21°C)\nHumidity: Moderate\nFertilizer: Feed during growing season\nPruning: Regular deadheading and annual pruning'
    },
    {
        id: 2,
        name: 'Sunflower',
        scientificName: 'Helianthus annuus',
        imageUrl: 'images/sun flower.jpeg',
        description: 'The sunflower is a tall, bright annual plant known for its large yellow blooms that track the sun. It\'s not only ornamental but also produces edible seeds.',
        careInstructions: 'Light: Full sun\nWater: Regular watering, drought tolerant once established\nSoil: Well-draining, rich soil\nTemperature: 70-78°F (21-26°C)\nSpacing: 6 inches apart\nFertilizer: Moderate feeding\nSupport: May need staking for tall varieties'
    },
    {
        id: 3,
        name: 'Red Tulip',
        scientificName: 'Tulipa gesneriana',
        imageUrl: 'images/tulip.jpg',
        description: 'Red tulips are spring-blooming flowers with bold, cup-shaped blooms. They are perfect for gardens and cut flower arrangements, symbolizing perfect love.',
        careInstructions: 'Light: Full sun to partial shade\nWater: Moderate watering during growing season\nSoil: Well-draining, fertile soil\nPlanting Depth: 4-6 inches deep\nBulb Storage: Cool, dry place\nTemperature: Prefers cool springs\nBlooming: Early to late spring'
    }
];

// Initialize plants in localStorage if not exists
function initializePlants() {
    const storedPlants = localStorage.getItem('plants');
    if (!storedPlants) {
        localStorage.setItem('plants', JSON.stringify(defaultPlants));
    }
}

// Get all plants
function getPlants() {
    const storedPlants = localStorage.getItem('plants');
    return storedPlants ? JSON.parse(storedPlants) : defaultPlants;
}

// Add new plant
function addPlant(newPlant) {
    const plants = getPlants();
    newPlant.id = Math.max(...plants.map(p => p.id), 0) + 1;
    plants.push(newPlant);
    localStorage.setItem('plants', JSON.stringify(plants));
    return newPlant;
}

// Initialize plants when the script loads
initializePlants(); 