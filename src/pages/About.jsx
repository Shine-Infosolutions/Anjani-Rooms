import { Link } from "react-router-dom";

export default function About() {
  const brands = [
    { name: "Chokhi Dhani", note: "Five Star Property" },
    { name: "Radisson", note: "Mahipalpur, Delhi" },
    { name: "The Yellow Chilli", note: "by Sanjeev Kapoor" },
    { name: "Lords of Drinks", note: "" },
    { name: "Fortune Group", note: "Park Plaza, Noida Sector 58" },
    { name: "Brys Fort Hotel", note: "Ansal Group of Hotels" },
  ];

  const specializations = [
    "Guest experience & service excellence",
    "Banquet & event management",
    "Food & beverage operations",
    "Team leadership & training",
    "Hotel pre-opening & setup",
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🏨</span>
            <span className="text-lg font-bold text-gray-900 tracking-wide">
              ANJANI<span className="text-red-500">ROOMS</span>.COM
            </span>
          </Link>
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-2xl mx-auto py-10 px-4">

        {/* Profile card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-5 text-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-2xl font-bold text-red-500 mx-auto mb-4">
            AS
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Anjani Singh</h1>
          <p className="text-sm text-red-500 font-semibold mt-1">Founder – AnjaniRooms.com</p>
          <p className="text-sm text-gray-500 mt-3 leading-relaxed">
            With over 20 years of experience in the hospitality industry, I bring deep expertise in
            hotel operations, restaurant management, banquet services, and bar management.
          </p>
        </div>

        {/* Brands */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Worked With</h2>
          <div className="flex flex-col gap-3">
            {brands.map(({ name, note }) => (
              <div key={name} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-gray-800">{name}</span>
                  {note && <span className="text-xs text-gray-400 ml-2">· {note}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">Specializations</h2>
          <div className="flex flex-col gap-3">
            {specializations.map((s) => (
              <div key={s} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                <span className="text-sm text-gray-700">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-5">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Vision</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Through AnjaniRooms.com, my vision is to deliver high-quality hospitality services,
            comfortable stays, and memorable guest experiences.
          </p>
        </div>

        {/* Quote */}
        <div className="bg-red-500 rounded-2xl p-6 text-center">
          <p className="text-white font-semibold text-base italic">
            &ldquo;Hospitality is not just service, it&rsquo;s an experience.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
