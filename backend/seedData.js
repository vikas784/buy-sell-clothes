const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');
require('dotenv').config();

const sampleMenuItems = [
  {
    name: "Plain Dosa",
    description: "Crispy rice and lentil crepe served with coconut chutney and sambar",
    price: 80,
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Masala Dosa",
    description: "Crispy dosa filled with spiced potato curry",
    price: 120,
    image: "https://images.pexels.com/photos/14737/pexels-photo-14737.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Cheese Dosa",
    description: "Dosa filled with melted cheese and vegetables",
    price: 150,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Rava Dosa",
    description: "Crispy semolina dosa with onions and spices",
    price: 100,
    image: "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Mysore Masala Dosa",
    description: "Spicy dosa with red chutney and potato filling",
    price: 140,
    image: "https://images.pexels.com/photos/14737/pexels-photo-14737.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Paneer Dosa",
    description: "Dosa stuffed with spiced cottage cheese",
    price: 160,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to MongoDB');

    // Clear existing data
    await MenuItem.deleteMany({});
    console.log('Cleared existing menu items');

    // Insert sample data
    await MenuItem.insertMany(sampleMenuItems);
    console.log('Sample menu items inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();