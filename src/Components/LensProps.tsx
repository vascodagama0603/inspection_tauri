import { useState, useContext } from "react";
import styled from "styled-components";
import { SelectCagetegory,LensContext } from "../Pages/OptionalDesign";
function LensProps() {
  const {selected} = useContext(SelectCagetegory)
  const { magn, focal, setMagn, setFocal }= useContext(LensContext)
  const onChangeMagn = (event: any) => {
    const value = event.target.value;
    setMagn(value);
  };
  const onChangeFocal = (event: any) => {
    const value = event.target.value;
    setFocal(value);
  };
  return (
    <>
      <div>
        {selected ==="fov"? 
          <Contents>
          <Category>倍率</Category>
            <SubContents>
              <Label></Label>
              <Input 
                type="number" 
                step="0.01"
                defaultValue={!!magn?magn:""}
                onChange={(event) => onChangeMagn(event)}
              />
              <Label>倍</Label>
            </SubContents>
            <SubContents>
              <Blank/>
            </SubContents>
          </Contents>
          : <></>
        }
      </div>
      <div>
        {selected ==="wd"? 
          <Contents>
            <Category>焦点距離</Category>
            <SubContents>
              <Label></Label>
              <Input 
                type="number" 
                step="0.01"
                defaultValue={!!focal?focal:""}
                onChange={(event) => onChangeFocal(event)}
              />
              <Label>mm</Label>
            </SubContents>
            <SubContents>
              <Blank/>
            </SubContents>
          </Contents>
          : <></>
        }
      </div>
    </>
  );
}
const Blank = styled.div`
  width:160px;
`;

const Contents = styled.div`
  display:flex;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
`;
const SubContents = styled.div`
  display:block;
`;
const Input = styled.input`
  font-size: 15px;
  background: papayawhip;
  border-radius: 3px;
  width:60px;
`;
const Category = styled.p`
  font-size: 15px;
  color:darkgray;
  text-align: right;
  margin-top: auto;
  margin-bottom: auto;
  width:120px;
`;
const Label = styled.label`
  color:darkgray;
  display: inline-block;
  margin-left:5px;
  width:25px;
`;
export default LensProps;
