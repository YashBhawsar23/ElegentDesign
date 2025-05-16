// import { useState } from "react";

// const Pixelated = () => {
//   // Array of image paths - assuming these are in the public folder
//   const images = [
//     "/images/image1.jpg",
//     "/images/image2.jpg",
//     "/images/image3.jpg",
//     "/images/image4.jpg",
//     "/images/image5.jpg",
//     "/images/image6.jpg",
//     "/images/image7.jpg",
//     "/images/image8.jpg",
//   ];

//   // Using placeholder images since we don't have actual images
//   const placeholderImages = [
//     "/images/image1.jpg",
//     "/images/image2.jpg",
//     "/images/image3.jpg",
//     "/images/image4.jpg",
//     "/images/image5.jpg",
//     "/images/image6.jpg",
//     "/images/image7.jpg",
//     "/images/image8.jpg",
//   ];

//   // State to keep track of current image index
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to handle button click
//   const changeBackground = () => {
//     // Update to next image index, loop back to start if at the end
//     setCurrentImageIndex(
//       (prevIndex) => (prevIndex + 1) % placeholderImages.length
//     );
//   };
//   return (
//     <div
//       className="h-screen w-full bg-cover bg-center flex items-center justify-center text-white transition-all duration-500"
//       style={{
//         backgroundImage: `url(${placeholderImages[currentImageIndex]})`,
//       }}
//     >
//       {/* <div className="bg-black bg-opacity-50 p-6 rounded-lg"> */}
//       <button
//         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded mt-4 transition-colors duration-300"
//         onClick={changeBackground}
//       >
//         Render
//       </button>
//       {/* </div> */}
//     </div>
//   );
// };

// export default Pixelated;

import { useState } from "react";

const Pixelated = () => {
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg",
    "/images/image10.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload audio
  const clickSound = new Audio("/sounds/click.mp3");

  const changeBackground = () => {
    // Play sound
    clickSound.play();

    // Change image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-start pt-16 text-white transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition-colors duration-300"
        onClick={changeBackground}
      >
        Render
      </button>
    </div>
  );
};

export default Pixelated;
