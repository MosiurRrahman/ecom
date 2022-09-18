import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: 700;
`;
const Right = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input />
            <Search />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Ecom</Logo>
        </Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
