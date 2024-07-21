export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const companies = [
  {
    companyName: "Jenny Wilson Cleaning",
    description: "Professional house cleaning services by Jenny Wilson.",
    address: "255 Grand Park Ave, New York",
    category: "Cleaning",
    representative: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    photoUrl: "/img/cleaning.jpg",
  },
  {
    companyName: "John Doe Lawn Mowing",
    description: "Expert lawn mowing services by John Doe.",
    address: "123 Green St, Los Angeles",
    category: "Cleaning",
    representative: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "/img/gardening.jpg",
  },
  {
    companyName: "Alice Johnson Plumbing",
    description: "Reliable leak repair services by Alice Johnson.",
    address: "456 Waterway Dr, Chicago",
    category: "Plumbing",
    representative: "Alice Johnson",
    email: "alice.johnson@example.com",
    photoUrl: "/img/plumbing.jpg",
  },
  {
    companyName: "Michael Smith Electric",
    description: "Professional wiring services by Michael Smith.",
    address: "789 Powerline Rd, Miami",
    category: "Electric",
    representative: "Michael Smith",
    email: "michael.smith@example.com",
    photoUrl: "/img/electrician.jpg",
  },
  {
    companyName: "Emily Davis Child Care",
    description: "Quality child care services by Emily Davis.",
    address: "101 Main St, Houston",
    category: "Repair",
    representative: "Emily Davis",
    email: "emily.davis@example.com",
    photoUrl: "/img/babysitting.jpg",
  },
  {
    companyName: "Robert Brown Math Tutoring",
    description: "Expert math tutoring services by Robert Brown.",
    address: "202 Study Ln, Boston",
    category: "Repair",
    representative: "Robert Brown",
    email: "robert.brown@example.com",
    photoUrl: "/img/tutoring.jpg",
  },
  {
    companyName: "Jessica Williams Moving",
    description: "Efficient furniture moving services by Jessica Williams.",
    address: "303 Transit Ave, San Francisco",
    category: "Shifting",
    representative: "Jessica Williams",
    email: "jessica.williams@example.com",
    photoUrl: "/img/moving.jpg",
  },
  {
    companyName: "David Miller Painting",
    description: "High-quality house painting services by David Miller.",
    address: "404 Color Blvd, Seattle",
    category: "Painting",
    representative: "David Miller",
    email: "david.miller@example.com",
    photoUrl: "/img/painting.jpg",
  },
  {
    companyName: "Jenny Wilson Cleaning",
    description: "Professional house cleaning services by Jenny Wilson.",
    address: "255 Grand Park Ave, New York",
    category: "Cleaning",
    representative: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    photoUrl: "/img/cleaning.jpg",
  },
  {
    companyName: "John Doe Lawn Mowing",
    description: "Expert lawn mowing services by John Doe.",
    address: "123 Green St, Los Angeles",
    category: "Cleaning",
    representative: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "/img/gardening.jpg",
  },
  {
    companyName: "Alice Johnson Plumbing",
    description: "Reliable leak repair services by Alice Johnson.",
    address: "456 Waterway Dr, Chicago",
    category: "Plumbing",
    representative: "Alice Johnson",
    email: "alice.johnson@example.com",
    photoUrl: "/img/plumbing.jpg",
  },
  {
    companyName: "Michael Smith Electric",
    description: "Professional wiring services by Michael Smith.",
    address: "789 Powerline Rd, Miami",
    category: "Electric",
    representative: "Michael Smith",
    email: "michael.smith@example.com",
    photoUrl: "/img/electrician.jpg",
  },
  {
    companyName: "Emily Davis Child Care",
    description: "Quality child care services by Emily Davis.",
    address: "101 Main St, Houston",
    category: "Repair",
    representative: "Emily Davis",
    email: "emily.davis@example.com",
    photoUrl: "/img/babysitting.jpg",
  },
  {
    companyName: "Robert Brown Math Tutoring",
    description: "Expert math tutoring services by Robert Brown.",
    address: "202 Study Ln, Boston",
    category: "Repair",
    representative: "Robert Brown",
    email: "robert.brown@example.com",
    photoUrl: "/img/tutoring.jpg",
  },
  {
    companyName: "Jessica Williams Moving",
    description: "Efficient furniture moving services by Jessica Williams.",
    address: "303 Transit Ave, San Francisco",
    category: "Shifting",
    representative: "Jessica Williams",
    email: "jessica.williams@example.com",
    photoUrl: "/img/moving.jpg",
  },
  {
    companyName: "David Miller Painting",
    description: "High-quality house painting services by David Miller.",
    address: "404 Color Blvd, Seattle",
    category: "Painting",
    representative: "David Miller",
    email: "david.miller@example.com",
    photoUrl: "/img/painting.jpg",
  },
  {
    companyName: "Jenny Wilson Cleaning",
    description: "Professional house cleaning services by Jenny Wilson.",
    address: "255 Grand Park Ave, New York",
    category: "Cleaning",
    representative: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    photoUrl: "/img/cleaning.jpg",
  },
  {
    companyName: "John Doe Lawn Mowing",
    description: "Expert lawn mowing services by John Doe.",
    address: "123 Green St, Los Angeles",
    category: "Cleaning",
    representative: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "/img/gardening.jpg",
  },
  {
    companyName: "Alice Johnson Plumbing",
    description: "Reliable leak repair services by Alice Johnson.",
    address: "456 Waterway Dr, Chicago",
    category: "Plumbing",
    representative: "Alice Johnson",
    email: "alice.johnson@example.com",
    photoUrl: "/img/plumbing.jpg",
  },
  {
    companyName: "Michael Smith Electric",
    description: "Professional wiring services by Michael Smith.",
    address: "789 Powerline Rd, Miami",
    category: "Electric",
    representative: "Michael Smith",
    email: "michael.smith@example.com",
    photoUrl: "/img/electrician.jpg",
  },
  {
    companyName: "Emily Davis Child Care",
    description: "Quality child care services by Emily Davis.",
    address: "101 Main St, Houston",
    category: "Repair",
    representative: "Emily Davis",
    email: "emily.davis@example.com",
    photoUrl: "/img/babysitting.jpg",
  },
  {
    companyName: "Robert Brown Math Tutoring",
    description: "Expert math tutoring services by Robert Brown.",
    address: "202 Study Ln, Boston",
    category: "Repair",
    representative: "Robert Brown",
    email: "robert.brown@example.com",
    photoUrl: "/img/tutoring.jpg",
  },
  {
    companyName: "Jessica Williams Moving",
    description: "Efficient furniture moving services by Jessica Williams.",
    address: "303 Transit Ave, San Francisco",
    category: "Shifting",
    representative: "Jessica Williams",
    email: "jessica.williams@example.com",
    photoUrl: "/img/moving.jpg",
  },
  {
    companyName: "David Miller Painting",
    description: "High-quality house painting services by David Miller.",
    address: "404 Color Blvd, Seattle",
    category: "Painting",
    representative: "David Miller",
    email: "david.miller@example.com",
    photoUrl: "/img/painting.jpg",
  },
  {
    companyName: "Jenny Wilson Cleaning",
    description: "Professional house cleaning services by Jenny Wilson.",
    address: "255 Grand Park Ave, New York",
    category: "Cleaning",
    representative: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    photoUrl: "/img/cleaning.jpg",
  },
  {
    companyName: "John Doe Lawn Mowing",
    description: "Expert lawn mowing services by John Doe.",
    address: "123 Green St, Los Angeles",
    category: "Cleaning",
    representative: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "/img/gardening.jpg",
  },
  {
    companyName: "Alice Johnson Plumbing",
    description: "Reliable leak repair services by Alice Johnson.",
    address: "456 Waterway Dr, Chicago",
    category: "Plumbing",
    representative: "Alice Johnson",
    email: "alice.johnson@example.com",
    photoUrl: "/img/plumbing.jpg",
  },
  {
    companyName: "Michael Smith Electric",
    description: "Professional wiring services by Michael Smith.",
    address: "789 Powerline Rd, Miami",
    category: "Electric",
    representative: "Michael Smith",
    email: "michael.smith@example.com",
    photoUrl: "/img/electrician.jpg",
  },
  {
    companyName: "Emily Davis Child Care",
    description: "Quality child care services by Emily Davis.",
    address: "101 Main St, Houston",
    category: "Repair",
    representative: "Emily Davis",
    email: "emily.davis@example.com",
    photoUrl: "/img/babysitting.jpg",
  },
  {
    companyName: "Robert Brown Math Tutoring",
    description: "Expert math tutoring services by Robert Brown.",
    address: "202 Study Ln, Boston",
    category: "Repair",
    representative: "Robert Brown",
    email: "robert.brown@example.com",
    photoUrl: "/img/tutoring.jpg",
  },
  {
    companyName: "Jessica Williams Moving",
    description: "Efficient furniture moving services by Jessica Williams.",
    address: "303 Transit Ave, San Francisco",
    category: "Shifting",
    representative: "Jessica Williams",
    email: "jessica.williams@example.com",
    photoUrl: "/img/moving.jpg",
  },
  {
    companyName: "David Miller Painting",
    description: "High-quality house painting services by David Miller.",
    address: "404 Color Blvd, Seattle",
    category: "Painting",
    representative: "David Miller",
    email: "david.miller@example.com",
    photoUrl: "/img/painting.jpg",
  },
  {
    companyName: "Jenny Wilson Cleaning",
    description: "Professional house cleaning services by Jenny Wilson.",
    address: "255 Grand Park Ave, New York",
    category: "Cleaning",
    representative: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    photoUrl: "/img/cleaning.jpg",
  },
  {
    companyName: "John Doe Lawn Mowing",
    description: "Expert lawn mowing services by John Doe.",
    address: "123 Green St, Los Angeles",
    category: "Cleaning",
    representative: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "/img/gardening.jpg",
  },
  {
    companyName: "Alice Johnson Plumbing",
    description: "Reliable leak repair services by Alice Johnson.",
    address: "456 Waterway Dr, Chicago",
    category: "Plumbing",
    representative: "Alice Johnson",
    email: "alice.johnson@example.com",
    photoUrl: "/img/plumbing.jpg",
  },
  {
    companyName: "Michael Smith Electric",
    description: "Professional wiring services by Michael Smith.",
    address: "789 Powerline Rd, Miami",
    category: "Electric",
    representative: "Michael Smith",
    email: "michael.smith@example.com",
    photoUrl: "/img/electrician.jpg",
  },
  {
    companyName: "Emily Davis Child Care",
    description: "Quality child care services by Emily Davis.",
    address: "101 Main St, Houston",
    category: "Repair",
    representative: "Emily Davis",
    email: "emily.davis@example.com",
    photoUrl: "/img/babysitting.jpg",
  },
  {
    companyName: "Robert Brown Math Tutoring",
    description: "Expert math tutoring services by Robert Brown.",
    address: "202 Study Ln, Boston",
    category: "Repair",
    representative: "Robert Brown",
    email: "robert.brown@example.com",
    photoUrl: "/img/tutoring.jpg",
  },
  {
    companyName: "Jessica Williams Moving",
    description: "Efficient furniture moving services by Jessica Williams.",
    address: "303 Transit Ave, San Francisco",
    category: "Shifting",
    representative: "Jessica Williams",
    email: "jessica.williams@example.com",
    photoUrl: "/img/moving.jpg",
  },
  {
    companyName: "David Miller Painting",
    description: "High-quality house painting services by David Miller.",
    address: "404 Color Blvd, Seattle",
    category: "Painting",
    representative: "David Miller",
    email: "david.miller@example.com",
    photoUrl: "/img/painting.jpg",
  },
  {
    companyName: "Jenny Wilson Cleaning",
    description: "Professional house cleaning services by Jenny Wilson.",
    address: "255 Grand Park Ave, New York",
    category: "Cleaning",
    representative: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    photoUrl: "/img/cleaning.jpg",
  },
  {
    companyName: "John Doe Lawn Mowing",
    description: "Expert lawn mowing services by John Doe.",
    address: "123 Green St, Los Angeles",
    category: "Cleaning",
    representative: "John Doe",
    email: "john.doe@example.com",
    photoUrl: "/img/gardening.jpg",
  },
  {
    companyName: "Alice Johnson Plumbing",
    description: "Reliable leak repair services by Alice Johnson.",
    address: "456 Waterway Dr, Chicago",
    category: "Plumbing",
    representative: "Alice Johnson",
    email: "alice.johnson@example.com",
    photoUrl: "/img/plumbing.jpg",
  },
  {
    companyName: "Michael Smith Electric",
    description: "Professional wiring services by Michael Smith.",
    address: "789 Powerline Rd, Miami",
    category: "Electric",
    representative: "Michael Smith",
    email: "michael.smith@example.com",
    photoUrl: "/img/electrician.jpg",
  },
  {
    companyName: "Emily Davis Child Care",
    description: "Quality child care services by Emily Davis.",
    address: "101 Main St, Houston",
    category: "Repair",
    representative: "Emily Davis",
    email: "emily.davis@example.com",
    photoUrl: "/img/babysitting.jpg",
  },
  {
    companyName: "Robert Brown Math Tutoring",
    description: "Expert math tutoring services by Robert Brown.",
    address: "202 Study Ln, Boston",
    category: "Repair",
    representative: "Robert Brown",
    email: "robert.brown@example.com",
    photoUrl: "/img/tutoring.jpg",
  },
  {
    companyName: "Jessica Williams Moving",
    description: "Efficient furniture moving services by Jessica Williams.",
    address: "303 Transit Ave, San Francisco",
    category: "Shifting",
    representative: "Jessica Williams",
    email: "jessica.williams@example.com",
    photoUrl: "/img/moving.jpg",
  },
  {
    companyName: "David Miller Painting",
    description: "High-quality house painting services by David Miller.",
    address: "404 Color Blvd, Seattle",
    category: "Painting",
    representative: "David Miller",
    email: "david.miller@example.com",
    photoUrl: "/img/painting.jpg",
  },
];

shuffleArray(companies);
