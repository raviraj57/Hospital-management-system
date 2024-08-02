import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Default role
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role, // Include selected role in login request
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.user._id); // Example: storing user ID
        alert("Login successful");
        navigate("/"); // Navigate to home page or any other route
      } else {
        alert(data.message || "Please check your username, password, and role");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover"
      style={{
        backgroundImage: `url('https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip')`,
      }}
    >
      <div className="w-full max-w-md p-8 bg-blue-100 rounded-lg shadow-lg lg:ml-96 md:mt-48">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-700">
          Login As...
        </h1>
        <hr className="mb-6 border-gray-900" />

        <div className="mb-4">
          <div className="grid grid-cols-2 gap-4 ml-10">
            {["patient", "doctor", "admin", "others"].map((roleOption, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value={roleOption}
                  checked={role === roleOption}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2 transform scale-150"
                />
                <label className="text-gray-700 capitalize">{roleOption}</label>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={loginUser} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-center">
            <input
              type="submit"
              value="Login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            />
          </div>
        </form>

        <p className="mt-4 text-center text-gray-600">
          If you have not registered,{" "}
          <span
            onClick={() => navigate("/register")}
            className="font-bold text-red-600 cursor-pointer hover:underline"
          >
            register here
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
