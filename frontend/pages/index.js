import { useEffect, useState } from "react";

export default function Home() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("https://YOUR-BACKEND-URL.onrender.com/predictions")
      .then(res => res.json())
      .then(data => setMatches(data));
  }, []);

  return (
    <div style={{ padding: 20, background: "#0f172a", minHeight: "100vh", color: "white" }}>
      <h1>🎾 AI Tennis Dashboard</h1>

      <h2>🔥 Top Picks</h2>
      {matches.slice(0, 3).map((m, i) => (
        <div key={i} style={{ background: "green", padding: 10, margin: 5 }}>
          {m.playerA} vs {m.playerB} — {m.probability}%
        </div>
      ))}

      <h2>📊 All Matches</h2>
      {matches.map((m, i) => (
        <div key={i} style={{ background: "#1e293b", padding: 15, margin: 10 }}>
          <h3>{m.playerA} vs {m.playerB}</h3>
          <p>Win Probability: {m.playerA} {m.probability}%</p>
          <p>Confidence: {m.confidence}</p>
          {m.tag && <p>⚡ {m.tag}</p>}
        </div>
      ))}
    </div>
  );
}
