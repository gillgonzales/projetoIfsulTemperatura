import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  display: grid;
  transition: all 0.5s ease-out;
  grid-template-columns: ${props => !props?.menu ? '2fr 10fr' : '0.5fr 11.5fr'};
  grid-template-rows: auto;
  gap: 0px;
  grid-template-areas:
  "navbar content";
  background-color: #212121;
  height: fit-content;
  overflow: hidden;
  transition: all 0.5s ease-out;
`;

export const Navbar = styled.aside`
  position: relative;
  grid-area: navbar;
  border-right: 1px solid #313131;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  figure{
    width: 100%;
    img{
      transition: all 0.5s ease-out;
      width: 100%;
    }
  }
  nav{
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    ul{
      display: flex;
      flex-direction: column;
      list-style: none;
      gap: 10px;
      li a{
        padding: 10px;
        display: flex;
        align-items: center;
        width: max-content;
        gap: 10px;        
        font-size: 20px;
        color: #fff;
        cursor: pointer;
        transition: all 0.5s ease-out;
        text-decoration: none;
        &:hover{
          background-color: #313131;
        }
        img{
          width: 25px;
          filter: invert(1) hue-rotate(180deg);
        }
        span{
          transition: all 0.5s ease-out;
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }
  .burger {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  background: transparent;
  cursor: pointer;
  display: block;
}

.burger input {
  display: none;
}

.burger span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger span:nth-of-type(1) {
  top: 0px;
  transform-origin: left center;
}

.burger span:nth-of-type(2) {
  top: 50%;
  transform: translateY(-50%);
  transform-origin: left center;
}

.burger span:nth-of-type(3) {
  top: 100%;
  transform-origin: left center;
  transform: translateY(-100%);
}

.burger input:checked ~ span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 0px;
  left: 5px;
}

.burger input:checked ~ span:nth-of-type(2) {
  width: 0%;
  opacity: 0;
}

.burger input:checked ~ span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 18px;
  left: 5px;
} 
.burger:has(input:checked) ~ nav ul li a span{
  width: 0;
}

`;

export const Content = styled.section`
  grid-area: content;
  background-color: #111111;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
`;

