import { useState } from "react";
import api from "../api";

export default function AdminSettings() {
  const [form, setForm] = useState({ currentPassword: "", newPassword: "", confirm: "" });
  const [msg, setMsg] = useState({ text: "", error: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.newPassword !== form.confirm)
      return setMsg({ text: "New passwords do not match", error: true });
    setLoading(true);
    const res = await api.changePassword(form.currentPassword, form.newPassword);
    setLoading(false);
    if (res.message === "Password updated successfully") {
      setMsg({ text: "Password updated successfully ✅", error: false });
      setForm({ currentPassword: "", newPassword: "", confirm: "" });
    } else {
      setMsg({ text: res.message || "Failed", error: true });
    }
  };

  return (
    <div className="max-w-md">
      <h1 className="text-xl font-bold text-gray-900 mb-6">Settings</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold text-gray-800 mb-4">Change Password</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {["currentPassword", "newPassword", "confirm"].map((field) => (
            <div key={field}>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                {field === "currentPassword" ? "Current Password" : field === "newPassword" ? "New Password" : "Confirm New Password"}
              </label>
              <input type="password" required value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-100" />
            </div>
          ))}
          {msg.text && <p className={`text-sm ${msg.error ? "text-red-500" : "text-green-600"}`}>{msg.text}</p>}
          <button type="submit" disabled={loading}
            className="bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-bold py-2.5 rounded-lg transition-colors">
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>
    </div>
  );
}
