import styled from "styled-components";
import { useEffect, useState } from "react";
import { getPostDetail } from "apis/posts";
import PostUtilContainer from "mobile/containers/postdetail/PostUtilContainer";
import PostContentContainer from "mobile/containers/postdetail/PostContentContainer";
import CommentListMobile from "mobile/containers/postdetail/CommentListContainer";
import { PostDetail } from "types/posts";
import axios, { AxiosError } from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function PostDetailPage() {
  const [post, setPost] = useState<PostDetail>();
  const [commentUpdated, setCommentUpdated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchPost = async (id: number) => {
    try {
      const response = await getPostDetail(id);
      setPost(response.data);
      setCommentUpdated(false);
    } catch (error) {
      console.error("게시글 가져오기 실패", error);
      // refreshError가 아닌 경우 처리
      if (
        axios.isAxiosError(error) &&
        !(error as AxiosError & { isRefreshError?: boolean }).isRefreshError &&
        error.response
      ) {
        switch (error.response.status) {
          case 404:
            alert("존재하지 않는 게시글입니다.");
            navigate(-1);
            break;
          default:
            alert("게시글 가져오기 실패");
            navigate(-1);
            break;
        }
      }
    }
  };

  useEffect(() => {
    if (location.pathname.includes("/postdetail")) {
      const params = new URLSearchParams(location.search);
      fetchPost(Number(params.get("id")) || 0);
    }
  }, [location.pathname, commentUpdated]);

  return (
    <>
      {post ? (
        <>
          <Wrapper>
            <PostTopWrapper>
              <PostUtilContainer
                id={post.id}
                like={post.like}
                isLiked={post.isLiked}
                scrap={post.scrap}
                isScraped={post.isScraped}
                hasAuthority={post.hasAuthority}
              />
            </PostTopWrapper>
            <PostWrapper>
              <PostContentContainer post={post} />
              <CommentWrapper>
                <CommentListMobile
                  postId={post.id}
                  bestReply={post.bestReplies[0]}
                  replies={post.replies}
                  onCommentUpdate={() => setCommentUpdated(true)}
                />
              </CommentWrapper>
            </PostWrapper>
          </Wrapper>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: calc(100svh - 65px);
`;
const PostTopWrapper = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
`;

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100svh - 135px);
  overflow-y: auto;
  position: relative;
  z-index: 1;
`;
const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-bottom: 20px;
  position: relative;
`;
