/* eslint-disable*/
import React, {useState} from 'react';
import styled from 'styled-components';
import ComLayout from './ComLayout';
import { useTheme } from '../context/themeProvider';
import '../fonts/font.css';
import '../App.scss';
import Text from './TextEffect';
import Accordion from './Accordion';


const Interview = () =>{

    const ThemeMode = useTheme();
 

    return (
    <ComLayout>
      <H1><Text/></H1>
        <Wrapper>
          <Accordion theme={ThemeMode[0]}  
          title="자기소개 부탁드립니다." 
          children='안녕하세요. 카멜레온 UX/UI디자이너 박홍민입니다.
          저는 워킹홀리데이, 해외출장을 다수 다니며 다양한 경험을 쌓아 빠르게 변화하는 사회에 즉각적으로 반응하는 인재입니다.'
          childrenc="<中文>你好。我是变色龙网路发行商朴鸿民。因为我去过打工度假跟跟很多国家出差，获得很多各种经历, 所以能在瞬息万变的社会上立即作出反应."
          />
          <Accordion 
          title="이직을 하려는 이유는 무엇인가요?"
          children="전 직장에서는 영업기술을 하며 다양한 고객을 만났습니다. 고객을 만나 고객들의 니즈를 듣고 프로그래머에게 수정을 부탁하여 프로그램을 수정했습니다. 
          그러다 제가 고객들의 니즈를 잘 들으니 직접 프로그램을 만들고 그들이 원하는 페이지를 제작 할 수있다면 저의 장점을 더 잘 살릴수 있을거 같아 새로운 직종으로 도전하게 되었습니다."
          childrenc="<中文>我前公司的职务是营业技术，在工作中遇到了很多顾客听听他们的要求，请程序员修改程序。然后我想想很好倾听顾客的要求，如果自己制作他们希望的网站，
          觉得能更好好地发挥我的优点。所以我下定决心挑战换新工作."
          />
          <Accordion 
          title="나에 대한 강점이 무엇인가요?"
          children="저는 책임감이 강한 사람입니다. 저에게 맡겨진 임무가 있다면 끝까지 찾아보고 결과를 도출하려고 노력합니다."
          childrenc="<中文>我是个责任感很强的人。如果交给我任务的话，为了得到结果努力到最后。"
          />
          <Accordion
          title="지원자의 약점 (단점)은 무엇입니까?"
          children="저의 장점이 될수 있지만 단점이 되었던, 하나에 집중을 하면 다른 하나를 미루다보니 늦어질때가 있습니다.
          그렇기 때문에 정확히 어떠한것이 중요한지를 생각하고 정리하여 순위를 매겨 수행할려고 노력합니다."
          childrenc="<中文>这是不但我的优点，而且我的缺点。因为当专注于一件事时，推迟另一件事，所以有时可能很晚。因此我努力思考和整理什么样的事是更重要的。" 
          />
        </Wrapper>        
    </ComLayout>
        );
    }
export default Interview;

const H1  = styled.div`
    width:100%;
    height:100px;
    position: relative;
    z-index:999;
`
const Wrapper  = styled.div`  
    width: 630px;
    margin: 20px auto;

`