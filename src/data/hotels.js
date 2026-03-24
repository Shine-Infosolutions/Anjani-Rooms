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
        category: "Standard Room",
        price: 799,
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
        category: "Deluxe Room",
        price: 1299,
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
        price: 2199,
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
        category: "Standard Room",
        price: 699,
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
        category: "Deluxe Room",
        price: 1099,
        amenities: ["AC", "WiFi", "TV", "Geyser"],
        images: [
          "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80",
          "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=600&q=80",
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
        category: "Standard Room",
        price: 749,
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
        category: "Deluxe Room",
        price: 1199,
        amenities: ["AC", "WiFi", "TV", "Geyser", "Temple View"],
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
export const categories = ["All", ...new Set(hotels.flatMap((h) => h.rooms.map((r) => r.category)))];

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
