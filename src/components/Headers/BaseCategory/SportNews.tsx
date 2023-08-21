import {
  Popover,
  PopoverHandler,
  Button,
  PopoverContent,
  List,
  ListItem,
} from "@material-tailwind/react";
import React from "react";
import { useSelector } from "react-redux";
import { SPORT_NEWS_ALL } from "../../../tools/links";

const SportNews = ({
  activeTab,
  linkTo,
}: {
  activeTab: number;
  linkTo: (l: string, tab: number) => void;
}) => {
  const { prefLang, sport_categories } = useSelector(
    (state: any) => state.main
  );

  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <Button className="flex items-center gap-2 px-0 shadow-none">
          <p
            className={`normal-case text-sm ${
              activeTab === 0 ? "text-[#08F]" : "text-black"
            }`}
          >
            {prefLang === "Tm" ? "Sport täzelikler" : "Новости"}
          </p>
          <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
            <path
              d="M4.37605 0.5H8.45194C8.63309 0.5 8.72797 0.720937 8.60049 0.8519C8.60017 0.852226 8.59985 0.852552 8.59953 0.852877L6.50205 2.95034L5.21321 4.23918C4.86545 4.58694 4.29882 4.58694 3.95106 4.23918L3.59751 4.59274L3.95106 4.23918L0.562108 0.850248C0.562107 0.850247 0.562105 0.850246 0.562104 0.850245C0.431277 0.71941 0.524474 0.5 0.705771 0.5H4.37605Z"
              fill={activeTab === 0 ? "#08F" : "#0F1A42"}
              stroke={activeTab === 0 ? "#08F" : "#0F1A42"}
            />
          </svg>
        </Button>
      </PopoverHandler>
      <PopoverContent className="bg-white border font-oswald max-w-[116px] w-full flex justify-center">
        <List className="text-xs">
          {sport_categories.map((sc: any) => {
            return prefLang === "Tm" ? (
              <ListItem
                key={sc.id}
                className="hover:text-[#08F]"
                onClick={() => linkTo(SPORT_NEWS_ALL, 0)}
              >
                - {sc.nameTm}
              </ListItem>
            ) : (
              <ListItem
                key={sc.id}
                className="hover:text-[#08F]"
                onClick={() => linkTo(SPORT_NEWS_ALL, 0)}
              >
                - {sc.nameRu}
              </ListItem>
            );
          })}
        </List>
      </PopoverContent>
    </Popover>
  );
};

export default SportNews;
