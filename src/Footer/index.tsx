import React from "react";

const index = () => {
  return (
    <div className="bg-[#393939] text-[#FFFFFF] flex w-full font-sofiasans">
      <div className="flex justify-between mx-32 max-w-[1170px] w-full h-[300px] gap-5">
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <img
            src="/icons/footer/logo.png"
            className="w-12 h-14 object-cover"
          />
          <span className="flex">
            <p className="text-4xl font-oswald uppercase">Sport</p>
            <p className="text-[#08F] text-4xl font-oswald uppercase">Portal</p>
          </span>
          <p className="text-sm text-center max-w-[200px]">
            Sportuň ähli görnüşlerine degişli täzelikleri özünde jemleýän
            platforma.
          </p>
          <img
            src={"/icons/footer/social.png"}
            className="max-w-[235px] w-full h-10 cursor-pointer"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <div className="flex w-full font-oswald text-2xl">
            <div className="border-b border-[#0088FF]">Surat</div>
            <div className="border-b border-white w-full" />
          </div>
          <div className="max-x-[270px] w-full h-[176px] cursor-pointer">
            <img src={"/images/footer/gallery.png"} />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-3">
          <div className="flex w-full font-oswald text-2xl">
            <div className="border-b border-[#0088FF]">Taglar</div>
            <div className="border-b border-white w-full" />
          </div>
          <div className="max-x-[270px] w-full h-[176px]">
            <img src={"/icons/footer/tags.png"} />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className="flex w-full font-oswald text-2xl">
            <div className="border-b border-[#0088FF]">Registrasiýa</div>
            <div className="border-b border-white w-full" />
          </div>
          <div className="flex flex-col font-sofiasans gap-4">
            <p className="text-sm text-justify">
              Iň täze habarlar, teklipler we ýörite bildirişler bilen
              täzelenmek.
            </p>
            <form
              action=""
              method="post"
              className="flex flex-col w-full gap-3"
            >
              <input
                type="email"
                name=""
                id=""
                className="h-10 outline-none font-sofiasans text-sm text-black pl-5"
                placeholder="Email ýazyň..."
              />
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="bg-[#077EE6] h-10 font-sofia text-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
