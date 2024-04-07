

import { tokenUser as tokenUserAction, emailUser as emailUserAction } from "../reducer/userSlice";
import { Dispatch } from 'redux';

interface LoginData {
  email: string,
  password: string
}

const loginUser = async (dispatch: Dispatch, data: LoginData): Promise<string | void> => {
  try {
    const response = await fetch('https://portal.inuappcenter.kr/api/members/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response,'response');
    if (response.status == 400) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    else if(response.status ==401) {
      console.log("비밀번호가 틀립니다.");
      throw new Error('Wrong password');
    }
    else {
        const responseData = await response.json();
        const token = responseData['data'].accessToken;
        const tokenExpiredTime = responseData['data'].accessTokenExpiredTime;
        const refreshToken = responseData['data'].refreshToken;
        const refreshTokenExpiredTime = responseData['data'].refreshTokenExpiredTime;
        console.log("로그인 성공", token);

        localStorage.setItem('token', token);
        localStorage.setItem('tokenExpiredTime', tokenExpiredTime);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('refreshTokenExpiredTime', refreshTokenExpiredTime);
        dispatch(emailUserAction({email: data.email}));
        dispatch(tokenUserAction({token: token, tokenExpiredTime: tokenExpiredTime, refreshToken: refreshToken, refreshTokenExpiredTime: refreshTokenExpiredTime}));

        return token; 
    }
    

  } catch (error) {
    console.log("에러?", error);
    alert("다시 입력해주세요.")
    throw error;
  }
};

export default loginUser;
