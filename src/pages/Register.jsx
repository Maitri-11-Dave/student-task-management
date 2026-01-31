import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="form-container">
        {/* Page Title*/}
        <h1 className="form-title">Register</h1>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name "
            />
          </div>

          {/*Email*/}
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your Email Address"
            />
          </div>

          {/*Mobile*/}
          <div className="form-group">
            <label htmlFor="phone numberx">Mobile Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your Mobile Number"
            />
          </div>

          {/*password*/}
          <div className="form-group">
            <label htmlFor="password">Mobile Number</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create your password"
            />
          </div>

          {/*submit button*/}
          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        {/*link to log in page*/}
      </div>
    </>
  );
};
export default Register;
