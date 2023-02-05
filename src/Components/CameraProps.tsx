import { useState, useContext } from "react";
import styled from "styled-components";
import { SelectCagetegory, CameraContext } from "../Pages/OptionalDesign";
function CameraProps() {
  const {selected} = useContext(SelectCagetegory)
  const { pixX,pixY, ccdSizeX,ccdSizeY,setPixX,setPixY,setCcdSizeX,setCcdSizeY }= useContext(CameraContext)
  const onChangePixX = (event: any) => {
    const value = event.target.value;
    setPixX(value);
  };
  const onChangePixY = (event: any) => {
    const value = event.target.value;
    setPixY(value);
  };
  const onChangeCcdSizeX = (event: any) => {
    const value = event.target.value;
    setCcdSizeX(value);
  };
  const onChangeCcdSizeY = (event: any) => {
    const value = event.target.value;
    setCcdSizeY(value);
  };
  return (
    <>
      <div>
        {selected ==="fov" || selected ==="wd" || selected ==="focal" || selected ==="magn" || selected ==="resolution"? 
          <Contents>
            <Category>画素数</Category>
            <SubContents>
              <Label>H</Label>
              <Input 
                type="number" 
                defaultValue={!!pixX?pixX:""}
                onChange={(event) => onChangePixX(event)}
              />
              <Label>pix</Label>
            </SubContents>
            {selected ==="fov" || selected ==="resolution"? 
            <SubContents>
              <Label>V</Label>
              <Input 
                type="number" 
                defaultValue={!!pixY?pixY:""}
                onChange={(event) => onChangePixY(event)}
              />
              <Label>pix</Label>
            </SubContents>
            :<SubContents><Blank/></SubContents>}
          </Contents>
          : <></>
        }
        
      </div>
      <div>
        {selected ==="fov" || selected ==="wd" || selected ==="focal" || selected ==="magn"? 
          <Contents>
            <Category>CCD素子サイズ</Category>
            <SubContents>
              <Label>H</Label>
              <Input 
                type="number" 
                step="0.1"
                defaultValue={!!ccdSizeX?ccdSizeX:""}
                onChange={(event) => onChangeCcdSizeX(event)}
              />
              <Label>μm</Label>
            </SubContents>
            {selected ==="fov"? 
            <SubContents>
              <Label>V</Label>
              <Input 
                type="number" 
                step="0.1"
                defaultValue={!!ccdSizeY?ccdSizeY:""}
                onChange={(event) => onChangeCcdSizeY(event)}
              />
              <Label>μm</Label>
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
  width:158px;
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
export default CameraProps;
