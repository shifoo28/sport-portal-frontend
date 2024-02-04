import React, { useState } from "react";
import { WorldNewsHeader, ChampionshipsHeader } from "./Headers";
import WorldNewsBody from "./WorldNewsBody";
import ChampionshipsBody from "./ChampionshipsBody";

const World = () => {
  const [champIndex, setChampIndex] = useState(0);

  return (
    <div className="flex justify-between">
      <div className="max-w-[870px] flex flex-col w-full">
        <WorldNewsHeader />
        <WorldNewsBody />
      </div>
      <div className="max-w-[270px] flex flex-col w-full">
        <ChampionshipsHeader
          champIndex={champIndex}
          setChampIndex={setChampIndex}
        />
        <ChampionshipsBody
          champIndex={champIndex}
        />
      </div>
    </div>
  );
};

export default World;
