import { useState, useEffect } from "react";
import SlideBar from "../Components/SlideBar";
import styled from "styled-components";
import ReactMarkdwon from 'react-markdown'

import file from '../docs/inspection.md';
const Contents = styled.div`
  margin-left:10px;
`;
const Title = styled.h1`
margin-top:40px;
margin-bottom:40px;
`;

function Document() {
  const [markdown, setMarkdown] = useState("aaa");

  useEffect(() => {
		fetch('../docs/inspection.md').then(res => res.text()).then(text => setMarkdown(text))
	})
  return (
    <>
      <SlideBar/>
      <Contents>
        <Title>画像資料</Title>
        
        <ReactMarkdwon>{a }</ReactMarkdwon>
      </Contents>
    </>
  );
}
const a =
`
## 概要
` 
export default Document;