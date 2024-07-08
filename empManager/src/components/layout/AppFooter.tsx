import React from "react";

export default function AppFooter() {
  return (
    <footer className="text-center text-lg-start bg-dark text-white fixed-bottom">
      <div
        className="text-center p-4"
        style={{ backgroundColor: " rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://srishti-majumder.netlify.app/"
        >
          Srishti Majumder
        </a>
      </div>
    </footer>
  );
}
