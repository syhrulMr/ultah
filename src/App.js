import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["👋Bye Umur Belasan👋"]);

  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const timeLeft = () => {
    const newYearDate = new Date("May 4, 2024 21:45:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <span className="text-white font-bold text-4xl text-center px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursor
            cursorStyle={"_"}
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        <div className="text-white font-bold text-2xl z-50 ">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat",
                "Bertambah",
                "Usia, AllU",
                "✨2024-05-05✨",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
