// Sample dining-hall menu data for the Nittany Access Dining demo.
// The menu and pricing are made up for the prototype. Nutrition values are
// estimates based on typical published data (e.g. USDA FoodData Central and
// common restaurant equivalents) for each dish — not measured values for these
// recipes. Feel free to edit this file to change what the demo shows.
//
// Each item's `nutrition` is per serving: calories (kcal), protein / carbs /
// fat (grams), sodium (milligrams). `allergens` lists which of the nine major
// US food allergens the item contains (Milk, Eggs, Fish, Shellfish, Tree Nuts,
// Peanuts, Wheat, Soy, Sesame); an empty array means none of them.

export const CATEGORIES = [
  'Grill',
  'Comfort Kitchen',
  'Salad & Greens Bar',
  'International Kitchen',
  'Bakery & Desserts',
  'Beverages',
];

// Tags are shown as text + icon (never color alone) so they stay accessible.
// Keep tag names short — they render as small labeled chips on each item.
export const MENU_ITEMS = [
  // Grill
  {
    id: 'grill-cheeseburger',
    name: 'Nittany Cheeseburger',
    description: 'Grilled beef patty, cheddar, lettuce, tomato, and house sauce on a toasted bun.',
    price: 8.5,
    category: 'Grill',
    tags: ['Contains Dairy', 'Contains Gluten'],
    nutrition: { calories: 590, protein: 31, carbs: 41, fat: 32, sodium: 1100 },
    allergens: ['Milk', 'Eggs', 'Wheat', 'Sesame'],
  },
  {
    id: 'grill-veggie-burger',
    name: 'Garden Veggie Burger',
    description: 'Plant-based patty with roasted peppers, arugula, and garlic aioli.',
    price: 8.0,
    category: 'Grill',
    tags: ['Vegetarian', 'Contains Gluten'],
    nutrition: { calories: 520, protein: 21, carbs: 50, fat: 26, sodium: 890 },
    allergens: ['Eggs', 'Wheat', 'Soy'],
  },
  {
    id: 'grill-grilled-chicken',
    name: 'Grilled Chicken Sandwich',
    description: 'Herb-marinated chicken breast, spinach, and tomato on a whole wheat roll.',
    price: 8.75,
    category: 'Grill',
    tags: ['Contains Gluten'],
    nutrition: { calories: 480, protein: 38, carbs: 44, fat: 14, sodium: 960 },
    allergens: ['Wheat'],
  },
  {
    id: 'grill-fries',
    name: 'Crispy Fries',
    description: 'Golden fries, lightly salted. Ketchup available on request.',
    price: 3.25,
    category: 'Grill',
    tags: ['Vegan', 'Gluten-Free'],
    nutrition: { calories: 365, protein: 4, carbs: 48, fat: 17, sodium: 280 },
    allergens: [],
  },

  // Comfort Kitchen
  {
    id: 'comfort-mac-cheese',
    name: 'Baked Mac & Cheese',
    description: 'Elbow pasta in a creamy three-cheese sauce with a toasted breadcrumb top.',
    price: 7.5,
    category: 'Comfort Kitchen',
    tags: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
    nutrition: { calories: 610, protein: 24, carbs: 58, fat: 30, sodium: 1020 },
    allergens: ['Milk', 'Wheat'],
  },
  {
    id: 'comfort-roast-turkey',
    name: 'Roast Turkey Plate',
    description: 'Sliced turkey, mashed potatoes, and gravy with a side of green beans.',
    price: 9.5,
    category: 'Comfort Kitchen',
    tags: ['Gluten-Free'],
    nutrition: { calories: 540, protein: 42, carbs: 40, fat: 20, sodium: 1180 },
    allergens: ['Milk'],
  },
  {
    id: 'comfort-meatloaf',
    name: 'Home-Style Meatloaf',
    description: 'Beef meatloaf with brown gravy, served with mashed potatoes.',
    price: 9.0,
    category: 'Comfort Kitchen',
    tags: ['Contains Gluten'],
    nutrition: { calories: 650, protein: 33, carbs: 38, fat: 38, sodium: 1240 },
    allergens: ['Milk', 'Eggs', 'Wheat'],
  },
  {
    id: 'comfort-veggie-stirfry',
    name: 'Seasonal Vegetable Stir-Fry',
    description: 'Wok-tossed seasonal vegetables in a light soy-ginger sauce over rice.',
    price: 7.75,
    category: 'Comfort Kitchen',
    tags: ['Vegan', 'Contains Soy'],
    nutrition: { calories: 430, protein: 10, carbs: 78, fat: 9, sodium: 870 },
    allergens: ['Soy'],
  },

  // Salad & Greens Bar
  {
    id: 'salad-caesar',
    name: 'Classic Caesar Salad',
    description: 'Romaine, parmesan, croutons, and Caesar dressing.',
    price: 6.5,
    category: 'Salad & Greens Bar',
    tags: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
    nutrition: { calories: 390, protein: 12, carbs: 20, fat: 29, sodium: 780 },
    allergens: ['Milk', 'Eggs', 'Wheat'],
  },
  {
    id: 'salad-build-your-own',
    name: 'Build-Your-Own Greens Bowl',
    description: 'Mixed greens with your choice of three toppings and a dressing.',
    price: 6.0,
    category: 'Salad & Greens Bar',
    tags: ['Vegan', 'Gluten-Free'],
    nutritionNote: 'Estimate for greens with three vegetable toppings and vinaigrette — varies with your choices.',
    nutrition: { calories: 220, protein: 6, carbs: 22, fat: 12, sodium: 340 },
    allergens: [],
  },
  {
    id: 'salad-chickpea',
    name: 'Mediterranean Chickpea Salad',
    description: 'Chickpeas, cucumber, tomato, feta, and olives with lemon-herb dressing.',
    price: 6.75,
    category: 'Salad & Greens Bar',
    tags: ['Vegetarian', 'Contains Dairy', 'Gluten-Free'],
    nutrition: { calories: 410, protein: 15, carbs: 38, fat: 23, sodium: 820 },
    allergens: ['Milk'],
  },

  // International Kitchen
  {
    id: 'intl-chicken-tikka',
    name: 'Chicken Tikka Masala',
    description: 'Simmered chicken in a spiced tomato-cream sauce, served with basmati rice.',
    price: 9.75,
    category: 'International Kitchen',
    tags: ['Contains Dairy', 'Spicy'],
    nutrition: { calories: 720, protein: 40, carbs: 72, fat: 28, sodium: 1290 },
    allergens: ['Milk'],
  },
  {
    id: 'intl-veg-pad-thai',
    name: 'Vegetable Pad Thai',
    description: 'Rice noodles, tofu, and vegetables tossed in a tamarind sauce with peanuts.',
    price: 8.5,
    category: 'International Kitchen',
    tags: ['Vegetarian', 'Contains Peanuts', 'Contains Soy'],
    nutrition: { calories: 640, protein: 20, carbs: 86, fat: 24, sodium: 1150 },
    allergens: ['Eggs', 'Peanuts', 'Soy'],
  },
  {
    id: 'intl-cheese-quesadilla',
    name: 'Cheese Quesadilla',
    description: 'Grilled flour tortilla with melted cheddar-jack, served with salsa.',
    price: 6.25,
    category: 'International Kitchen',
    tags: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
    nutrition: { calories: 560, protein: 24, carbs: 44, fat: 32, sodium: 990 },
    allergens: ['Milk', 'Wheat'],
  },
  {
    id: 'intl-falafel-wrap',
    name: 'Falafel Wrap',
    description: 'Crispy falafel, hummus, and pickled vegetables in a warm flatbread.',
    price: 7.5,
    category: 'International Kitchen',
    tags: ['Vegan', 'Contains Gluten'],
    nutrition: { calories: 590, protein: 18, carbs: 72, fat: 26, sodium: 1080 },
    allergens: ['Wheat', 'Sesame'],
  },

  // Bakery & Desserts
  {
    id: 'dessert-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Baked fresh daily.',
    price: 2.0,
    category: 'Bakery & Desserts',
    tags: ['Vegetarian', 'Contains Gluten', 'Contains Dairy'],
    nutrition: { calories: 220, protein: 3, carbs: 30, fat: 11, sodium: 150 },
    allergens: ['Milk', 'Eggs', 'Wheat', 'Soy'],
  },
  {
    id: 'dessert-fruit-cup',
    name: 'Seasonal Fruit Cup',
    description: 'A mix of fresh seasonal fruit.',
    price: 3.0,
    category: 'Bakery & Desserts',
    tags: ['Vegan', 'Gluten-Free'],
    nutrition: { calories: 90, protein: 1, carbs: 23, fat: 0, sodium: 5 },
    allergens: [],
  },
  {
    id: 'dessert-brownie',
    name: 'Fudge Brownie',
    description: 'Rich chocolate brownie, cut in-house.',
    price: 2.5,
    category: 'Bakery & Desserts',
    tags: ['Vegetarian', 'Contains Gluten', 'Contains Dairy'],
    nutrition: { calories: 280, protein: 3, carbs: 36, fat: 15, sodium: 140 },
    allergens: ['Milk', 'Eggs', 'Wheat'],
  },

  // Beverages
  {
    id: 'bev-fountain',
    name: 'Fountain Soda',
    description: 'Your choice of soda from the fountain machine.',
    price: 1.75,
    category: 'Beverages',
    tags: ['Vegan', 'Gluten-Free'],
    nutrition: { calories: 150, protein: 0, carbs: 41, fat: 0, sodium: 45 },
    allergens: [],
  },
  {
    id: 'bev-coffee',
    name: 'Coffee',
    description: 'Freshly brewed, regular or decaf.',
    price: 1.5,
    category: 'Beverages',
    tags: ['Vegan', 'Gluten-Free'],
    nutrition: { calories: 5, protein: 0, carbs: 0, fat: 0, sodium: 5 },
    allergens: [],
  },
  {
    id: 'bev-bottled-water',
    name: 'Bottled Water',
    description: '',
    price: 1.25,
    category: 'Beverages',
    tags: ['Vegan', 'Gluten-Free'],
    nutrition: { calories: 0, protein: 0, carbs: 0, fat: 0, sodium: 0 },
    allergens: [],
  },
];

export const ORDER_STATUSES = [
  {
    id: 'received',
    label: 'Order received',
    detail: 'The dining hall has received your order.',
  },
  {
    id: 'preparing',
    label: 'Preparing your order',
    detail: 'Kitchen staff are preparing your food now.',
  },
  {
    id: 'ready',
    label: 'Ready for delivery',
    detail: 'Your order is ready and will be brought to your table shortly.',
  },
  {
    id: 'delivered',
    label: 'Delivered',
    detail: 'Your order has been delivered to your table. Enjoy!',
  },
];
