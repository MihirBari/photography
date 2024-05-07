import React from "react";
import  LayoutGrid  from "./component/ui/layout-grid.jsx";
import img1 from "./image/DSC04440.jpg"
import img2 from "./image/DSC04443.jpg"
import img3 from "./image/DSC04446.jpg"
import img4 from "./image/DSC04455_1.jpg"

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: img1,
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail:img3,
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail:img4,
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail:img2,
  },
];
