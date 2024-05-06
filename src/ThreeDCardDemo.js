import React from "react";
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
    imageUrl: img1,
    linkUrl: "https://twitter.com/mannupaaji",
    linkText: "Try now →",
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: img2,
    linkUrl: "https://twitter.com/mannupaaji",
    linkText: "Try now →",
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: img3,
    linkUrl: "https://twitter.com/mannupaaji",
    linkText: "Try now →",
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: img4,
    linkUrl: "https://twitter.com/mannupaaji",
    linkText: "Try now →",
  },
  {
    title: "Make things float in air",
    description: "Hover over this card to unleash the power of CSS perspective",
    imageUrl: img5,
    linkUrl: "https://twitter.com/mannupaaji",
    linkText: "Try now →",
  },
  // Add more card data objects here if needed
];

const ThreeDCardDemo = () => {
  return (
    <> 
    <h1><b>Photographs Gallery</b></h1>
    <div className="flex justify-center items-center flex-wrap">
      {cardsData.map((card, index) => (
        <CardContainer className="inter-var" key={index}>
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title} 
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.imageUrl} 
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
            {card.description}
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {/* <CardItem
                translateZ={20}
                as={Link}
                href={card.linkUrl} 
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {card.linkText} 
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem> */}
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
    </>
  );
};

export default ThreeDCardDemo;
