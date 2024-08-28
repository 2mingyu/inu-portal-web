import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AiIntroContainer from "./AiIntroContainer";
import AiTitleContainer from "./AiTitleContainer";
import AiResultContainer from "./AiResultContainer";

export default function AiContainer() {
  return (
    <Container>
      <AiTitleContainer />
      <Routes>
        <Route index element={<AiIntroContainer />} />
        <Route path="result/:imageId" element={<AiResultContainer />} />
      </Routes>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  overflow-y: scroll;
  background: linear-gradient(90deg, #6084d7 0%, #c294eb 100%);
  color: white;
  border-radius: 10px;
  margin: 60px 30px 0px 30px;
`;
