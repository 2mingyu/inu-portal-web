import { createGlobalStyle } from 'styled-components';
import cursorImage from '../assets/cursor.svg';

const CommonStyle = createGlobalStyle`
  //이 안에 전체 프로젝트에 적용될 css를 작성하면 됩니다~!
  * {
    font-family: 'Pretendard', sans-serif;
  }


  body{
    margin: 0;
    -ms-overflow-style: none;
    height:100vh;
    overflow: hidden;
    cursor: url(${cursorImage}), auto;
 }
 


`;

export default CommonStyle;
