export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string;
  featured?: boolean;
}

export const menuData: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Truffle Arancini",
    description: "Crispy risotto balls with black truffle, served with saffron aioli",
    price: 16,
    category: "starters",
    image: "https://images.unsplash.com/photo-1541529086526-db283c563270?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 2,
    name: "Burrata Caprese",
    description: "Creamy burrata, heirloom tomatoes, basil oil, aged balsamic",
    price: 18,
    category: "starters",
    image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Tuna Tartare",
    description: "Fresh yellowfin tuna, avocado, sesame, crispy wonton",
    price: 22,
    category: "starters",
    image: "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 4,
    name: "Lobster Bisque",
    description: "Rich lobster broth, cognac cream, chive oil",
    price: 19,
    category: "starters",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
  },

  // Mains
  {
    id: 5,
    name: "Wagyu Ribeye",
    description: "Grade A5 wagyu, bone marrow butter, roasted garlic, seasonal vegetables",
    price: 85,
    category: "mains",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 6,
    name: "Pan-Seared Branzino",
    description: "Mediterranean sea bass, lemon caper beurre blanc, herb risotto",
    price: 42,
    category: "mains",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Duck Confit",
    description: "Slow-cooked duck leg, cherry gastrique, parsnip purée",
    price: 38,
    category: "mains",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini, chanterelles, truffle oil, parmesan crisp",
    price: 32,
    category: "mains",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
    featured: true,
  },

  // Desserts
  {
    id: 9,
    name: "Chocolate Fondant",
    description: "Warm chocolate cake, molten center, vanilla bean ice cream",
    price: 14,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    featured: true,
  },
  {
    id: 10,
    name: "Crème Brûlée",
    description: "Classic vanilla custard, caramelized sugar, fresh berries",
    price: 12,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Tiramisu",
    description: "Espresso-soaked ladyfingers, mascarpone, cocoa dust",
    price: 13,
    category: "desserts",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
  },

  // Drinks
  {
    id: 12,
    name: "Old Fashioned",
    description: "Bourbon, angostura bitters, orange peel, luxardo cherry",
    price: 16,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=300&fit=crop",
  },
  {
    id: 13,
    name: "Espresso Martini",
    description: "Vodka, fresh espresso, coffee liqueur, vanilla",
    price: 15,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1545438102-799c3991ffef?w=400&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Sommelier's Selection",
    description: "Ask about our curated wine pairings",
    price: 18,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=300&fit=crop",
  },
];

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Main Courses' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'drinks', label: 'Cocktails & Wine' },
] as const;

export type CategoryId = typeof categories[number]['id'];
