import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert("Signup successful! Please login.");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} className="block w-full p-2 border my-2" />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full p-2 border my-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="block w-full p-2 border my-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Signup</button>
    </form>
  );
};

export default Signup;
