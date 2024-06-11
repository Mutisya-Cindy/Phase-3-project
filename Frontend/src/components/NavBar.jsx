import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand fw-bold">PlumberMap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="/plumbers" className="nav-link">Find Plumbers</a></li>
            <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
            <li className="nav-item"><a href="/register" className="nav-link">Book</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">Create a Profile</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
