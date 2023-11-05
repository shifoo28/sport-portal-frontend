import {
  Popover,
  PopoverHandler,
  Button,
  PopoverContent,
  List,
  ListItem,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SPORT_NEWS_ALL } from "../../../tools/links";
import { useNavigate } from "react-router-dom";
import { activateTab } from "../../../redux/actions/main";
import { RootState } from "../../../redux/store";
import { ISportCategory } from "../../../redux/interfaces/main";

const SportNewsList = ({ activeTab }: { activeTab: number }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prefLang = useSelector((state: RootState) => state.main.prefLang);
  const sport_categories: ISportCategory[] = useSelector(
    (state: RootState) => state.main.sport_categories
  );
  const linkTo = (link: string, tab: number, sportCategoryId: string) => {
    dispatch(activateTab(tab));
    navigate(link, { state: { sportCategoryId } });
  };

  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <Button className="flex items-center gap-2 shadow-none p-0 font-oswald">
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
      <PopoverContent className="bg-white border max-w-[116px] w-full flex justify-center rounded-none">
        <List className="text-xs font-oswald">
          {sport_categories.map((sc, index) => {
            return (
              <ListItem
                key={index}
                className="hover:text-[#08F] p-1 hover:underline"
                onClick={() => linkTo(SPORT_NEWS_ALL, 0, sc.id)}
              >
                · {prefLang === "Tm" ? sc.nameTm : sc.nameRu}
              </ListItem>
            );
          })}
        </List>
      </PopoverContent>
    </Popover>
  );
};

export default SportNewsList;
