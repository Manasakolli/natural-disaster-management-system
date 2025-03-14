import React from "react";
import { useNavigate } from "react-router-dom";

const DonorChoice = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "40px" }}>Donor Section</h1>
      <h2 style={{ color: "#333" }}>Please choose an option:</h2>
      <div style={{ marginTop: "20px" }}>
        <button
          style={buttonStyle}
          onClick={() => navigate("/Login")}
        >
          Donor Login
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate("/SignUp")}
        >
          Donor Sign Up
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "18px",
  margin: "10px",
  cursor: "pointer",
  backgroundColor: "#6a11cb",
  color: "white",
  border: "none",
  borderRadius: "5px",
  transition: "background-color 0.3s ease",
};

export default DonorChoice;
