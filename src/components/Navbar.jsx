import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Mobiles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Electronics
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Clothing
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
