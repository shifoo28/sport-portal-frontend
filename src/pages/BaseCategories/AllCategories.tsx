import React from "react";
import AllAhtlete from "../../components/BCFederations/AllAhtlete";

const AllCategories = () => {
  return (
    <div className="w-full flex justify-center pt-14">
      <div className="max-w-[1100px] w-full flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-[#0088FF] text-[25px] font-oswald">
            TÜRKMENISTANYŇ FUTBOL FEDERASIÝASY
          </p>
          <img src="" alt="" />
        </div>
        <AllAhtlete />
      </div>
    </div>
  );
};

export default AllCategories;
