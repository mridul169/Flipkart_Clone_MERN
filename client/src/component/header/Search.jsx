import styled from "@emotion/styled";
import { InputBase, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <SearchContainer>
        <InputSearchBase
          placeholder="Search for product"
          onChange={(e) => getText(e.target.value)}
        />
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchContainer>
    </>
  );
};

export default Search;
