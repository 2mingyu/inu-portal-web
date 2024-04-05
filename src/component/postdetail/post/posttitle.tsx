import './posttitle.css'
import eyeImg from '../../../resource/assets/eye-img.png';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import DeletePostBtn from './deletpostbtn';
import EditPostBtn from './editpostbtn';
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

  const handlePostUpdate = () => {
    //
};

const handleEditPost =() =>{
    console.log('Edit button Clicked!');
};
  return (
    <div className='PostTitle'>
      <span className='titleText'>{title}</span>
      <div key={id}>
                {hasAuthority &&(
                <EditPostWrapper>
                <DeletePostBtn token={token} id={id} onPostUpdate={handlePostUpdate} /> 
                <EditPostBtn handleEditPost={handleEditPost} id={id} />
                
                </EditPostWrapper>
                )}
            </div>
      <div className='titleInfo'>
        <span className='infoText'>{createDate}</span>
        <span className='infoText'>
        <img src={eyeImg} />
        {view}</span>
        <span className='writerInfo'>{writer}</span>
      </div>
    </div>
  )
}

const EditPostWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: end;
gap: 10px;
`