// // // import React from "react";

// // // const UserRegister = () => {
// // //   return <div>User Registration</div>;
// // // };

// // // export default UserRegister;
// // import React, { useState } from "react";
// // import axios from "axios";
// // import Joi from "joi";

// // const UserRegister = () => {
// //   const [formData, setFormData] = useState({
// //     username: "",
// //     fname: "",
// //     lname: "",
// //     email: "",
// //     mobile: "",
// //     location: "",
// //     password: "",
// //   });

// //   const [errors, setErrors] = useState({});
// //   const [successMessage, setSuccessMessage] = useState("");

// //   const schema = Joi.object({
// //     username: Joi.string().min(3).max(20).required(),
// //     fname: Joi.string().min(3).max(20),
// //     lname: Joi.string().min(3).max(20),
// //     email: Joi.string().email({ tlds: { allow: false }}).max(50).required(),
// //     mobile: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
// //     location: Joi.string().required(),
// //     password: Joi.string().min(6).required(),
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setErrors({});
// //     setSuccessMessage("");
    
// //     const { error } = schema.validate(formData, { abortEarly: false });
// //     if (error) {
// //       const newErrors = {};
// //       error.details.forEach((detail) => {
// //         newErrors[detail.path[0]] = detail.message;
// //       });
// //       setErrors(newErrors);
// //       return;
// //     }

// //     try {
// //       const response = await axios.post("/api/auth/register", formData);
// //       setSuccessMessage("User registered successfully!");
// //     } catch (err) {
// //       setErrors({ apiError: err.response?.data?.message || "Registration failed" });
// //     }
// //   };

// //   return (
// //     <div className="flex justify-center items-center min-h-screen bg-gray-100">
// //       <div className="bg-white p-8 rounded-lg shadow-md w-96">
// //         <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
// //         {successMessage && <p className="text-green-600">{successMessage}</p>}
// //         {errors.apiError && <p className="text-red-600">{errors.apiError}</p>}
// //         <form onSubmit={handleSubmit}>
// //           {Object.keys(formData).map((key) => (
// //             <div key={key} className="mb-4">
// //               <label className="block text-sm font-medium mb-1">{key}</label>
// //               <input
// //                 type={key === "password" ? "password" : "text"}
// //                 name={key}
// //                 value={formData[key]}
// //                 onChange={handleChange}
// //                 className="w-full px-3 py-2 border rounded-md"
// //               />
// //               {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
// //             </div>
// //           ))}
// //           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
// //             Register
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UserRegister;

// import React, { useState } from "react";
// import axios from "axios";
// import { TextField, Button, Container, Typography, Box } from "@mui/material";

// const UserRegister = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     fname: "",
//     lname: "",
//     email: "",
//     mobile: "",
//     location: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/register", formData);
//       alert("Registration Successful!");
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error registering user:", error.response?.data || error.message);
//       alert("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 4, p: 3, border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
//         <Typography variant="h5" align="center" gutterBottom>
//           User Registration
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField fullWidth label="Username" name="username" value={formData.username} onChange={handleChange} required margin="normal" />
//           <TextField fullWidth label="First Name" name="fname" value={formData.fname} onChange={handleChange} margin="normal" />
//           <TextField fullWidth label="Last Name" name="lname" value={formData.lname} onChange={handleChange} margin="normal" />
//           <TextField fullWidth label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required margin="normal" />
//           <TextField fullWidth label="Mobile" name="mobile" type="text" value={formData.mobile} onChange={handleChange} required margin="normal" />
//           <TextField fullWidth label="Location" name="location" value={formData.location} onChange={handleChange} required margin="normal" />
//           <TextField fullWidth label="Password" name="password" type="password" value={formData.password} onChange={handleChange} required margin="normal" />
//           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//             Register
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default UserRegister;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UserRegister.css'; // Assuming you have a CSS file for styling

const UserRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    location: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:1322/api/auth/register', formData);
      if (response.status === 201) {
        // alert('Registration successful! Redirecting to login...');
        navigate('/'); // Redirect to login page
      }
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default UserRegister;