import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/feauters/authSlice";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    });

    const { loading, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (loading === "success") {
            navigate("/login");
        }
    }, [loading, navigate]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(form)); // FIXED
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center text-white">
            <h1 className="text-3xl mb-4">Create an Account</h1>

            <form
                onSubmit={handleSubmit}
                className="p-8 w-[400px] flex flex-col gap-4 bg-gray-800 rounded-xl"
            >
                <input
                    className="h-12 rounded-lg border-2 border-white px-3 bg-transparent"
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />

                <input
                    className="h-12 rounded-lg border-2 border-white px-3 bg-transparent"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className="h-12 rounded-lg border-2 border-white px-3 bg-transparent"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />

                {error && (
                    <p className="text-red-400 text-sm text-center">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-white text-black font-bold text-xl p-2 rounded-xl"
                    disabled={loading === "loading"}
                >
                    {loading === "loading" ? "Creating Account..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
}
