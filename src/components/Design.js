/* eslint-disable*/
import React, { useState} from 'react';
// import React from "react";
import styled from 'styled-components';
import ComLayout from './ComLayout';
// import Slider from "./Slider";
// import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import sample1 from '../img/hbaf2.png';
import sample2 from '../img/diptyque1.png';
import sample3 from '../img/hbaf1.png';
import sample4 from '../img/diptyque2.png';
import sample5 from '../img/hbaf3.png';



const Design = () =>{
    // const ThemeMode = useTheme();
    let [site,sitech] = useState(['https://ghdals2655.cafe24.com/HBAF/', 'https://ghdals2162.cafe24.com/', 'https://ghdals2162.cafe24.com/diptqyue-event1/', 'https://ghdals2162.cafe24.com/diptqyue-event2/']);    
    return (
        <ComLayout>
            <Designwrap>
            <div class="container">
              <ul className="item1"><li><a href={site[0]}><h3>HBAF 이벤트 배너</h3><p>할인행사</p></a></li></ul>
              <ul className="item2"><li><a href={site[2]}><h3>diptyque 이벤트 배너</h3><p>여름상품 행사</p></a></li></ul>
              <ul className="item3"><li><a href={site[0]}><h3>HBAF 이벤트 배너</h3><p>먼투썬 신제품 행사</p></a></li></ul>
              <ul className="item4"><li><a href={site[3]}><h3>diptyque 이벤트 배너</h3><p>최대15% 할인행사</p></a></li></ul>
              <ul className="item5"><li><a href={site[0]}><h3>HBAF 이벤트 배너</h3><p>HBAF행사</p></a></li></ul>
            </div>
            </Designwrap>
        </ComLayout>
        );
    }
export default Design;

const Designwrap  = styled.div`
    width:100%;
    height:80%;
  & .container{
    width:100%;
    height:100%;
    padding:0;
    display:grid;
    grid-template:3fr 2fr / 1.5fr 1fr 1.5fr;
    grid-gap:10px;
    overflow:auto;
  }
  & ul {
    background-repeat: no-repeat;
    background-size: cover;
    border:1px solid rgba(0,0,0,0.1);
    position:relative;
  }
  & a{
    color: #fff;
    position: absolute;
    background: rgba(0,0,0,0.5); left: 0; bottom: 0;
    width: 100%;
    height: 30%;
    padding: 5px 20px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity 0.35s ease-in-out;
    text-align: left;
    display: inline-block;
    font-size:2.5vmin;
    cursor: pointer;
    font-family: "Notosans-m";
    overflow: auto;
    line-height: initial;
    & h3{
      font-size:3vmin;
    }
  }
  & ul:hover a{
    opacity:1;
  }





  & .item1{
    background-image: url(${sample1});
    background-size: cover;
    grid-column-start:1;
    grid-column-end: 2;
  }
  & .item2{
    background-image: url(${sample2});
    grid-column-start:2;
    grid-column-end: 3;
    background-size: cover;
  }
  & .item3{
    background-image: url(${sample3});
    grid-column-start:3;
    grid-column-end: 4;

  }
  & .item4{
    background-image: url(${sample4});
    grid-column-start:1;
    grid-column-end: 3;
  }
  & .item5{
    background-image: url(${sample5});
    grid-column-start:3;
    grid-column-end: 4;
  }
`


