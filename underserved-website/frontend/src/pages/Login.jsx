import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  return (
    <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} className="block w-full p-2 border my-2" />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} className="block w-full p-2 border my-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default Login;
