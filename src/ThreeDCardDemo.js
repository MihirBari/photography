import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./component/ui/3d-card";
import "./ThreeDCardDemo.css";
import img1 from "./image/flower.jpg"
import img2 from "./image/iceCap.jpg"
import img3 from "./image/river.jpg"
import img4 from "./image/rose.jpg"
import img5 from "./image/tree.jpg"

const cardsData = [
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrls: [img1, img2, img3],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, metus et ullamcorper ultrices, urna justo mattis neque, nec condimentum orci ex eget justo."
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrls: [img1, img2, img3],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, metus et ullamcorper ultrices, urna justo mattis neque, nec condimentum orci ex eget justo."
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrls: [img1, img2, img3],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, metus et ullamcorper ultrices, urna justo mattis neque, nec condimentum orci ex eget justo."
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrls: [img4, img2, img3],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, metus et ullamcorper ultrices, urna justo mattis neque, nec condimentum orci ex eget justo."
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrls: [img5],
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula, metus et ullamcorper ultrices, urna justo mattis neque, nec condimentum orci ex eget justo."
  },
];

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full">
      <img src={images[currentImageIndex]} className="w-full h-full object-cover" alt="slider" />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-between items-center">
        <button onClick={previousImage} className="px-3 py-1  text-white absolute left-0 transform -translate-y-1/2">
          &lt; {/* Previous arrow */}
        </button>
        <button onClick={nextImage} className="px-3 py-1  text-white absolute right-0 transform -translate-y-1/2">
          &gt; {/* Next arrow */}
        </button>
      </div>
    </div>
  );
};

const ThreeDCardDemo = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpansion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <> 
    <h1><b>Photographs Gallery</b></h1>
    <div className="flex justify-center items-center flex-wrap">
      {cardsData.map((card, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              {card.title} {/* Title */}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              {card.imageUrls && card.imageUrls.length > 0 ? (
                <ImageSlider images={card.imageUrls} />
              ) : (
                <div>No images available</div>
              )}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {card.description}
            </CardItem>
            {expandedIndex === index && (
              <CardItem as="div" className="mt-2">
                {card.content}
              </CardItem>
            )}
            <div className="flex justify-center items-center mt-4">
              <button onClick={() => toggleExpansion(index)} className="text-blue-500">
                {expandedIndex === index ? "Hide Content" : "Show Content"}
              </button>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </>
  );
};

export default ThreeDCardDemo;
