import MobileUtilHeader from "mobile/components/util/MobileUtilHeader";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import UploadBook from "mobile/components/util/UploadBook";
import BookList from "mobile/components/util/BookList";
import UploadLost from "mobile/components/util/UploadLost";
import LostList from "mobile/components/util/LostList";
import { useState } from "react";
import useUserStore from "stores/useUserStore";

import MobileRentalPage from "mobile/pages/MobileRentalPage.tsx";

export default function MobileUtilPage() {
  const { userInfo } = useUserStore();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  let type = params.get("type") || "book";

  const [reloadKey, setReloadKey] = useState(0);
  const [isBookUploadOpen, setIsBookUploadOpen] = useState(false);
  const [isLostUploadOpen, setIsLostUploadOpen] = useState(false);

  const handleBookUploaded = () => {
    setReloadKey((prevKey) => prevKey + 1);
    setIsBookUploadOpen(false);
  };

  const handleLostUploaded = () => {
    setReloadKey((prevKey) => prevKey + 1);
    setIsLostUploadOpen(false);
  };

  return (
    <MobileUtilPageWrapper>
      <MobileUtilHeader selectedType={type} />
      {type === "book" && (
        <>
          {userInfo.role == "admin" && (
            <button
              className="upload-button"
              onClick={() => setIsBookUploadOpen(true)}
            >
              관리자-책 등록
            </button>
          )}
          <UploadBook
            isOpen={isBookUploadOpen}
            onClose={() => {
              setIsBookUploadOpen(false);
            }}
            onUploaded={handleBookUploaded}
          />
          <BookList reloadKey={reloadKey} />
        </>
      )}
      {type === "lost" && (
        <>
          {userInfo.role == "admin" && (
            <button
              className="upload-button"
              onClick={() => setIsLostUploadOpen(true)}
            >
              관리자-분실물 등록
            </button>
          )}
          <UploadLost
            isOpen={isLostUploadOpen}
            onClose={() => {
              setIsLostUploadOpen(false);
            }}
            onUploaded={handleLostUploaded}
          />
          <LostList reloadKey={reloadKey} />
        </>
      )}
      {type === "rental" && <MobileRentalPage />}
    </MobileUtilPageWrapper>
  );
}

const MobileUtilPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;

  .upload-button {
    position: fixed;
    right: 20px;
    bottom: 100px;
    z-index: 999999;
    color: white;
    background-color: rgba(64, 113, 185, 1);
    border-radius: 100%;
    width: 64px;
    height: 64px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    img {
      height: 24px;
    }
    font-size: 12px;
  }
`;
