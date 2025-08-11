import React, { useContext } from "react";
import { BrainStateContext } from "../context/BrainStateContext";

export default function Home() {
  const { state } = useContext(BrainStateContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to NeuRock</h1>
      <p style={styles.subtitle}>
        Your selected brain state: <strong>{state || "Not selected"}</strong>
      </p>
      <div style={styles.card}>
        <p>Here’s where we’ll display features, exercises, and visuals based on your brain state.</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0d0d0d",
    color: "#fff",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  card: {
    background: "#1a1a1a",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255,255,255,0.1)",
  },
};
