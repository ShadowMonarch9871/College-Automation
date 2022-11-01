import React from "react";

export default function form() {
  return (
    <>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <form
          className="border shadow p-3 rounded"
          style={{
            width: "400px",
          }}
        >
          <h1 className="text-center p3">LOGIN</h1>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="mb-1">
            <label className="form-label">Select User Type:</label>
          </div>
          <select class="form-select mb-3" aria-label="Default select example">
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
          </select>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
