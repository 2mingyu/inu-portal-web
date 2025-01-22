import { useEffect, useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import styled from "styled-components";
import { getBooksDetail, postBooksAvailable, deleteBooks } from "apis/books";
import UploadBook from "./UploadBook";
import { Book } from "types/books";
import useUserStore from "stores/useUserStore";

interface BookDetailProps {
  bookId: number;
  onClose: () => void;
}

export default function BookDetail({ bookId, onClose }: BookDetailProps) {
  const { userInfo } = useUserStore();
  const [book, setBook] = useState<Book>({
    id: -1,
    name: "",
    author: "",
    price: 0,
    content: "",
    transactionStatus: "",
    imageCount: 0,
    image: [],
  });
  const [isEditOpen, setIsEditOpen] = useState(false);

  // 책 상세 정보 로드
  useEffect(() => {
    const fetchBookDetail = async () => {
      try {
        const response = await getBooksDetail(bookId);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book detail:", error);
      }
    };
    fetchBookDetail();
  }, [bookId]);

  // 판매 상태 변경
  const handleToggleAvailability = async () => {
    try {
      await postBooksAvailable(bookId);
      alert("판매 상태가 변경되었습니다.");
      onClose();
    } catch (error) {
      console.error("Error toggling availability:", error);
    }
  };

  // 책 삭제
  const handleDelete = async () => {
    try {
      await deleteBooks(bookId);
      alert("책이 삭제되었습니다.");
      onClose();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const handleBookUploaded = () => {
    setIsEditOpen(false);
    onClose(); // 새로고침
  };

  if (!book) return <p>Loading...</p>;

  return (
    <BottomSheet open={true} onDismiss={onClose}>
      <DetailWrapper>
        <h2>{book.name}</h2>
        <p>저자: {book.author}</p>
        <p>내용: {book.content}</p>
        <p>가격: {book.price}원</p>
        {userInfo.role == "admin" && (
          <ButtonWrapper>
            <button onClick={handleToggleAvailability}>
              {book.transactionStatus === "AVAILABLE"
                ? "판매 중지"
                : "판매 시작"}
            </button>
            <button onClick={() => setIsEditOpen(true)}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </ButtonWrapper>
        )}
      </DetailWrapper>

      <UploadBook
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onUploaded={handleBookUploaded}
        initialData={book}
      />
    </BottomSheet>
  );
}

const DetailWrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    margin: 0;
  }

  p {
    margin: 4px 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 8px 16px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:first-child {
    background-color: #007bff;
    color: white;
  }

  button:nth-child(2) {
    background-color: #ffc107;
  }

  button:last-child {
    background-color: #dc3545;
    color: white;
  }
`;
