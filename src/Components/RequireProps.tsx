import { useState, useContext } from "react";
import styled from "styled-components";
import { SelectCagetegory,RqContext } from "../Pages/OptionalDesign";
function RequireProps() {
  const {selected} = useContext(SelectCagetegory)
  const {wd, fovX, fovY, setWd, setFovX, setFovY}= useContext(RqContext)
  const onChangeWd = (event: any) => {
    const value = event.target.value;
    setWd(value);
  };
  const onChangeFovX = (event: any) => {
    const value = event.target.value;
    setFovX(value);
  };
  const onChangeFovY = (event: any) => {
    const value = event.target.value;
    setFovY(value);
  };
  return (
    <>
      <div>
        {selected ==="focal"? 
          <Contents>
          <Category>WD</Category>
            <SubContents>
              <Label></Label>
              <Input 
                type="number" 
                step="0.1"
                defaultValue={!!wd?wd:""}
                onChange={(event) => onChangeWd(event)}
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
      <div>
       {selected ==="wd" || selected ==="focal" || selected ==="magn" || selected ==="resolution"? 
        <Contents>
          <Category>視野</Category>
          <SubContents>
            <Label>H</Label>
            <Input 
                type="number" 
                step="0.01"
                defaultValue={!!fovX?fovX:""}
                onChange={(event) => onChangeFovX(event)}
              />
            <Label>mm</Label>
          </SubContents>
          {selected ==="resolution"? 
          <SubContents>
            <Label>V</Label>
            <Input 
                type="number" 
                step="0.01"
                defaultValue={!!fovY?fovY:""}
                onChange={(event) => onChangeFovY(event)}
              />
            <Label>mm</Label>
          </SubContents>
          :<SubContents><Blank/></SubContents>}
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

export default RequireProps;
