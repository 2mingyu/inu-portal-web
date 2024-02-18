import styled from 'styled-components';
import { Routes, Route, Outlet } from 'react-router-dom';
import TipsCatContainer from '../container/tips/TipsCatContainer';
import PostButton from '../component/tips/PostButton';
import TipsDocuments from '../component/tips/TipsDocuments';
import PostDetail from "../page/PostDetailPage";
import { useState } from 'react';

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  return (
    <TipsPageWrapper>
      <div>
        <PostButton />
        <TipsCatContainer setSelectedCategory={setSelectedCategory}/>
      </div>
      <Routes>
        <Route index element={<TipsDocuments selectedCategory={selectedCategory} />} />
        <Route path=":id" element={<PostDetail />} />
      </Routes>
    </TipsPageWrapper>
  )
}


const TipsPageWrapper = styled.div`
  padding-top: 200px; // 임시 (나중에 MainPage에서 위치 조절 필요)

  display: flex;
  flex-dicrection: row;
`