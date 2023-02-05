import { useState,createContext } from "react";
import SlideBar from "../Components/SlideBar";
import styled from "styled-components";

import CameraProps from "../Components/CameraProps";
import LensProps from "../Components/LensProps";
import CalcurationCategory from "../Components/CalcurationCategory";
import RequireProps from "../Components/RequireProps";
import Answer from "../Components/Answer";
type SelectCagetegoryType = {
  selected: string | null;
  setSelected: (selected: string) => void;
};
type CameraType = {
  pixX: number | null;
  pixY: number | null;
  ccdSizeX: number | null;
  ccdSizeY: number | null;
  setPixX: (pixX: number) => void;
  setPixY: (pixY: number) => void;
  setCcdSizeX: (ccdSizeX: number) => void;
  setCcdSizeY: (ccdSizeY: number) => void;
};
type LensType = {
  magn: number | null;
  focal: number | null;
  setMagn: (magn: number) => void;
  setFocal: (focal: number) => void;
};
type RqType = {
  wd: number | null;
  fovX: number | null;
  fovY: number | null;
  setWd: (wd: number) => void;
  setFovX: (fovX: number) => void;
  setFovY: (fovY: number) => void;
};

type AnswerType = {
  pixX: number | null;
  pixY: number | null;
  ccdSizeX: number | null;
  ccdSizeY: number | null;
  magn: number | null;
  focal: number | null;
  wd: number | null;
  fovX: number | null;
  fovY: number | null;
};
type SelectCagetegory = {
  selected: string | null;
};
export const SelectCagetegoryContext = createContext<SelectCagetegoryType>({
  selected: null,
  setSelected: (selected) => {},
});
export const CameraContext = createContext<CameraType>({
  pixX: null,
  pixY: null,
  ccdSizeX: null,
  ccdSizeY: null,
  setPixX: (pixX) => {},
  setPixY: (pixX) => {},
  setCcdSizeX: (ccdSizeX) => {},
  setCcdSizeY: (ccdSizeY) => {},
});

export const LensContext = createContext<LensType>({
  magn: null,
  focal: null,
  setMagn: (magn) => {},
  setFocal: (focal) => {},
});

export const RqContext = createContext<RqType>({
  wd: null,
  fovX: null,
  fovY: null,
  setWd: (wd) => {},
  setFovX: (fovX) => {},
  setFovY: (fovY) => {},
});

export const AnswerContext = createContext<AnswerType>({
  pixX: null,
  pixY: null,
  ccdSizeX: null,
  ccdSizeY: null,
  magn: null,
  focal: null,
  wd: null,
  fovX: null,
  fovY: null,
});

export const SelectCagetegory = createContext<SelectCagetegory>({selected: null});


function OptionalDesign() {
  const [selected, setSelected] = useState<string | null>(null);
  const [pixX, setPixX] = useState<number | null>(null);
  const [pixY, setPixY] = useState<number | null>(null);
  const [ccdSizeX, setCcdSizeX] = useState<number | null>(null);
  const [ccdSizeY, setCcdSizeY] = useState<number | null>(null);
  const [magn, setMagn] = useState<number | null>(null);
  const [focal, setFocal] = useState<number | null>(null);
  const [wd, setWd] = useState<number | null>(null);
  const [fovX, setFovX] = useState<number | null>(null);
  const [fovY, setFovY] = useState<number | null>(null);
  return (
    <>
      <SlideBar/>
        <Contents>
            <Title>光学設計(概要)</Title>
            <Group>
              <h2>何を算出したいですか？</h2>
              <SelectCagetegoryContext.Provider value={{ selected, setSelected }}>
                <CalcurationCategory/>
              </SelectCagetegoryContext.Provider>
            </Group>
            <SelectCagetegory.Provider value={{ selected }}>
              <Group>
              {selected ==="fov" || selected ==="wd" || selected ==="focal" || selected ==="magn" || selected ==="resolution"? 
                  <h2>カメラ</h2>
                  
                  :<></>
                }
                <CameraContext.Provider value={{ pixX, pixY, ccdSizeX, ccdSizeY, setPixX, setPixY, setCcdSizeX, setCcdSizeY }}>
                  <CameraProps/>
                </CameraContext.Provider>
              </Group>
              <Group>
                {selected ==="fov" || selected ==="wd"? 
                  <h2>レンズ</h2>
                  :<></>
                }
                <LensContext.Provider value={{ magn, focal, setMagn, setFocal}}>
                  <LensProps/>
                </LensContext.Provider>
              </Group>
              <Group>
                {selected ==="wd" || selected ==="focal" || selected ==="magn" || selected ==="resolution"? 
                  <h2>要求</h2>
                  :<></>
                }
                <RqContext.Provider value={{ wd, fovX, fovY, setWd, setFovX, setFovY}}>
                  <RequireProps/>
                </RqContext.Provider>
              </Group>
              <Group>
                <AnswerContext.Provider value={{ pixX, pixY, ccdSizeX, ccdSizeY, magn, focal, wd, fovX, fovY}}>
                  <Answer/>
                </AnswerContext.Provider>
              </Group>
            </SelectCagetegory.Provider>
            
        </Contents>
    </>
  );
}

const Contents = styled.div`
  text-align: center;
`;
const Title = styled.h1`
  margin-top:40px;
  margin-bottom:40px;
`;
const Group = styled.div`
`;


export default OptionalDesign;
