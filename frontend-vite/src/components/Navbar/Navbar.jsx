import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        width: "100%",
        padding: "15px 40px",
        background: "#a063c3ff",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0 }}>My Logo</h2>

      {/* Menu Items */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "25px",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>About</li>
        <li style={{ cursor: "pointer" }}>Contact</li>
        <li style={{ cursor: "pointer" }}>Cart</li>
      </ul>

      {/* Login Button */}
      <button
        style={{
          padding: "8px 20px",
          background: "#6e1cc6ff",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
