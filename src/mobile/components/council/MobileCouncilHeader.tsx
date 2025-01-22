import { useNavigate } from "react-router-dom";
import useAppStateStore from "stores/useAppStateStore";
import styled from "styled-components";

interface Props {
  selectedType: string;
}

const buttons = [
  { type: "notice", label: "총학생회 공지" },
  { type: "petition", label: "총학생회 청원" },
];

export default function MobileCouncilHeader({ selectedType }: Props) {
  const navigate = useNavigate();
  const { isAppUrl } = useAppStateStore();

  return (
    <MobileCouncilHeaderWrapper>
      {buttons.map((btn) => (
        <button
          key={btn.type}
          onClick={() => navigate(`${isAppUrl}/home/council?type=${btn.type}`)}
          className={selectedType === btn.type ? "selected" : ""}
        >
          {btn.label}
        </button>
      ))}
    </MobileCouncilHeaderWrapper>
  );
}

const MobileCouncilHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 42px;
  border-bottom: 2px solid #e0e0e0;
  button {
    box-sizing: content-box;
    height: 100%;
    flex: 1;
    background-color: transparent;
    border: 0;
    border-bottom: 2px solid transparent;
    font-weight: 600;
  }
  .selected {
    color: #4071b9;
    border-bottom: 2px solid #4071b9;
  }
`;
