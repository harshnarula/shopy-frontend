import React from "react";

export default function UserReviews() {
  return (
    <div className=" w-full mx-auto bg-[#416392]">
      <h2 className="flex justify-center items-center text-center font-bold text-xl pt-4 mb-4 text-white">User Reviews</h2>
      <hr className=" block md:hidden w-full border-[#416392] my-2 " />
      <div className="flex flex-col md:flex-row justify-evenly items-center md:items-start space-x-4">
        <div className="w-72">
          <img
            className="mx-auto rounded-full w-24 h-24 mb-4"
            src="../images/1.jpg"
            alt="John Doe"
          />
          <h3 className="text-center text-xl font-bold mb-2 text-white">John Doe</h3>
          <p className="text-center text-white">
            "I recently bought the latest smartphone from this store, and I'm amazed by its performance! The delivery was prompt, and the product was exactly as described. Highly recommended!"
          </p>
        </div>
        <hr className=" block md:hidden w-full border-[#416392] my-8 " />
        <div className="w-72">
          <img
            className="mx-auto rounded-full w-24 h-24 mb-4"
            src="../images/istockphoto-1337144146-612x612.jpg"
            alt="Travis Howard"
          />
          <h3 className="text-center text-xl font-bold mb-2 text-white">Travis Howard</h3>
          <p className="text-center text-white">
            "I've been a customer of this website for years now, and they never disappoint! The range of products is fantastic, and the customer service is top-notch. Keep up the great work!"
          </p>
        </div>
        <hr className=" block md:hidden w-full border-[#416392] my-8 " />
        <div className="w-72">
          <img
            className="mx-auto rounded-full w-24 h-24 mb-4"
            src="../images/cindy.jpg"
            alt="Cindy Baker"
          />
          <h3 className="text-center text-xl font-bold mb-2 text-white">Cindy Baker</h3>
          <p className="text-center text-white">
            "I purchased a smartwatch from this store, and I'm extremely satisfied with my experience. The product arrived quickly, and it works flawlessly. Will definitely shop here again!"
          </p>
        </div>
      </div>
    </div>
  );
}
