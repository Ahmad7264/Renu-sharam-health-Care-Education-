import React from "react";
import image1 from "../assets/img1.png";
import image2 from "../assets/img2.png";
import image3 from "../assets/img4.png";
import image4 from "../assets/mainimg.png";
import image5 from "../assets/mainimg2.png";
import image6 from "../assets/education.png";
import logo1 from "../assets/logo-give.png";
import donateImg from "../assets/donateimg.png";
import donationForm from "../assets/donationform.png";
import donateimg2 from "../assets/donateform.png";
import donateimg3 from "../assets/donateformfinal.png";
const Donate = () => {
  return (
    <>
      <div
        // variants={fadeIn("up", 0.2)}
        // initial="hidden"
        // whileInView={"show"}
        // viewport={{ once: false, amount: 0.6 }}
        className="min-h-screen flex flex-col justify-center  sm:px-14 lg:px-32 px-5 text-white bg-[url('assets/main3.png')] bg-no-repeat bg-cover opacity-90"
      >
        <div
          // variants={fadeIn("left", 0.2)}
          // initial="hidden"
          // whileInView={"show"}
          // viewport={{ once: false, amount: 0.6 }}
          className=" w-full lg:w-4/5 space-y-5 "
        >
          {/* <h1 className="text-6xl font-bold mb-4 text-bPrimary font-serif md:w-3/4  leading-snug">
          Renu Health <span className="text-dGrey">Care</span>
          
        </h1> */}
          <img src={logo1} alt="imag" />
          <p className="text-bold font-bold hover:text-bPrimary  font-serif ">
            If your project grows in size, this option is available.<br></br>
            This method has the trade-off that it takes<br></br>a long time to
            install the package.<br></br>
            If your project grows in size, this option is <br></br>available.
            This method time to install the package. If your project<br></br>
            grows in size, this option is available. This method has the
            <br></br> trade-off that it takes a long time to install the
            package.
          </p>
        </div>
      </div>

      {/* card items */}
      <div className=" max-w-full mx-auto my-5">
        <h1 className=" text-4xl text-center font-bold text-dGrey hover:text-bPrimary tracking-widest font-serif">
          Donate to the Ngo
        </h1>
      </div>
      <div className=" max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-8">
        <div className="text-center shadow-xl mb-11 rounded-xl ">
          <div className=" overflow-hidden">
            <img
              src={image1}
              className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
              alt=""
            />
          </div>
          <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
            Give for Poor children
          </h2>
          <p className="py-2">
            Rapidly build modern websites without ever leaving your HTML.
          </p>
        </div>
        <div className="text-center shadow-xl mb-11 rounded-xl ">
          <div className=" overflow-hidden">
            <img
              src={image2}
              className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
              alt=""
            />
          </div>
          <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
            Give for Better LIfe
          </h2>
          <p className="py-2">
            Rapidly build modern websites without ever leaving your HTML.
          </p>
        </div>
        <div className="text-center shadow-xl mb-11 rounded-xl ">
          <div className=" overflow-hidden">
            <img
              src={image3}
              className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
              alt=""
            />
          </div>
          <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
            Give for Home
          </h2>
          <p className="py-2">
            Rapidly build modern websites without ever leaving your HTML.
          </p>
        </div>
        <div className="text-center shadow-xl mb-11 rounded-xl ">
          <div className=" overflow-hidden">
            <img
              src={image4}
              className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
              alt=""
            />
          </div>
          <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
            Give for Better Food
          </h2>
          <p className="py-2">
            Rapidly build modern websites without ever leaving your HTML.
          </p>
        </div>
        <div className="text-center shadow-xl mb-11 rounded-xl ">
          <div className=" overflow-hidden">
            <img
              src={image5}
              className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
              alt=""
            />
          </div>
          <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
            Give for Better Food
          </h2>
          <p className="py-2">
            Rapidly build modern websites without ever leaving your HTML.
          </p>
        </div>
        <div className="text-center shadow-xl mb-11 rounded-xl ">
          <div className=" overflow-hidden">
            <img
              src={image6}
              className=" h-96 object-cover hover:scale-110 duration-1000 rounded-t-xl  "
              alt=""
            />
          </div>
          <h2 className=" bg-amber-700 cursor-pointer font-bold tracking-widest py-2">
            Give for Better Education
          </h2>
          <p className="py-2">
            Rapidly build modern websites without ever leaving your HTML.
          </p>
        </div>
      </div>
      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col ">
          <img
            src={donateimg3}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
        <div className="w-1/2 h-full bg-[url('assets/img2.png')] bg-no-repeat bg-cover opacity-90 flex flex-col p-10">
          <h1 className="text-4xl text-bPrimary text-center   font-bold mb-4">
            Renu Sharma Health Care
          </h1>
          <div className="w-full flex flex-col">
            <div className="w-full flex flex-col mb-1">
              <h2 className="text-2xl text-white text-center font-serif font-semibold mb-4">
                Support Us
              </h2>
              <p className=" text-base text-white text-center font-serif mb-2">
                Welcome Back! Please enter your details.
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-black rounded-3xl py-4 my-3 border-b  border-black outline-none focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-black rounded-3xl py-4 my-3 border-b  border-black outline-none focus:outline-none"
              />
              <input
                type="number"
                placeholder="Number"
                className="w-full text-black rounded-3xl py-4 my-3 border-b  border-black outline-none focus:outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Amount"
              className="w-full text-black rounded-3xl py-4 my-3 border-b  border-black outline-none focus:outline-none"
            />
          </div>
          <div className="w-full flex flex-col items-center my-4">
            <button className="w-1/2 text-2xl text-white my-2 bg-black rounded-lg p-4 text-center flex item-center justify-center font-serif font-bold tracking-widest">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src={donateImg}
          alt=""
          className="w-full h-1/2 mt-6 mb-6 shadow-2xl rounded-2xl"
        />
      </div>
    </>
  );
};

export default Donate;
