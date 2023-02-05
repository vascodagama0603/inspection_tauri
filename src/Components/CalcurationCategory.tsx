import { useState,useContext } from "react";
import styled from "styled-components";

import { SelectCagetegoryContext } from "../Pages/OptionalDesign";
function CalcurationCategory() {
  const { selected, setSelected } = useContext(SelectCagetegoryContext);
  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    setSelected(value);
  };
  return (
    <Wrapper>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="fov"
          checked={selected === "fov"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>視野</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="wd"
          checked={selected === "wd"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>WD</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="focal"
          checked={selected === "focal"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>焦点距離</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="magn"
          checked={selected === "magn"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>レンズ倍率</div>
      </Item>
      <Item>
        <RadioButton
          type="radio"
          name="radio"
          value="resolution"
          checked={selected === "resolution"}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>分解能</div>
      </Item>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: auto;
  margin-left: auto;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #db7290;
      border: 1px solid #db7290;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 12px;
        height: 12px;
        margin: 6px;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
        background: white;
      }
    }
  `}
`;

export default CalcurationCategory;
