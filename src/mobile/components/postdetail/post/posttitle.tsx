import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import eyeImg from '../../../../resource/assets/eye-img.svg'
import PostLike from '../../../../component/postdetail/post/postlike';

interface PostTitleProps {
    title: string; // title prop 추가
    createDate: string;
    view: number;
    writer: string;
    id: string;
    hasAuthority: boolean;
  }
  

  
export default function PostTitle({ title, createDate, view, writer,id, hasAuthority }: PostTitleProps) {
const token = useSelector((state: any) => state.user.token);
  
  
  return (<>
    <PostTitleWrapper>
      <span className='m-title'>제목: </span>
      <span className='m-titleText'>{title}</span>
    </PostTitleWrapper>
    <Line/>

      <div className='m-PostInfo'key={id}>
                {/* {hasAuthority &&(
                <EditPostWrapper>
                  <DeletePostBtn token={token} id={id} onPostUpdate={handlePostUpdate} /> 
                  <EditPostBtn id={id} />
                </EditPostWrapper>
                )} */}

        {/* <div className='infoText'>
          <img src={datePencilImg} />{createDate}</div> */}

         
    <PostInfo>
      <img src={eyeImg} />
      <span className='viewInfo'>{view}</span>
      <span className='m-writerInfo'>{writer}</span>
    </PostInfo>
      </div>
      </>
  )
}

const PostTitleWrapper = styled.div`
.m-title, {
padding: 5px;
font-size: 15px;
font-weight: 700;
line-height: 20px;
text-align: left;
}
.m-titleText{
font-size: 15px;
font-weight: 00;
line-height: 20px;
text-align: left;
}
`
const Line = styled.div`
border-top: 1px solid #ccc; /* 1픽셀 두께의 실선 구분선, 색상은 회색 */
  margin: 0 5px;
  width: 340px;
`
const PostInfo= styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
margin-left: auto;
gap: 10px;
img {
  margin-right: 5px;
  height: 20px; /* 이미지 높이 설정 */
}

.viewInfo {
  margin-right: 10px;
  font-size: 14px;
  color: #666;
}

.m-writerInfo {
  font-size: 14px;
  color: #666;
   display: flex;
  align-items: center;
  height: 31px;
  width: auto;
  border-radius: 100px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 13px;
  font-weight: 400;
  background: #ECF4FF;

}
`;