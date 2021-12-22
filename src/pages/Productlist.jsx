import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import Announcement from '../Component/Announcement';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import Newsletter from '../Component/Newsletter';
import Products from '../Component/Products';
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
function Productlist() { 
  const location = useLocation();
  const cat = location.pathname.split("/")[2]
  const [filter , setFilter] = useState({}) 
  const [sort, setSort] = useState("newst")
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({...filter,
    [e.target.name]:value})
  };
  console.log(filter)
    return (
        <Container>
        <Navbar />
        <Announcement />
        <Title>{cat}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled >
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option  disabled >
                Size
              </Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select  onChange={e => setSort(e.target.value)}>
              <Option value="newest">Newest</Option>
              <Option value="asc" >Price (asc)</Option>
              <Option value="desc">Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        < Products cat={cat} filter={filter} sort={sort} />
        <Newsletter />
        <Footer />
      </Container>
    )
}

export default Productlist
