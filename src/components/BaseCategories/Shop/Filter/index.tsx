import React from "react";
import { useDispatch } from "react-redux";
import { GET_SHOP_FILTERS } from "../../../../redux/types";

const polygon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="8"
    viewBox="0 0 13 8"
    fill="none"
  >
    <path
      d="M6.45002 7.77344L2.506e-05 0.000103632L12.9 0.00010252L6.45002 7.77344Z"
      fill="#0088FF"
    />
  </svg>
);

const Filter = () => {
  const dispatch = useDispatch();
  dispatch({ type: GET_SHOP_FILTERS });

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Filter;
