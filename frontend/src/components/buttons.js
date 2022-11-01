import React from 'react'

export default function buttons() {
  return (
    <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
      >
        
    <button type="button" class="btn btn-primary btn-lg">Student</button>
    <button type="button" class="btn btn-secondary btn-lg">Teacher</button>
    </div>
  )
}
