import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col border border-purple-400 rounded-md  w-72 h-72">
      <img
        src="https://cdn.shopify.com/s/files/1/2018/8867/files/play-button.png?422609932170209736"
        className="h-44"
      />
      <div className="text-white">Title</div>
      <div className="text-white">Descriptiom</div>
      <div className="text-white">Created At</div>
    </div>
  );
};

export default Card;
