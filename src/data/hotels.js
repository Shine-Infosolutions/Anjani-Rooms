export const CONTACT = {
  phone: "+919876543210",
  whatsapp: "+919876543210",
};

export const hotels = [
  {
    id: 1,
    location: "Varanasi",
    rooms: [
      {
        id: 101,
        category: "Standard",
        price: 1500,
        priceWithBreakfast: 1800,
        amenities: ["AC", "WiFi", "TV"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [
          { from: "2025-07-10", to: "2025-07-14" },
          { from: "2025-07-20", to: "2025-07-22" },
        ],
      },
      {
        id: 102,
        category: "Deluxe",
        price: 2000,
        priceWithBreakfast: 2300,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Balcony"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/movie.mp4",
        bookedDates: [
          { from: "2025-07-15", to: "2025-07-18" },
        ],
      },
      {
        id: 103,
        category: "Suite",
        price: 6500,
        priceWithBreakfast: 6800,
        amenities: ["AC", "WiFi", "TV", "Geyser", "River View", "Mini Bar"],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
    ],
  },
  {
    id: 2,
    location: "Prayagraj",
    rooms: [
      {
        id: 201,
        category: "Standard",
        price: 1500,
        priceWithBreakfast: 1800,
        amenities: ["AC", "WiFi", "TV"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/movie.mp4",
        bookedDates: [
          { from: "2025-07-12", to: "2025-07-16" },
        ],
      },
      {
        id: 202,
        category: "Deluxe",
        price: 2000,
        priceWithBreakfast: 2300,
        amenities: ["AC", "WiFi", "TV", "Geyser"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
      {
        id: 203,
        category: "Super Deluxe",
        price: 2800,
        priceWithBreakfast: 3100,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Balcony"],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
    ],
  },
  {
    id: 3,
    location: "Ayodhya",
    rooms: [
      {
        id: 301,
        category: "Standard",
        price: 1500,
        priceWithBreakfast: 1800,
        amenities: ["AC", "WiFi", "TV"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/movie.mp4",
        bookedDates: [
          { from: "2025-07-18", to: "2025-07-25" },
        ],
      },
      {
        id: 302,
        category: "Deluxe",
        price: 2000,
        priceWithBreakfast: 2300,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Temple View"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
      {
        id: 303,
        category: "Executive",
        price: 3500,
        priceWithBreakfast: 3800,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Temple View", "Work Desk"],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
    ],
  },
  {
    id: 4,
    location: "Gorakhpur",
    areas: ["Golghar", "Mohaddipur", "Betiahata", "University", "Railway Station", "Gorakhnath", "Medical Road", "Kudaghat", "Transport Nagar", "Nausad"],
    rooms: [
      {
        id: 401,
        category: "Standard",
        price: 1500,
        priceWithBreakfast: 1800,
        amenities: ["AC", "WiFi", "TV"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/movie.mp4",
        bookedDates: [],
      },
      {
        id: 402,
        category: "Premium Standard",
        price: 1800,
        priceWithBreakfast: 2100,
        amenities: ["AC", "WiFi", "TV", "Geyser"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
      {
        id: 403,
        category: "Deluxe",
        price: 2000,
        priceWithBreakfast: 2300,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Balcony"],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
      {
        id: 404,
        category: "Super Deluxe",
        price: 2800,
        priceWithBreakfast: 3100,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Balcony", "City View"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/movie.mp4",
        bookedDates: [],
      },
      {
        id: 405,
        category: "Executive",
        price: 3500,
        priceWithBreakfast: 3800,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Work Desk", "City View"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
      {
        id: 406,
        category: "Super Executive",
        price: 4500,
        priceWithBreakfast: 4800,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Work Desk", "Lounge Access"],
        images: [
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
          "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
      {
        id: 407,
        category: "Suite",
        price: 6500,
        priceWithBreakfast: 6800,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Mini Bar", "City View", "Lounge Access"],
        images: [
          "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
          "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/movie.mp4",
        bookedDates: [],
      },
      {
        id: 408,
        category: "Corporate",
        price: 3200,
        priceWithBreakfast: 3500,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Work Desk", "Meeting Room Access"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        bookedDates: [],
      },
    ],
  },
];

export const locations = ["All", ...new Set(hotels.map((h) => h.location))];
export const categories = ["All", "Suite", "Super Executive", "Executive", "Super Deluxe", "Deluxe", "Premium Standard", "Standard", "Corporate"];

export function isRoomAvailable(room, checkIn, checkOut) {
  if (!checkIn || !checkOut) return true;
  const ci = new Date(checkIn);
  const co = new Date(checkOut);
  return room.bookedDates.every(({ from, to }) => {
    const bf = new Date(from);
    const bt = new Date(to);
    return co <= bf || ci >= bt;
  });
}
