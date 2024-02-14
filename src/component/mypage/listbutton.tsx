import { useState } from 'react';
import styled from 'styled-components';
import { MypageList } from '../../resource/string/mypage';
import ScrapInfo from './scrap';
import ActiveInfo from './active';
import ModifyInfo from './modify';
import DeleteInfo from './delete';

export default function MyPageListButton() {
  const [showScrapInfo, setShowScrapInfo] = useState(true); 
  const [showActvieInfo, setShowActvieInfo] = useState(false); 
  const [showModifyInfo, setShowModifyInfo] = useState(false); 
  const [showDeleteInfo, setShowDeleteInfo] = useState(false); 
  const handleBtn = (title: string) => {
      switch (title) {
        case '스크랩':
          console.log('스크랩 버튼이 클릭되었습니다.');
          setShowScrapInfo(true); 
          setShowActvieInfo(false);
          setShowModifyInfo(false);
          setShowDeleteInfo(false);
          break;
        case '내 활동':
          console.log('내 활동 버튼이 클릭되었습니다.');
          setShowScrapInfo(false); 
          setShowActvieInfo(true);
          setShowModifyInfo(false);
          setShowDeleteInfo(false);
          break;
        case '비밀번호 변경':
          console.log('비밀번호 변경 버튼이 클릭되었습니다.');
          setShowScrapInfo(false); 
          setShowActvieInfo(false);
          setShowModifyInfo(true);
          setShowDeleteInfo(false);
          break;
        case '회원탈퇴':
          console.log('회원 탈퇴 버튼이 클릭되었습니다.');
          setShowScrapInfo(false); 
          setShowActvieInfo(false);
          setShowModifyInfo(false);
          setShowDeleteInfo(true);
          break;
        default:
          break;
      }
    
  };

  return (
    <MyPageWrpper>
      <ScrapList>
      {MypageList.map((list, index) => (
          <MyPageBtnWrapper key={index} onClick={() => handleBtn(list.title)}>
            <ScrapImg src={list.img} />
            <ScrapBtn>{list.title}</ScrapBtn>
          </MyPageBtnWrapper>
      ))}
      </ScrapList>
      {showScrapInfo && <ScrapInfo />}
      {showActvieInfo && <ActiveInfo />}
      {showModifyInfo && <ModifyInfo />}
      {showDeleteInfo && <DeleteInfo />}
    </MyPageWrpper>
  );
}

const MyPageWrpper = styled.div`
  display: flex;
  justify-content: flex-start;
`
const MyPageBtnWrapper = styled.div`
  width: 100px;
  background-color: #0e4d9d;
  padding: 20px;
  border-radius: 20px;
  margin: 10px 0;
`;

const ScrapBtn = styled.button`
  background-color: #0e4d9d;
  color: white;
  border: none;
`;

const ScrapImg = styled.img``;

const ScrapList = styled.div`
  margin-right: 30px;
`