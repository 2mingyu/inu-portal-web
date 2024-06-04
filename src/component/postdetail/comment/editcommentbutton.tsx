import React from 'react';
import { putReplies } from '../../../utils/API/Replies';

interface EditCommentButtonProps {
  token: string;
  id: number;
  currentContent: string;
  isAnonymous: boolean;
  onCommentUpdate: () => void;
}

const EditCommentButton: React.FC<EditCommentButtonProps> = ({ token, id, currentContent, isAnonymous, onCommentUpdate }) => {
  const handleEditClick = async () => {
    const newContent = prompt('수정:', currentContent);
    if (newContent !== null && newContent !== currentContent) {
      try {
        const response = await putReplies(token, id, newContent, isAnonymous);
        if (response.status === 200) {
          onCommentUpdate();
        } else if (response.status === 403) {
          alert('이 댓글의 수정에 대한 권한이 없습니다.');
        } else {
          alert('수정 에러');
        }
      } catch (error) {
        console.error('수정 에러', error);
        alert('수정 에러');
      }
    }
  };

  return <span className='commentUtility' onClick={handleEditClick}>수정</span>;
};

export default EditCommentButton;
