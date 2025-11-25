// Mobile Projects Data
export const projects = [
  {
    id: 1,
    title: "Pet Care Tracker",
    description:
      "A comprehensive mobile app for tracking pet health, appointments, and daily care routines. Features include photo gallery, medication reminders, and vet appointment scheduling.",
    category: "Health & Wellness",
    techStack: ["Flutter", "Firebase", "Hive", "Provider"],
    features: [
      "Photo gallery with favorites",
      "Medication tracking",
      "Appointment scheduling",
      "Multi-pet support",
    ],
    image: "/projects/pet-care.png", // Placeholder - add your actual images
    screenshots: [
      "/projects/pet-care-1.png",
      "/projects/pet-care-2.png",
      "/projects/pet-care-3.png",
    ],
    githubUrl: "https://github.com/yourusername/pet-care",
    liveUrl: null, // Add if deployed
    status: "In Development",
  },
  {
    id: 2,
    title: "Barcode Scanner Pro",
    description:
      "Enterprise barcode scanning solution with offline caching, product management, and real-time inventory tracking. Optimized for warehouse and retail environments.",
    category: "Productivity",
    techStack: ["Flutter", "Firebase", "Firestore", "Local Cache"],
    features: [
      "Fast barcode scanning",
      "Offline mode with 7-day cache",
      "Product detail preview",
      "User role management",
    ],
    image: "/projects/barcode-scanner.png",
    screenshots: ["/projects/barcode-1.png", "/projects/barcode-2.png"],
    githubUrl: "https://github.com/yourusername/barcode-scanner",
    liveUrl: null,
    status: "Completed",
  },
  {
    id: 3,
    title: "Task Manager Plus",
    description:
      "Modern task management app with intuitive UI, smart notifications, and team collaboration features. Built for productivity enthusiasts.",
    category: "Productivity",
    techStack: ["React Native", "Redux", "AsyncStorage", "Push Notifications"],
    features: [
      "Smart task prioritization",
      "Team collaboration",
      "Custom categories",
      "Dark mode support",
    ],
    image: "/projects/task-manager.png",
    screenshots: [
      "/projects/task-1.png",
      "/projects/task-2.png",
      "/projects/task-3.png",
    ],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://task-manager-demo.com",
    status: "Completed",
  },
];

// Project categories for filtering
export const categories = [
  "All",
  "Health & Wellness",
  "Productivity",
  "Social",
  "E-commerce",
  "Entertainment",
];

// Tech stack icons/colors mapping
export const techColors = {
  Flutter: "bg-blue-500",
  "React Native": "bg-cyan-500",
  Firebase: "bg-orange-500",
  Firestore: "bg-yellow-500",
  Hive: "bg-purple-500",
  Provider: "bg-green-500",
  Redux: "bg-purple-600",
  AsyncStorage: "bg-gray-500",
  "Push Notifications": "bg-red-500",
  "Local Cache": "bg-indigo-500",
};
