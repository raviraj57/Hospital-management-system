import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const initialData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "patient", // Default role
  };
  const [inputs, setInputs] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleRoleChange = (e) => {
    setInputs({ ...inputs, role: e.target.value });
  };

  const validate = () => {
    const { name, email, phone, password, confirmPassword } = inputs;
    const errors = {};

    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim()) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      errors.email = "Email address is invalid";

    if (!phone.trim()) errors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone)) errors.phone = "Phone number is invalid";

    if (!password) errors.password = "Password is required";
    else if (password.length < 6)
      errors.password = "Password must be at least 6 characters long";

    if (!confirmPassword)
      errors.confirmPassword = "Please confirm your password";
    else if (password !== confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      axios
        .post("http://localhost:5000/register", inputs)
        .then(() => {
          alert("Registration successful!");
          navigate("/login");
        })
        .catch((error) => {
          if (
            error.response?.status === 400 &&
            error.response.data.message === "Email already exists"
          ) {
            alert("Email already exists. Please use a different email.");
          } else {
            console.error("Registration error:", error);
            alert("Something went wrong. Please try again.");
          }
        });
    } else {
      setErrors(errors);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/894125638/photo/stethoscope-on-the-table.jpg?s=612x612&w=0&k=20&c=JgYfIxI_Eo7dddZuePNGRnTrEJDOslL1x92k60IqkUc=')`,
      }}
    >
      <form
        className="w-full max-w-md p-8 bg-blue-100 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Register As...
        </h1>
        <hr className="mb-6 border-gray-900" />

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4 ml-10">
            {["patient", "doctor", "admin", "others"].map((role, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={inputs.role === role}
                  onChange={handleRoleChange}
                  className="mr-2 transform scale-150"
                />
                <label className="text-gray-700 capitalize">{role}</label>
              </div>
            ))}
          </div>
        </div>

        {["name", "email", "phone", "password", "confirmPassword"].map(
          (field, idx) => (
            <div key={idx} className="mb-4">
              <label className="block mb-2 font-bold text-gray-700 capitalize">
                {field.replace("confirmPassword", "Confirm Password")}
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  value={inputs[field]}
                  onChange={handleChange}
                  className={`w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${
                    errors[field]
                      ? "border-red-500 focus:ring-red-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                {errors[field] && (
                  <p className="text-sm text-red-500">{errors[field]}</p>
                )}
              </label>
            </div>
          )
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
