import React, { useState } from "react";
import Books from "../../assets/book.jpg";
import Library from "../../assets/library.jpg";
import Campus1 from "../../assets/campus_1.jpeg";
import Campus2 from "../../assets/campus_2.jpeg";
import Campus3 from "../../assets/campus_3.jpeg";

export const Home = () => {
  const option = [
    {
      title: "Library",
      image: Library,
    },
    {
      title: "Books",
      image: Books,
    },
    {
      title: "Campus 1",
      image: Campus1,
    },
    {
      title: "Campus 2",
      image: Campus2,
    },
    {
      title: "Campus 3",
      image: Campus3,
    },
  ];
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <img
        src={option[1].image}
        alt="campus"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};
