import CategorySelector from "mobile/components/common/CategorySelector";
import TipsPageTitle from "mobile/components/tips/TipsPageTitle";
import styled from "styled-components";
import { Club } from "types/club";
import { getClubs } from "apis/club";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function MobileClubPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category") || "전체";
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await getClubs(category);
        setClubs(response.data);
        console.log(response);
      } catch (error) {
        console.error("동아리 가져오기 실패", error);
      }
    };
    fetchClubs();
  }, [category]);

  return (
    <MobileClubPageWrapper>
      <TitleCategorySelectorWrapper>
        <TipsPageTitle value="동아리" />
        <CategorySelector />
      </TitleCategorySelectorWrapper>
      <ClubList>
        {clubs.map((club) => (
          <ClubCard
            key={club.name}
            onClick={() => window.open(club.url, "_blank")}
          >
            <img src={club.imageUrl} alt={club.name} />
            <div>
              <h3>{club.name}</h3>
              <h4>{club.category}</h4>
            </div>
          </ClubCard>
        ))}
      </ClubList>
    </MobileClubPageWrapper>
  );
}

const MobileClubPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 16px 0 16px;
  width: 100%;
`;

const TitleCategorySelectorWrapper = styled.div`
  width: 100%;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClubList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const ClubCard = styled.div`
  height: 48px;
  width: 96%;
  border: 2px solid #7aa7e5;
  border-radius: 10px;
  display: flex;
  gap: 16px;
  align-items: center;
  img {
    margin-left: 4px;
    height: 40px;
    border-radius: 10px;
  }
  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;

    h4 {
      margin: 0;
    }
    h3 {
      margin: 0;
    }
  }
`;
