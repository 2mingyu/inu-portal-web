import React from "react";
import styled from "styled-components";
import Tab from "../../../mobile/components/map/Tab.tsx";
import RestroomList from "../../../mobile/components/map/RestroomList.tsx";
import SchoolList from "../../../mobile/components/map/SchoolList.tsx";
import CafeList from "../../../mobile/components/map/CafeList.tsx";
import RestaurantList from "../../../mobile/components/map/RestaurantList.tsx";
import {places, restPlaces, cafePlaces, restaurantPlaces} from "../DB.tsx";

interface BottomSheetProps {
    selectedTab?: string;
    setSelectedTab?: React.Dispatch<React.SetStateAction<string>>;
    map: any;
    sheetHeight: number; // ✅ 높이 props 추가
}

const PlaceListPanel = ({selectedTab, setSelectedTab, map, sheetHeight}: BottomSheetProps) => {
    const handleTabClick = (tab: string) => {
        setSelectedTab?.(tab);
    };

    const placesToRender =
        selectedTab === "학교" ? places :
            selectedTab === "휴게실" ? restPlaces :
                selectedTab === "카페" ? cafePlaces :
                    selectedTab === "식당" ? restaurantPlaces :
                        [];

    return (
        <PlaceListPanelWrapper style={{height: `${sheetHeight - 100}px`}}>
            <Tab handleTabClick={handleTabClick} selectedTab={selectedTab}/>
            {selectedTab === "학교" && <SchoolList placesToRender={placesToRender} map={map}/>}
            {selectedTab === "휴게실" && <RestroomList placesToRender={placesToRender} map={map}/>}
            {selectedTab === "카페" && <CafeList placesToRender={placesToRender} map={map}/>}
            {selectedTab === "식당" && <RestaurantList placesToRender={placesToRender} map={map}/>}
        </PlaceListPanelWrapper>
    );
};

export default PlaceListPanel;

// styled components
const PlaceListPanelWrapper = styled.div`
    width: 100%;
    margin: 0 20px 20px 20px;
`;
