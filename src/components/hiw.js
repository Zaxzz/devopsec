import React from "react";
import Hiwp from "./asset/hiw.png"

const Hiw = () => {
    return (
        <div className="pt-8 bg-white text-center">
            <h4 className="text-black font-bold text-5xl">How It Works</h4>
 <h4 className="text-black">Gatau bang bingung mau nyusun kata</h4>
 <h4 className="text-black"> kata, dh kehabisan kata kata keknya</h4>
        <div className="bg-white py-10 px-9 grid grid-cols-3 gap-4">
      <div className="card w-96 bg-white shadow-lg">
  <figure className="px-10 pt-10">
    <img src={Hiwp} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-black">Choose the package you want</h2>
    <div className="card-actions">
    </div>
  </div>
</div>
      <div className="card w-96 bg-white shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Hiwp} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-black">Choose the package you want</h2>
    <div className="card-actions">
    </div>
  </div>
  </div>
        <div className="card w-96 bg-white shadow-xl">
  <figure className="px-10 pt-10">
    <img src={Hiwp} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
   <h2 className="card-title text-black">Choose the package you want</h2>
    <div className="card-actions">
    </div>
  </div>
  </div>
  </div>
</div>
    );
}

export default Hiw;