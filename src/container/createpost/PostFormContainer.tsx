import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TitleInput from '../../component/createPost/TitleInput';
import ContentInput from '../../component/createPost/ContentInput';
import CategorySelect from '../../component/createPost/CategorySelect';
import AnonymousCheckbox from '../../component/createPost/AnonymousCheckbox';
import { useSelector } from 'react-redux';
import ImageInput from '../../component/createPost/ImageInput';
import launchPost from '../../utils/launchPost';
import postImage from '../../utils/postImage';

interface PostFormProps {
  onPostSubmit: () => void;
}

const PostFormContainer: React.FC<PostFormProps> = ({ onPostSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [images, setImages] = useState<File[]>([]);

  const token = useSelector((state: any) => state.user.token); 
  const navigate = useNavigate();

  const handleTitleChange = (value: string) => {
    setTitle(value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    console.log(value)
  };

  const handleAnonymousChange = (checked: boolean) => {
    setAnonymous(checked);
  };

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
    if (file) {
      setImages((prevImages) => [...prevImages, file]);
    }
  };

  const handlePostSubmit = async () => {
    try {
      // 각 필드가 비어있지 않은지 검사
      if (!title.trim() || !content.trim()) {
        console.error('모든 필드를 입력하세요.');
        alert('제목과 내용을 모두 작성하세요.')
        return;
      }

      try {
        const response = await launchPost({ title, content, category, anonymous }, token);
        if (response) {
          console.log('Post submitted successfully');
          const postId = response.data;
            const responseImage = await postImage(token, postId, images);
            if (responseImage) {
              console.log(`이미지 등록 성공`);
            }
          }
        }
      catch (error) {
        console.log(error);
      }
      // 게시 성공 후 부모 컴포넌트에서 전달한 콜백 함수 호출
      onPostSubmit();
      navigate(`/tips`);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <div>
      <TitleInput value={title} onChange={handleTitleChange} />
      <ContentInput value={content} onChange={handleContentChange} />
      <CategorySelect value={category}  onChange={handleCategoryChange} />
      <AnonymousCheckbox checked={anonymous} onChange={handleAnonymousChange} />
      <ImageInput onImageChange={handleImageChange} />
      <button onClick={handlePostSubmit}>게시 버튼</button>
    </div>
  );
};

export default PostFormContainer;
