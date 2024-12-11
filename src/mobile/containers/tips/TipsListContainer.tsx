import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import TipsCard from "mobile/components/tips/TipsCard";
import { getPostsMobile } from "apis/posts";
import { getNotices } from "apis/notices";
import { getSearch } from "apis/search";
import { Post } from "types/posts";
import { Notice } from "types/notices";
import useAppStateStore from "stores/useAppStateStore";

interface TipsListContainerProps {
  viewMode: "grid" | "list";
  docType: string;
  category: string;
  query: string;
}

interface FetchState {
  lastPostId: number | undefined;
  page: number;
}

export default function TipsListContainer({
  viewMode,
  docType,
  category,
  query,
}: TipsListContainerProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>({
    lastPostId: undefined,
    page: 1,
  });
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { isAppUrl } = useAppStateStore();

  // 초기화
  useEffect(() => {
    const scrollableDiv = document.getElementById("scrollableDiv");
    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
    setFetchState({
      lastPostId: undefined,
      page: 1,
    });
    setHasMore(true);
    setPosts([]);
    setNotices([]);
    setIsInitialLoad(true);
    // console.log("초기화 fetchData", docType, query, category, fetchState);
    fetchData();
  }, [query, docType, setPosts, setNotices, category]);

  // 첫 번째 로드 후 추가 데이터를 불러오도록 설정
  useEffect(() => {
    if (isInitialLoad) {
      if (docType === "TIPS") {
        if (fetchState.lastPostId !== undefined) {
          setIsInitialLoad(false);
          // console.log("두번째 fetchData", docType, query, category, fetchState);
          fetchData();
        }
      } else {
        if (fetchState.page !== 1) {
          setIsInitialLoad(false);
          // console.log("두번째 fetchData", docType, query, category, fetchState);
          fetchData();
        }
      }
    }
  }, [fetchState]);

  const fetchData = async () => {
    try {
      if (docType === "TIPS") {
        const response = await getPostsMobile(fetchState.lastPostId, category);
        const newPosts: Post[] = response.data;
        if (newPosts && newPosts.length > 0) {
          setPosts((prev) => [...prev, ...newPosts]);
          // lastPostId 및 페이지 수 업데이트
          const lpi = Number(newPosts[newPosts.length - 1]?.id);
          setFetchState((prev) => ({
            ...prev,
            lastPostId: Number.isNaN(lpi) ? undefined : lpi,
          }));
        } else {
          setHasMore(false);
        }
      } else if (docType === "NOTICE") {
        const response = await getNotices(category, "date", fetchState.page);
        const newNotices: Notice[] = response.data.notices;
        if (newNotices && newNotices.length > 0) {
          setNotices((prev) => [...prev, ...newNotices]);
          // lastPostId 및 페이지 수 업데이트
          setFetchState((prev) => ({
            ...prev,
            page: prev.page + 1,
          }));
        } else {
          setHasMore(false);
        }
      } else if (docType === "SEARCH" && query) {
        const response = await getSearch(query, "date", fetchState.page);
        const newPosts: Post[] = response.data.posts;
        if (newPosts && newPosts.length > 0) {
          setPosts((prev) => [...prev, ...newPosts]);
          // lastPostId 및 페이지 수 업데이트
          const lpi = Number(newPosts[newPosts.length - 1]?.id);
          setFetchState((prev) => ({
            ...prev,
            lastPostId: Number.isNaN(lpi) ? undefined : lpi,
          }));
        } else {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("게시글/공지 가져오기 실패", error);
      setHasMore(false);
    }
  };

  const handleNext = () => {
    if (!isInitialLoad && hasMore) {
      // console.log("handleNext fetchData", docType, query, category, fetchState);
      fetchData();
    }
  };

  return (
    <TipsListContainerWrapper
      id="scrollableDiv"
      $docType={docType}
      $isAppUrl={isAppUrl}
    >
      <InfiniteScroll
        key={docType}
        dataLength={posts.length}
        next={handleNext}
        hasMore={hasMore}
        loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        endMessage={
          <h4 style={{ textAlign: "center" }}>더 이상 게시물이 없습니다.</h4>
        }
        scrollableTarget="scrollableDiv"
      >
        <TipsCardWrapper $viewMode={viewMode}>
          {posts.map((p, i) => (
            <TipsCard key={i} post={p} viewMode={viewMode} docType={docType} />
          ))}

          {notices.map((n, i) => (
            <TipsCard
              key={i}
              notice={n}
              viewMode={viewMode}
              docType={docType}
            />
          ))}
        </TipsCardWrapper>
      </InfiniteScroll>
    </TipsListContainerWrapper>
  );
}

const TipsListContainerWrapper = styled.div<{
  $docType: string;
  $isAppUrl: string;
}>`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${
    ({ $docType, $isAppUrl }) =>
      $docType === "NOTICE"
        ? $isAppUrl === "/m"
          ? "calc(100svh - 72px - 64px - 16px - 32px)" // DocType이 NOTICE 일 때는 SearchForm 없음
          : "calc(100svh - 64px - 16px - 32px)" // isAppUrl이 "/app" 이면 nav는 없음
        : $isAppUrl === "/m"
        ? "calc(100svh - 72px - 64px - 16px - 32px - 16px - 49px)" // 100% 로 하면 안먹혀서 header, nav, gap, TitleCategorySelectorWrapper, SearchForm 크기 직접 빼주기
        : "calc(100svh - 64px - 16px - 32px - 16px - 49px)" // isAppUrl이 "/app" 이면 nav는 없음
  };
  overflow-y: auto;
`;

const TipsCardWrapper = styled.div<{ $viewMode: "grid" | "list" }>`
  display: ${({ $viewMode }) => ($viewMode === "grid" ? "grid" : "flex")};
  flex-direction: ${({ $viewMode }) =>
    $viewMode === "list" ? "column" : "unset"};
  gap: 8px;
  width: 100%;
  grid-template-columns: ${({ $viewMode }) =>
    $viewMode === "grid" ? "repeat(2, 1fr)" : "unset"};
`;
