import React from 'react';
import Button from '@restart/ui/esm/Button';
import { Badge } from "@material-ui/core";
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { mobile } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" ,marginBottom:"30px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "9px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #f1620f;
  ${mobile({ fontSize: "14px" })}
`;

const Span  = styled.span`
font-weight: bold;
  color: blue;
  ${mobile({ fontSize: "17" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "9px", marginLeft: "9px" })}
`;


function Navbar() {  
  const { users, logOut } = useAuth();
  
  const { displayName, photoURL } = users;
  const quantity = useSelector(state=>state.cart.quantity) 

    return (
        <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo> <Span> Daily</Span> Bazar</Logo>
        </Center>
        <Right>
         
        {users?.displayName ? 
                            <Button  onClick={logOut} variant="danger">Logout</Button> :
                            < MenuItem as={Link} to="/login">LOGIN</ MenuItem>}
                        < MenuItem> 
                           <img
                         style={{
                         width: '40px',
                        borderRadius: '50%',
                        }}
                       src={photoURL}
                       alt=""
                      />
                           <a href="#login">{displayName}</a>
                        </ MenuItem>
          <Link to="/cart">  
          <MenuItem>
             <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge> 
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
    )
}

export default Navbar
