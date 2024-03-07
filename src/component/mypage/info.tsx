import styled from "styled-components"
import ProfileImg from "../../resource/assets/profile-logo.png"
import {  useSelector } from "react-redux"

export default function  MyInfo () {
    const nickname = useSelector((state: any) => state.user.nickname);
    return (
        <InfoWrapper>
            <MyProfileImg src={ProfileImg} alt="프로필 이미지"></MyProfileImg>
            <Nickname>{nickname}</Nickname>
        </InfoWrapper>
    )
}


const InfoWrapper = styled.div`
display: flex;
margin:49px 0 54px 104px;
`
const Nickname = styled.div`
font-family: Inter;
font-size: 25px;
font-weight: 700;
margin-left:13px;
line-height: 47px;
`

const MyProfileImg=styled.img`
`
