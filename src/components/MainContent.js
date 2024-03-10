import React from "react";
import Card from "./Card";
import data from "../data";

export default function MainContent() {
  const cards = data.map((item) => {
    return (
      <div className="wrapper" key={item.id}>
        <Card {...item} />
      </div>
    );
  });
  return <div>{cards}</div>;
}
