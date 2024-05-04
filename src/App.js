import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["👋HEHE!👋"]);
  const particlesOptions = {
    preset: "fireworks",
    particles: {
      number: {
        value: 5000, // Ubah nilai ini untuk mengurangi jumlah partikel
        density: {
          enable: true,
          value_area: 800,
        },
      },
    },
  };
  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const timeLeft = () => {
    const newYearDate = new Date("November 11, 2024 00:00:00").getTime();
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
            delaySpeed={500}
          />
        </span>
        <div className="text-white font-bold text-2xl z-50 ">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Selamat",
                "Bertambah",
                "Usia, Kiky",
                "✨2024-24-11✨",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
