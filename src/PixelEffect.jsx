// import { useEffect, useRef, useState } from "react";

// const PixelatedCanvas = () => {
//   const canvasRef = useRef(null);
//   const clickSoundRef = useRef(new Audio("/sounds/click.mp3"));
//   const [pixelationStep, setPixelationStep] = useState(0);

//   const pixelSizes = [6, 12, 20, 40, 80, 160, 320, 640, 1280]; // From highly pixelated to clear

//   const drawPixelated = (pixelSize) => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const img = new Image();
//     img.src = "/images/image8.jpg"; // High-res original image
//     img.onload = () => {
//       const width = canvas.width;
//       const height = canvas.height;

//       // Create an offscreen canvas
//       const offCanvas = document.createElement("canvas");
//       const offCtx = offCanvas.getContext("2d");

//       // Set small size to simulate pixelation
//       offCanvas.width = pixelSize;
//       offCanvas.height = pixelSize;

//       // Draw scaled-down image on the offscreen canvas
//       offCtx.drawImage(img, 0, 0, pixelSize, pixelSize);

//       // Now disable smoothing on main canvas and scale up
//       ctx.imageSmoothingEnabled = false;
//       ctx.clearRect(0, 0, width, height);
//       ctx.drawImage(offCanvas, 0, 0, pixelSize, pixelSize, 0, 0, width, height);
//     };
//   };

//   const handleClick = () => {
//     clickSoundRef.current.play();

//     // if (pixelationStep < pixelSizes.length - 1) {
//     //   setPixelationStep((prev) => prev + 1);
//     // }
//     setPixelationStep((prev) => (prev + 1) % pixelSizes.length);
//   };

//   useEffect(() => {
//     drawPixelated(pixelSizes[pixelationStep]);
//   }, [pixelationStep]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     drawPixelated(pixelSizes[pixelationStep]);
//   }, []);

//   return (
//     <div className="w-full h-full relative bg-black">
//       <canvas ref={canvasRef} className="w-full h-full block" />

//       <button
//         onClick={handleClick}
//         className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-600 hover:bg-gray-900 text-white px-6 py-2 rounded"
//       >
//         Render
//       </button>
//     </div>
//   );
// };

// export default PixelatedCanvas;

import { useEffect, useRef, useState } from "react";

const PixelatedCanvas = () => {
  const canvasRef = useRef(null);
  const clickSoundRef = useRef(new Audio("/sounds/click.mp3"));
  const [pixelationStep, setPixelationStep] = useState(-1); // Start with black screen

  const pixelSizes = [6, 12, 20, 40, 80, 160, 320, 540, 1080]; // Increasing clarity

  const drawPixelated = (pixelSize) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "/images/image8.jpg"; // High-res original image
    img.onload = () => {
      const width = canvas.width;
      const height = canvas.height;

      const offCanvas = document.createElement("canvas");
      const offCtx = offCanvas.getContext("2d");

      offCanvas.width = pixelSize;
      offCanvas.height = pixelSize;

      offCtx.drawImage(img, 0, 0, pixelSize, pixelSize);

      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(offCanvas, 0, 0, pixelSize, pixelSize, 0, 0, width, height);
    };
  };

  const handleClick = () => {
    clickSoundRef.current.play();
    setPixelationStep((prev) => (prev + 1) % pixelSizes.length);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (pixelationStep >= 0) {
      drawPixelated(pixelSizes[pixelationStep]);
    }
  }, [pixelationStep]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initial black background
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <div className="w-full h-full relative bg-black">
      <canvas ref={canvasRef} className="w-full h-full block" />

      <button
        onClick={handleClick}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-gray-600 hover:bg-gray-900 text-white px-10 py-2 rounded"
      >
        Render
      </button>
    </div>
  );
};

export default PixelatedCanvas;
