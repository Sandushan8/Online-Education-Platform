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
        height: "94%",
      }}
    >
      <h1
        style={{
          position: "absolute",
          top: "40%",
          left: "20%",
          textAlign: "center",
          fontSize: 60,
          color: "white",
        }}
      >
        Welcome to our Campus! <br /> Explore our Library, Books, and Campus
        Life.
      </h1>
      <img
        src={Campus1}
        alt="campus"
        style={{ width: "100vw", height: "100%", objectFit: "fill" }}
      />
    </div>
  );
};
