import React from 'react';
import loading from '../../resource/assets/loading.svg'
import styled from 'styled-components';
import dot from '../../resource/assets/dot.svg';
import randomImg1 from '../../resource/assets/횃불-random1.svg';
import randomImg2 from '../../resource/assets/횃불-random2.svg';
import randomImg3 from '../../resource/assets/횃불-random3.svg';
import greaterthan from '../../resource/assets/greaterthan.svg';

const AiLoading: React.FC = () => {
    return (
    <AiLoadingWrapper>
    <AiPreViewer>
        <img src={dot} />
      <div>옆으로 넘기면 AI 횃불이 그림을 볼 수 있습니다.</div>
      {/*이미지 예시 추가 */}
    </AiPreViewer>
    <AiRandomImgWrapper>
        <AiRandomImgs>
            <img src={randomImg2} alt="횃불 randomImg2" />
            <img src={randomImg1} alt="횃불 randomImg1" />
            <img src={randomImg3} alt="횃불 randomImg3" />
        </AiRandomImgs>
<img src={greaterthan} alt=">" className='greaterthan'/>
    </AiRandomImgWrapper>
    <LoadingSpinner>
    <img src={loading}/>
    </LoadingSpinner>
    <LoadingTitle>
        <div className='loading-title'>AI 그림 생성중 ···</div>
    </LoadingTitle>


    </AiLoadingWrapper>
  );
};

export default AiLoading;

const AiLoadingWrapper = styled.div`

`

const AiPreViewer = styled.div`
    display: flex;
    position: absolute;
    top: 200px;
    padding: 10px 30px;
    gap: 10px;
    font-family: Inter;
    font-size: 17px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;

`
const AiRandomImgWrapper = styled.div`
    display: flex;
    position: relative;
    content-align:center;
    justify-content: center;
    top: -10%;
    .greaterthan{
        display: flex;
        position: absolute;
        left: 80%;
        top: 40%;
    }
`
const AiRandomImgs = styled.div`
    gap: 50px;
    display: flex;
`
const LoadingSpinner = styled.div`
    display: flex;
    position: relative;
    content-align:center;
    justify-content: center;
    top: 5%;
`

const LoadingTitle = styled.div`
display:flex;
content-align: center;
justify-content: flex-end;
position: relative;
.loading-title{
    width: 200px;
    height: 49px;
    border-radius: 15px;
    border: 1px solid #FFFFFF;
    font-family: Inter;
    font-size: 22px;
    font-weight: 500;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    margin-right: 30px;
}
`

