// Sample dining-hall menu data for the Nittany Access Dining demo.
// This is entirely made up for the prototype — no real menu, pricing, or
// nutrition data. Feel free to edit this file to change what the demo shows.

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
  },
  {
    id: 'grill-veggie-burger',
    name: 'Garden Veggie Burger',
    description: 'Plant-based patty with roasted peppers, arugula, and garlic aioli.',
    price: 8.0,
    category: 'Grill',
    tags: ['Vegetarian', 'Contains Gluten'],
  },
  {
    id: 'grill-grilled-chicken',
    name: 'Grilled Chicken Sandwich',
    description: 'Herb-marinated chicken breast, spinach, and tomato on a whole wheat roll.',
    price: 8.75,
    category: 'Grill',
    tags: ['Contains Gluten'],
  },
  {
    id: 'grill-fries',
    name: 'Crispy Fries',
    description: 'Golden fries, lightly salted. Ketchup available on request.',
    price: 3.25,
    category: 'Grill',
    tags: ['Vegan', 'Gluten-Free'],
  },

  // Comfort Kitchen
  {
    id: 'comfort-mac-cheese',
    name: 'Baked Mac & Cheese',
    description: 'Elbow pasta in a creamy three-cheese sauce with a toasted breadcrumb top.',
    price: 7.5,
    category: 'Comfort Kitchen',
    tags: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
  },
  {
    id: 'comfort-roast-turkey',
    name: 'Roast Turkey Plate',
    description: 'Sliced turkey, mashed potatoes, and gravy with a side of green beans.',
    price: 9.5,
    category: 'Comfort Kitchen',
    tags: ['Gluten-Free'],
  },
  {
    id: 'comfort-meatloaf',
    name: 'Home-Style Meatloaf',
    description: 'Beef meatloaf with brown gravy, served with mashed potatoes.',
    price: 9.0,
    category: 'Comfort Kitchen',
    tags: ['Contains Gluten'],
  },
  {
    id: 'comfort-veggie-stirfry',
    name: 'Seasonal Vegetable Stir-Fry',
    description: 'Wok-tossed seasonal vegetables in a light soy-ginger sauce over rice.',
    price: 7.75,
    category: 'Comfort Kitchen',
    tags: ['Vegan', 'Contains Soy'],
  },

  // Salad & Greens Bar
  {
    id: 'salad-caesar',
    name: 'Classic Caesar Salad',
    description: 'Romaine, parmesan, croutons, and Caesar dressing.',
    price: 6.5,
    category: 'Salad & Greens Bar',
    tags: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
  },
  {
    id: 'salad-build-your-own',
    name: 'Build-Your-Own Greens Bowl',
    description: 'Mixed greens with your choice of three toppings and a dressing.',
    price: 6.0,
    category: 'Salad & Greens Bar',
    tags: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'salad-chickpea',
    name: 'Mediterranean Chickpea Salad',
    description: 'Chickpeas, cucumber, tomato, feta, and olives with lemon-herb dressing.',
    price: 6.75,
    category: 'Salad & Greens Bar',
    tags: ['Vegetarian', 'Contains Dairy', 'Gluten-Free'],
  },

  // International Kitchen
  {
    id: 'intl-chicken-tikka',
    name: 'Chicken Tikka Masala',
    description: 'Simmered chicken in a spiced tomato-cream sauce, served with basmati rice.',
    price: 9.75,
    category: 'International Kitchen',
    tags: ['Contains Dairy', 'Spicy'],
  },
  {
    id: 'intl-veg-pad-thai',
    name: 'Vegetable Pad Thai',
    description: 'Rice noodles, tofu, and vegetables tossed in a tamarind sauce with peanuts.',
    price: 8.5,
    category: 'International Kitchen',
    tags: ['Vegetarian', 'Contains Peanuts', 'Contains Soy'],
  },
  {
    id: 'intl-cheese-quesadilla',
    name: 'Cheese Quesadilla',
    description: 'Grilled flour tortilla with melted cheddar-jack, served with salsa.',
    price: 6.25,
    category: 'International Kitchen',
    tags: ['Vegetarian', 'Contains Dairy', 'Contains Gluten'],
  },
  {
    id: 'intl-falafel-wrap',
    name: 'Falafel Wrap',
    description: 'Crispy falafel, hummus, and pickled vegetables in a warm flatbread.',
    price: 7.5,
    category: 'International Kitchen',
    tags: ['Vegan', 'Contains Gluten'],
  },

  // Bakery & Desserts
  {
    id: 'dessert-cookie',
    name: 'Chocolate Chip Cookie',
    description: 'Baked fresh daily.',
    price: 2.0,
    category: 'Bakery & Desserts',
    tags: ['Vegetarian', 'Contains Gluten', 'Contains Dairy'],
  },
  {
    id: 'dessert-fruit-cup',
    name: 'Seasonal Fruit Cup',
    description: 'A mix of fresh seasonal fruit.',
    price: 3.0,
    category: 'Bakery & Desserts',
    tags: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'dessert-brownie',
    name: 'Fudge Brownie',
    description: 'Rich chocolate brownie, cut in-house.',
    price: 2.5,
    category: 'Bakery & Desserts',
    tags: ['Vegetarian', 'Contains Gluten', 'Contains Dairy'],
  },

  // Beverages
  {
    id: 'bev-fountain',
    name: 'Fountain Soda',
    description: 'Your choice of soda from the fountain machine.',
    price: 1.75,
    category: 'Beverages',
    tags: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'bev-coffee',
    name: 'Coffee',
    description: 'Freshly brewed, regular or decaf.',
    price: 1.5,
    category: 'Beverages',
    tags: ['Vegan', 'Gluten-Free'],
  },
  {
    id: 'bev-bottled-water',
    name: 'Bottled Water',
    description: '',
    price: 1.25,
    category: 'Beverages',
    tags: ['Vegan', 'Gluten-Free'],
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
