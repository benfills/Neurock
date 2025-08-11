import { useNavigate } from "react-router-dom";

export default function BrainStateSelection() {
  const navigate = useNavigate();

  const handleSelect = (state) => {
    // nanti bisa simpan state ke global store / context
    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Select Brain State</h1>
      <button onClick={() => handleSelect("Calm")}>Calm</button>
      <button onClick={() => handleSelect("Focused")}>Focused</button>
      <button onClick={() => handleSelect("Energized")}>Energized</button>
    </div>
  );
}
