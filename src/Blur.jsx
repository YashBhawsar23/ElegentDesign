import { useState, useRef } from "react";

const BlurEffect = () => {
  const maxSteps = 9; // Number of steps until full clarity
  const [step, setStep] = useState(0);
  const clickSoundRef = useRef(new Audio("/sounds/click.mp3"));

  // Blur decreases with each step (start from blur(16px) to blur(0px))
  const blurLevels = [16, 14, 12, 10, 8, 6, 4, 2, 0];

  const handleClick = () => {
    clickSoundRef.current.play();

    // Increase clarity one step at a time, max to last level
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : prev));
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-start pt-16 bg-black">
      <div
        className="w-full h-full bg-center bg-cover transition-all duration-700"
        style={{
          backgroundImage: `url(/images/image8.jpg)`,
          filter: `blur(${blurLevels[step]}px)`,
        }}
      ></div>

      <button
        className="absolute top-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300"
        onClick={handleClick}
      >
        Enhance
      </button>
    </div>
  );
};

export default BlurEffect;
