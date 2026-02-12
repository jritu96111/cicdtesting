import React, { useState } from "react";


export default function Parent() {
  const [name, setName] = useState("AKASH");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Parent Component</h2>
      <p>Name: {name}</p>

      <button onClick={() => setName("Aman")}>Change Name</button>

      {/* Passing props to child */}
      <Child name={name} />
    </div>
  );
}

// Child Component
function Child(props:any) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "10px" }}>
      <h3>Child Component</h3>
      <p>Name: {props.name}</p>
    </div>
  );
}

// Parent Component