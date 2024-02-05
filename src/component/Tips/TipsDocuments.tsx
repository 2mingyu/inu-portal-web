import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TipsTitle from './TipsTitle'; // TipsTitle 컴포넌트 불러오기

interface Document {
  title: string;
  author: string;
  date: string;
}

interface TipsDocumentsProps {
  selectedCategory: string;
}

export default function TipsDocuments({ selectedCategory }: TipsDocumentsProps) {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);

  const getDocuments = (category: string) => {
    // 현재 더미데이터 이용, 이곳에 백엔드에서 카테고리 가져오는 코드 작성.
    const dummyDocuments: Document[] = [
      {
        title: `Document 1 for ${category}`,
        author: '작성자 1',
        date: '2024-01-01',
      },
      {
        title: `Document 2 for ${category}`,
        author: '작성자 2',
        date: '2024-01-02',
      },
      {
        title: `Document 3 for ${category}`,
        author: '작성자 3',
        date: '2024-01-03',
      },
    ];
    setDocuments(dummyDocuments);
    console.log(selectedDocument);
  };

  const handleCategoryClick = (category: string) => {
    // TipsTitle 컴포넌트에서 받아온 카테고리를 처리
    // 필요한 로직을 추가로 작성할 수 있습니다.
    console.log(`Selected Category: ${category}`);
  };

  useEffect(() => {
    getDocuments(selectedCategory);
  }, [selectedCategory]);

  return (
    <TipsDocumentsWrapper>
      <div>
        {/* TipsTitle 컴포넌트 사용 */}
        <TipsTitle selectedCategory={selectedCategory} onCategoryClick={handleCategoryClick} />
        <div>
          {documents.map((document, index) => (
            <div key={index} onClick={() => setSelectedDocument(document)}>
              제목: {document.title} ====== 작성자: {document.author} ======
              작성일: {document.date}
            </div>
          ))}
        </div>
      </div>
    </TipsDocumentsWrapper>
  );
}

const TipsDocumentsWrapper = styled.div``;
