import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NF404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return <></>;
};

export default NF404;
