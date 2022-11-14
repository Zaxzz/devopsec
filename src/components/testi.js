import Hiwp from "./asset/hiw.png"

const Testi = () => {
    return (
            <div className="pt-8 bg-blue text-center">
            <h4 className="text-black font-bold text-5xl">Testimonial</h4>
 <h4 className="text-black">Gatau bang bingung mau nyusun kata</h4>
 <h4 className="text-black"> kata, dh kehabisan kata kata keknya</h4>
 
              <div className="bg-blue py-10 px-9">
      <div className="w-full bg-white rounded-2xl shadow-lg ">
  <figure className="px-10 pt-10">
    <img src={Hiwp} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title lg:flex-row-reverse text-black">Choose the package you want</h2>
    <div className="card-actions">
    </div>
  </div>
  </div>
  </div>
  <div className="flex pb-6 justify-center w-full py-2 gap-2">
  <input type="radio" name="radio-4" className="radio border-black" checked />
<input type="radio" name="radio-4" className="radio border-black" />
<input type="radio" name="radio-4" className="radio border-black" />
<input type="radio" name="radio-4" className="radio border-black" />
<input type="radio" name="radio-4" className="radio border-black" />
</div>
  </div>
    );
}

export default Testi;