import React from 'react';
import { deletePost } from '../../../utils/API/Posts';
import { useNavigate } from 'react-router-dom';
import deletebtn from '../../../resource/assets/deletebtn.svg';
import styled from 'styled-components';

interface DeletePostBtnProps {
  token: string;
  id: string;
  onPostUpdate: () => void;
}

const DeletePostBtn: React.FC<DeletePostBtnProps> = ({
  token,
  id,
  onPostUpdate,
}) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleDeleteClick = async () => {
    const confirmDelete = window.confirm('게시글을 삭제하시겠습니까?');
    if (confirmDelete) {
      try {
        const response = await deletePost(token, id);
        if (response.status === 200) {
          // 삭제 성공 시 부모 컴포넌트에게 업데이트를 알립니다.
          onPostUpdate();
          // 삭제 후 /tips로 navigate
          navigate('/tips');
        } else if (response.status === 403) {
          alert('이 글의 삭제에 대한 권한이 없습니다.');
        } else {
          // 삭제 에러 시 알림
          alert('삭제 에러');
        }
      } catch (error) {
        console.error('삭제 에러', error);
        alert('삭제 에러');
      }
    }
  };

  return (
    <DeleteBtn onClick={handleDeleteClick}>
      <img src={deletebtn} alt='삭제 아이콘' style={{ padding: '3px' }} />
      삭제
    </DeleteBtn>
  );
};

export default DeletePostBtn;

const DeleteBtn = styled.div`
  align-items: center;
  width: 76px;
  height: 30px;
  border-radius: 10px;
  background: #EFF2F9;
  font-size: 15px;
  font-weight: 500;
  color: #757575;
  display: flex;
  justify-content: center;
`;
