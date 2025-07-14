import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { seedProducts, productsData } from '../utils/seedData.js';

const router = express.Router();

// Helper function to check if MongoDB is connected
const isMongoConnected = () => {
  return mongoose.connection.readyState === 1;
};

// Helper function to filter and sort static products
const filterAndSortProducts = (products, { category, search, minPrice, maxPrice, sort }) => {
  let filtered = [...products];

  // Apply category filter
  if (category && category !== 'all') {
    filtered = filtered.filter(product => product.category === category);
  }

  // Apply search filter
  if (search) {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.category.toLowerCase().includes(searchLower)
    );
  }

  // Apply price filters
  if (minPrice) {
    filtered = filtered.filter(product => product.price >= Number(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(product => product.price <= Number(maxPrice));
  }

  // Apply sorting
  switch (sort) {
    case 'price-low':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  return filtered;
};

// Get all products with filtering
router.get('/', async (req, res) => {
  try {
    const { category, search, minPrice, maxPrice, sort } = req.query;
    
    // Check if MongoDB is connected
    if (!isMongoConnected()) {
      console.log('📦 Using static product data (MongoDB not connected)');
      const filteredProducts = filterAndSortProducts(productsData, { category, search, minPrice, maxPrice, sort });
      return res.json(filteredProducts);
    }

    // Build query for MongoDB
    let query = {};
    
    if (category && category !== 'all') {
      query.category = category;
    }
    
    if (search) {
      query.$text = { $search: search };
    }
    
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Build sort
    let sortOption = {};
    switch (sort) {
      case 'price-low':
        sortOption.price = 1;
        break;
      case 'price-high':
        sortOption.price = -1;
        break;
      case 'rating':
        sortOption.rating = -1;
        break;
      default:
        sortOption.name = 1;
    }

    const products = await Product.find(query).sort(sortOption).maxTimeMS(30000);
    
    // If no products found and no search/filter, seed the database
    if (products.length === 0 && !search && !category) {
      await seedProducts();
      const seededProducts = await Product.find(query).sort(sortOption).maxTimeMS(30000);
      return res.json(seededProducts);
    }
    
    res.json(products);
  } catch (error) {
    console.error('Get products error:', error);
    // Fallback to static data on error
    console.log('📦 Falling back to static product data due to error');
    const { category, search, minPrice, maxPrice, sort } = req.query;
    const filteredProducts = filterAndSortProducts(productsData, { category, search, minPrice, maxPrice, sort });
    res.json(filteredProducts);
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!isMongoConnected()) {
      console.log('📦 Using static product data (MongoDB not connected)');
      const product = productsData.find(p => p.id === req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      return res.json(product);
    }

    const product = await Product.findOne({ id: req.params.id }).maxTimeMS(30000);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Get product error:', error);
    // Fallback to static data on error
    console.log('📦 Falling back to static product data due to error');
    const product = productsData.find(p => p.id === req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  }
});

// Get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    
    // Check if MongoDB is connected
    if (!isMongoConnected()) {
      console.log('📦 Using static product data (MongoDB not connected)');
      const products = productsData.filter(p => p.category === category);
      return res.json(products);
    }

    const products = await Product.find({ category }).maxTimeMS(30000);
    
    res.json(products);
  } catch (error) {
    console.error('Get products by category error:', error);
    // Fallback to static data on error
    console.log('📦 Falling back to static product data due to error');
    const { category } = req.params;
    const products = productsData.filter(p => p.category === category);
    res.json(products);
  }
});

// Get featured products
router.get('/featured/all', async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!isMongoConnected()) {
      console.log('📦 Using static product data (MongoDB not connected)');
      const featuredProducts = productsData
        .filter(p => p.rating >= 4.5)
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);
      return res.json(featuredProducts);
    }

    const products = await Product.find({ rating: { $gte: 4.5 } })
      .sort({ rating: -1 })
      .limit(8)
      .maxTimeMS(30000);
    
    res.json(products);
  } catch (error) {
    console.error('Get featured products error:', error);
    // Fallback to static data on error
    console.log('📦 Falling back to static product data due to error');
    const featuredProducts = productsData
      .filter(p => p.rating >= 4.5)
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 8);
    res.json(featuredProducts);
  }
});

export default router;