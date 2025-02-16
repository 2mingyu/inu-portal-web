import styled from "styled-components";

import {Place} from "components/map/DB.tsx";


import {CafeimageMap} from "resources/assets/mapCafeImages/cafeImageManage.ts";


const CafeInfoBox = ({place}: { place: Place }) => {
    return (
        <CafeInfoBoxWrapper>
            {/* @ts-ignore */}
            <Image src={CafeimageMap[place.cafePlaceInfo?.name]} alt={`${place.cafePlaceInfo?.name}`}/>
            <Content>
                <Title>{place.cafePlaceInfo?.name}</Title>
            </Content>
        </CafeInfoBoxWrapper>
    )
}


const CafeInfoBoxWrapper = styled.div`
    background: #FFFFFF;
    border: 1px solid #C0C0C2;
    border-radius: 10px;

    display: flex;
    flex-direction: row;

    padding: 10px;
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    gap: 20px;

`

const Image = styled.img`
    width: 30%;
    aspect-ratio: 1 / 1; /* 정사각형 비율 유지 */
    border-radius: 10px;
    object-fit: cover; /* 컨테이너에 맞게 이미지 자르기 */

`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* 위아래로 요소를 나누어 배치 */
    height: 100%;
    width: 100%;
`

const Title = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    text-align: start;

    color: #324D97;
    width: 100%;
    height: fit-content;

    display: flex;
    flex-direction: row;
    gap: 5px;

`


export default CafeInfoBox;