const vendors = [
  {
    id: "my-restaurant",
    name: "ShaqNomNom",
    location: "Mahallah Ali, Canteen",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "1. ",
        name: "Butter Chicken Masala",
        description:
          "Gourmet, creamy, rich and a drop of sweetness. Paired well with our Garlic-Butter Naan",
        price: 15,
        category: "Curries",
        available: true,
      },
      {
        id: "2. ",
        name: "Garlic-Butter Naan",
        description:
          "Aroma of fresh garlic, just enough butter lathered to infuse into the Naan. Our signature dough is a popular choice.",
        price: 6,
        category: "Breads",
        available: true,
      },
      {
        id: "3. ",
        name: "NanaariZah",
        description:
          "A south-indian 1st choice lemonade (Nanaari) combined with North-indian extract (Roohafzah), to give a refreshing blast.",
        price: 2.5,
        category: "Drinks",
        available: false,
      },
    ],
  },
  {
    id: "kafe-aminah",
    name: "Kafe Mahallah Aminah",
    location: "Mahallah Aminah, Ground Floor",
    openHours: "8:00 am - 9:00 pm",
    isOpen: true,
    menu: [
      {
        id: "ami-1",
        name: "Nasi Ayam Penyet",
        description: "Smashed fried chicken with sambal and rice",
        price: 9,
        category: "Rice",
        available: true,
      },
      {
        id: "ami-2",
        name: "Air Bandung",
        description: "Rose syrup with milk",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
];
export default vendors;
