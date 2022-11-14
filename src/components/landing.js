import React from "react";
import Landingdev from "./asset/landingdev.png"

const Landing = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-blue">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Landingdev} className="max-w-sm rounded-lg " />
    <div className="pl-8 text-black">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
}

export default Landing;