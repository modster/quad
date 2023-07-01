import { useEffect } from "npm:react";
import confetti from "npm:canvas-confetti";

const App = () => {
  useEffect(() => {
    confetti();
  }, []);

  return (
    <div>
      <h1>Hello React! ⚛️</h1>
      <p>Building user interfaces.</p>
    </div>
  );
};

export default App;
