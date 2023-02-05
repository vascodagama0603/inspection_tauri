import { useState, useContext } from "react";
import styled from "styled-components";
import { SelectCagetegory, AnswerContext } from "../Pages/OptionalDesign";
function Answer() {
  const {selected} = useContext(SelectCagetegory)
  const {pixX, pixY, ccdSizeX, ccdSizeY, magn, focal, wd, fovX, fovY}= useContext(AnswerContext)
  const calcFovX = () =>{
    if(!!magn && !!pixX && !!ccdSizeX){
      var sensorSizeX = (ccdSizeX*pixX)/1000
      var n100 = (sensorSizeX/magn) * 100
      return Math.round(n100) / 100
    }
    return ""
  }
  const calcFovY = () =>{
    if(!!magn && !!pixY && !!ccdSizeY){
      var sensorSizeY = (ccdSizeY*pixY)/1000
      var n100 = (sensorSizeY/magn) * 100
      return Math.round(n100) / 100
    }
    return ""
  }
  const calcFovXWd = () =>{
    if(!!focal && !!fovX && !!pixX && !!ccdSizeX){
      var sensorSizeX = (ccdSizeX*pixX)/1000
      var n100 = focal * (1 + (fovX / sensorSizeX)) * 100
      return Math.round(n100) / 100
    }
    return ""
  }
  
  const calcFocal = () =>{
    if(!!wd && !!fovX && !!pixX && !!ccdSizeX){
      var sensorSizeX = (ccdSizeX*pixX)/1000
      var n100 = wd / (1 + (fovX / sensorSizeX)) * 100
      return Math.round(n100) / 100
    }
    return ""
  }
  const calcMagn = () =>{
    if(!!fovX && !!pixX && !!ccdSizeX){
      var sensorSizeX = (ccdSizeX*pixX)/1000
      var n100 = (sensorSizeX / fovX) * 100
      return Math.round(n100) / 100
    }
    return ""
  }
  const calcResolutionX = () =>{
    if(!!pixX && !!fovX){
      var n10000 = (fovX  / pixX) * 10000
      return Math.round(n10000) / 10
    }
    return ""
  }
  const calcResolutionY = () =>{
    if(!!pixY && !!fovY){
      var n10000 = (fovY  / pixY) * 10000
      return Math.round(n10000) / 10
    }
    return ""
  }

  const answerLabel = () => {
    switch(selected){
      case "fov":
        return "視野 : H " + calcFovX() +" mm  V " + calcFovY() +" mm"
      case "wd": 
        return "WD : " + calcFovXWd() +" mm"
      case "focal": 
        return "焦点距離 : "  + calcFocal() +" mm"
      case "magn": 
        return "レンズ倍率 : " + calcMagn() +" 倍"
      case "resolution":
        return "分解能 : H " + calcResolutionX() +" μm V " + calcResolutionY() +" μm"
      default:
        return ""
    }
  }
  return (
    <>
        {selected ==="fov" || selected ==="wd" || selected ==="focal" || selected ==="magn" || selected ==="resolution"?
          <Contents>
            <Category>{answerLabel()}</Category>
          </Contents>
          : <></>
        }
    </>
  );
}
const Contents = styled.div`
  display:flex;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: center;
`;
const Category = styled.p`
  font-size: 30px;
  color:darkred;
  margin-top: 50px;
  margin-bottom: auto;
  width:100%;
`;

export default Answer;
