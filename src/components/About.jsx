import React from "react";

export default function About() {
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-[1280px] w-full px-4">
            <div className="flex flex-col justify-center items-center mt-8 mb-8 ">
                <h1 className="text-xl md:text-2xl font-bold text-[#416392] mb-4">About Us</h1>
                <p className="text-sm md:text-lg text-[#416392]">
                    Welcome to our e-gadgets emporium! We are passionate about bringing you the latest and greatest in electronic gadgets to enhance your life and keep you connected. Whether you're searching for cutting-edge smartphones, sleek laptops, or innovative smart home devices, we've got you covered.
                    <br /><br />
                    Our mission is to provide high-quality e-gadgets that not only meet your technological needs but also inspire and delight. We believe that technology should be accessible to everyone, so we strive to offer a diverse range of products at competitive prices.
                    <br /><br />
                    At our e-gadgets store, customer satisfaction is our top priority. Our dedicated team is here to assist you every step of the way, from browsing our selection to post-purchase support. We value your trust and aim to exceed your expectations with every interaction.
                    <br /><br />
                    Thank you for choosing us as your e-gadgets destination. We look forward to serving you and helping you discover the endless possibilities of technology!
                </p>
            </div>
                <hr className="w-full border-[#416392] my-8" />
                <div className="flex flex-col justify-center items-center mt-8 mb-8">
                    <h1 className="text-xl  md:text-2xl font-bold text-[#416392] mb-4">Address</h1>
                    <p className="text-sm md:text-lg text-[#416392]">602 Street, Bombay </p>
                </div>
                <hr className="w-full border-[#416392] my-8" />
                <div className="flex flex-col justify-center items-center mt-8 mb-8">
                    <h1 className="text-xl  md:text-2xl font-bold text-[#416392] mb-4">Factory Locations</h1>
                    <p className="text-sm md:text-lg text-[#416392]">Bengaluru, Kochi</p>
                </div>
                <hr className="w-full border-[#416392] my-8" />
                <div className="flex flex-col justify-center items-center mt-8 mb-8">
                    <h1 className="text-xl  md:text-2xl font-bold text-[#416392] mb-4">Contact Details</h1>
                    <p className="text-sm md:text-lg text-[#416392]">4567812365</p>
                </div>
            </div>
        </div>
    );
}
