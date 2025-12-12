import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/feauters/authSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });

  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(form));
    setForm({ email: "", password: "" });
  };

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl mb-4">Log In</h1>

      <form
        onSubmit={handleLogin}
        className="p-8 w-[400px] flex flex-col gap-4 bg-gray-800 rounded-xl"
      >
        <input
          className="h-12 rounded-lg border-2 border-white px-3 bg-transparent"
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handlechange}
          required
        />

        <input
          className="h-12 rounded-lg border-2 border-white px-3 bg-transparent"
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handlechange}
          required
        />

        {error && (
          <p className="text-red-400 text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-white text-black font-bold text-xl p-2 rounded-xl"
          disabled={loading === "loading"}
        >
          {loading === "loading" ? "Logging in..." : "Login"}
        </button>

        {/* ---------- Signup Button Added Below ---------- */}
        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="w-full bg-gray-200 text-black font-semibold p-2 rounded-xl mt-3"
        >
          Create Account
        </button>
        {/* ------------------------------------------------ */}
      </form>
    </div>
  );
}
