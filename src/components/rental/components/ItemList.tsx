import styled from "styled-components";
import 신난횃불이 from "resources/assets/rental/신난횃불이.png"

import {Items} from "apis/rental.ts";


export default function ItemList({selectedTab, setSelectedId, items}: {
    selectedTab: string,
    setSelectedId: (id: number) => void,
    items: Items[]
}) {
// selectedTab에 맞는 아이템만 필터링 (대소문자 무시)
    const filteredItems: Items[] = selectedTab === 'all'
        ? items
        : items.filter(item => item.itemCategory.toLowerCase() === selectedTab.toLowerCase());

    return (
        <GoodsListWrapper>
            {filteredItems.map((item, index) => (
                <div key={index} onClick={() => {
                    if (item.id != null) {
                        setSelectedId(item.id);
                    }
                }}>
                    <GoodWrapper>
                        <ImageBox src={신난횃불이}/>
                        <DescriptionBox>
                            <span className={'name'}>{item.name}</span><br/>
                            대여료 : {item.deposit}<br/>
                            총 수량 : {item.totalQuantity}
                        </DescriptionBox>
                    </GoodWrapper>
                </div>
            ))}
        </GoodsListWrapper>
    );
}


//styled components
const GoodsListWrapper = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* 화면 크기에 따라 150px 이상의 칸을 자동으로 채움 */
    margin-top: 20px;
    gap: 15px;
    justify-content: center; /* 그리드를 좌우 중앙 정렬 */

    margin-bottom: 30px;
`;


const GoodWrapper = styled.div`
    width: 150px;
    height: 170px; /* 고정된 높이 */
    border: 0.871981px solid #A5A5A5;
    border-radius: 15px;


    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
`;

const ImageBox = styled.img`
    width: 100%;
    aspect-ratio: 1 / 0.8; /* 정사각형 비율 유지 */

`;

const DescriptionBox = styled.div`
    width: 100%;
    height: fit-content; /* 내용에 맞는 높이 */
    text-align: center;

    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-align: center;
    letter-spacing: 0.871981px;

    color: #000000;


    .name {
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        text-align: center;
        letter-spacing: 0.871981px;

        color: #000000;


    }
`;
