import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Hotel, MapPin, CalendarDays, Menu, X, SlidersHorizontal, Phone, MessageCircle, Mail, Ban } from "lucide-react";
import api from "./admin/api";
import RoomCard from "./components/RoomCard";

const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80",
  "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1400&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1400&q=80",
];

function isRoomAvailable(room, checkIn, checkOut) {
  if (!checkIn || !checkOut) return true;
  if (!room.availableFrom || !room.availableTo) return true; // no window set = always available
  const ci = new Date(checkIn).setHours(0, 0, 0, 0);
  const co = new Date(checkOut).setHours(0, 0, 0, 0);
  const af = new Date(room.availableFrom).setHours(0, 0, 0, 0);
  const at = new Date(room.availableTo).setHours(0, 0, 0, 0);
  return ci >= af && co <= at;
}

export default function App() {
  const [allRooms, setAllRooms] = useState([]);
  const [locations, setLocations] = useState(["All"]);
  const [categories, setCategories] = useState(["All"]);
  const [activeLocation, setActiveLocation] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [heroIndex, setHeroIndex] = useState(0);
  const [roomsLoading, setRoomsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroImages.length), 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    api.getRooms().then((data) => {
      const rooms = Array.isArray(data) ? data : [];
      setAllRooms(rooms);
      setLocations(["All", ...new Set(rooms.map((r) => r.location))]);
      setRoomsLoading(false);
    });
    api.getCategories().then((data) => {
      if (Array.isArray(data))
        setCategories(["All", ...data.map((c) => c.name)]);
    });
  }, []);

  const nights =
    checkIn && checkOut
      ? Math.round((new Date(checkOut) - new Date(checkIn)) / 86400000)
      : 0;

  const locationCategoryFiltered = allRooms.filter(
    (r) =>
      (activeLocation === "All" || r.location === activeLocation) &&
      (activeCategory === "All" || r.category === activeCategory)
  );

  const datesSelected = checkIn && checkOut;
  const available = datesSelected
    ? locationCategoryFiltered.filter((r) => isRoomAvailable(r, checkIn, checkOut))
    : locationCategoryFiltered;
  const unavailableCount = datesSelected ? locationCategoryFiltered.length - available.length : 0;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 font-sans">

      {/* ── Header ── */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hotel className="w-6 h-6 text-red-500" />
            <span className="text-lg font-bold text-gray-900 tracking-wide">
              ANJANI<span className="text-red-500">ROOMS</span>.COM
            </span>
          </div>
          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6">
            <a href="#rooms" className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">Hotels</a>
            <a href="#rooms" className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">Offers</a>
            <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">About</Link>
          </nav>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenu((v) => !v)}
          >
            {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3">
            <a href="#rooms" onClick={() => setMobileMenu(false)} className="text-sm font-medium text-gray-700 hover:text-red-500">Hotels</a>
            <a href="#rooms" onClick={() => setMobileMenu(false)} className="text-sm font-medium text-gray-700 hover:text-red-500">Offers</a>
            <Link to="/about" onClick={() => setMobileMenu(false)} className="text-sm font-medium text-gray-700 hover:text-red-500">About</Link>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <div className="relative min-h-[380px] md:min-h-[440px] flex items-center overflow-hidden">
        {/* Slideshow */}
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/75" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-10 md:py-14 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Find Your Perfect Room
          </h1>
          <p className="text-sm md:text-base text-white/80 mb-1 drop-shadow">
            Comfortable stays across Varanasi, Prayagraj & Ayodhya
          </p>
          <p className="text-base md:text-lg font-semibold text-yellow-300 mb-7 drop-shadow italic">
            &ldquo;Yaha Nahi To Kahi Nahi&rdquo;
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
            {/* Location */}
            <div className="flex items-center gap-3 px-4 py-3 flex-1 border-b md:border-b-0 md:border-r border-gray-100">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div className="flex flex-col text-left">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Location</label>
                <select
                  value={activeLocation}
                  onChange={(e) => setActiveLocation(e.target.value)}
                  className="text-sm font-semibold text-gray-900 bg-transparent outline-none cursor-pointer"
                >
                  {locations.map((l) => (
                    <option key={l} value={l}>{l === "All" ? "All Locations" : l}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Check-in */}
            <div className="flex items-center gap-3 px-4 py-3 flex-1 border-b md:border-b-0 md:border-r border-gray-100">
              <CalendarDays className="w-5 h-5 text-gray-400" />
              <div className="flex flex-col text-left">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Check-in</label>
                <input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => { setCheckIn(e.target.value); if (checkOut && checkOut <= e.target.value) setCheckOut(""); }}
                  className="text-sm font-semibold text-gray-900 bg-transparent outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* Check-out */}
            <div className="flex items-center gap-3 px-4 py-3 flex-1 border-b md:border-b-0 border-gray-100">
              <CalendarDays className="w-5 h-5 text-gray-400" />
              <div className="flex flex-col text-left">
                <label className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Check-out</label>
                <input
                  type="date"
                  min={checkIn || today}
                  value={checkOut}
                  disabled={!checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="text-sm font-semibold text-gray-900 bg-transparent outline-none cursor-pointer disabled:text-gray-300"
                />
              </div>
            </div>

            {/* Nights pill + Search btn */}
            <div className="flex items-center gap-2 px-3 py-2 md:py-0">
              {nights > 0 && (
                <span className="bg-orange-50 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                  {nights}N
                </span>
              )}
              <button
                onClick={() => { /* filtering is live */ }}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === heroIndex ? "bg-white scale-125" : "bg-white/40"}`}
            />
          ))}
        </div>
      </div>

      {/* ── Features Bar ── */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { icon: Hotel, text: "Top 50 Hotels" },
            { icon: MapPin, text: "Clean Rooms" },
            { icon: CalendarDays, text: "Fast Booking" },
            { icon: Phone, text: "Best Hospitality" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Icon className="w-4 h-4 text-red-400" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto w-full px-3 md:px-4 py-4 flex flex-col md:flex-row gap-5 items-start">

        {/* ── Mobile Filter Toggle ── */}
        <div className="md:hidden flex gap-2 w-full">
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm flex-1 justify-center"
          >
            <SlidersHorizontal className="w-4 h-4" /> {showFilters ? "Hide Filters" : "Filters"}
            {(activeCategory !== "All" || activeLocation !== "All") && (
              <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">●</span>
            )}
          </button>
          {(activeCategory !== "All" || activeLocation !== "All") && (
            <button
              onClick={() => { setActiveLocation("All"); setActiveCategory("All"); }}
              className="bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-xs font-semibold text-red-500 shadow-sm"
            >
              Clear
            </button>
          )}
        </div>

        {/* ── Sidebar ── */}
        <aside className={`w-full md:w-56 flex-shrink-0 bg-white rounded-xl shadow-sm overflow-hidden md:sticky md:top-20 md:block ${showFilters ? "block" : "hidden"}`}>
          <div className="px-4 py-4 border-b border-gray-100">
            <h3 className="text-sm font-bold text-gray-900 pb-2 border-b-2 border-red-500 inline-block mb-3">
              Popular Filters
            </h3>
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Room Category</p>
            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-red-500">
                  <input
                    type="radio"
                    name="category"
                    checked={activeCategory === cat}
                    onChange={() => { setActiveCategory(cat); setShowFilters(false); }}
                    className="accent-red-500 w-4 h-4 cursor-pointer"
                  />
                  {cat === "All" ? "All Categories" : cat}
                </label>
              ))}
            </div>
          </div>
          <div className="px-4 py-4">
            <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-2">Location</p>
            <div className="flex flex-col gap-2">
              {locations.map((loc) => (
                <label key={loc} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-red-500">
                  <input
                    type="radio"
                    name="location"
                    checked={activeLocation === loc}
                    onChange={() => { setActiveLocation(loc); setShowFilters(false); }}
                    className="accent-red-500 w-4 h-4 cursor-pointer"
                  />
                  {loc === "All" ? "All Locations" : loc}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* ── Results ── */}
        <main className="flex-1 min-w-0">
          {/* Results header */}
          <div className="bg-white rounded-xl shadow-sm px-4 py-3 mb-3 flex flex-wrap items-center justify-between gap-2">
            <div>
              <h2 className="text-base font-bold text-gray-900">
                {activeLocation === "All" ? "All Locations" : activeLocation}
                {activeCategory !== "All" ? ` · ${activeCategory}` : ""}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">
                {available.length} room{available.length !== 1 ? "s" : ""} found
                {nights > 0 ? ` · ${nights} night${nights > 1 ? "s" : ""}` : ""}
              </p>
            </div>
            {datesSelected && unavailableCount > 0 && (
              <span className="text-xs text-red-600 bg-red-50 px-3 py-1.5 rounded-full font-medium flex items-center gap-1">
                <Ban className="w-3.5 h-3.5" /> {unavailableCount} unavailable for these dates
              </span>
            )}
          </div>

          {/* Date prompt */}
          {!datesSelected && (
            <div className="flex items-center gap-3 bg-yellow-50 border border-dashed border-yellow-400 rounded-xl px-4 py-3 mb-3 text-sm text-yellow-700 font-medium">
              <CalendarDays className="w-4 h-4 flex-shrink-0" />
              <span>Select check-in &amp; check-out dates to check room availability</span>
            </div>
          )}

          {/* Room list */}
          {roomsLoading ? (
            <div className="bg-white rounded-xl text-center py-16 px-6 text-gray-400">Loading rooms...</div>
          ) : available.length === 0 ? (
            <div className="bg-white rounded-xl text-center py-16 px-6">
              <Hotel className="w-12 h-12 text-gray-200 mx-auto mb-3" />
              <p className="text-gray-400 text-sm mb-4">No rooms available for the selected dates and filters.</p>
              <button
                onClick={() => { setActiveLocation("All"); setActiveCategory("All"); }}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {available.map((room) => (
                <RoomCard
                  key={room._id}
                  room={room}
                  location={room.location}
                  checkIn={checkIn}
                  checkOut={checkOut}
                  nights={nights}
                />
              ))}
            </div>
          )}
        </main>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-auto bg-white border-t border-gray-200 py-6 text-center">
        <p className="text-sm font-semibold text-gray-700 mb-3">Best Hospitality Only at AnjaniRooms.com</p>
        <div className="text-xs text-gray-600 mb-3">
          <p className="font-semibold text-gray-700 mb-1">Contact Us</p>
          <p><Phone className="w-3.5 h-3.5 inline mr-1" /><a href="tel:9410686521" className="hover:text-red-500 transition-colors">Call: 9410686521</a> (12 PM – 12 AM)</p>
          <p><MessageCircle className="w-3.5 h-3.5 inline mr-1" />WhatsApp Available</p>
          <p><Mail className="w-3.5 h-3.5 inline mr-1" />Email: your@email.com</p>
        </div>
        <div className="text-xs text-gray-400 border-t border-gray-100 pt-3">
          <p className="text-gray-500"><MapPin className="w-3 h-3 inline mr-1" />Golghar, Mohaddipur, Betiahata, University, Railway Station,</p>
          <p className="text-gray-500">Gorakhnath, Medical Road, Kudaghat, Transport Nagar, Nausad — Gorakhpur</p>
        </div>
        <p className="text-xs text-gray-400 mt-3">© 2025 Anjani Rooms · All rights reserved</p>
      </footer>
    </div>
  );
}
