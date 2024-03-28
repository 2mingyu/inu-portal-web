import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import getUser from '../../utils/getUser';
import { NicknameUser as NicknameUserAction , ProfileUser as ProfileuserAction} from '../../reducer/userSlice';
import { MypageTitle } from '../../component/mypage/common/MyPageTitle';
import MyPageUserInfo from '../../component/mypage/common/MyPageUserInfo';

import SearchScrapBar from '../../component/mypage/Scrap/searchScrapBar';

interface loginInfo {
  user: {
    token: string;
  };
}
export default function MyPageTitleContainer() {
  const token = useSelector((state: loginInfo) => state.user.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) {
      navigate('/home');
    }
  }, [token, navigate]);

    useEffect(() => {
        handleUserInfo();
    }, []);


  
    const handleUserInfo = async () => {
        try {
            const response = await getUser(token);
            console.log(response,"결과뭐야");
            dispatch(NicknameUserAction({"nickname":response.nickname}));
            dispatch(ProfileuserAction({"fireId":response.fireId}));
        } catch (error) {
            console.error("회원을 가져오지 못했습니다.", error);
        }
    };

  return (
    <MyPageTitleWrapper>
      <MypageTitle/>
      <SearchInfoWrapper>
      <SearchScrapBar/>
      <MyPageUserInfo/>
      </SearchInfoWrapper>
    </MyPageTitleWrapper>
  );
}

const MyPageTitleWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const SearchInfoWrapper = styled.div`
  display: flex;
  gap:20px;
`
