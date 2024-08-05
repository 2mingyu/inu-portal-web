import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMembersPosts } from "../../utils/API/Members";
import CommontTitle from "../containers/mypage/Title";
import styled from "styled-components";
import Card from "../containers/mypage/Card";
import Empty from "../components/mypage/Empty";

interface BaseContent {
  id: string;
  title: string;
  category: string;
  writer: string;
  content: string;
  createDate: string;
  modifiedDate: string;
}

interface Post extends BaseContent {
  like: number;
  scrap: number;
  view: number;
  isLiked: boolean;
  isScraped: boolean;
  hasAuthority: boolean;
  imageCount: number;
  bestReplies: Replies[];
  replies: Replies[];
}

interface Replies {
  id: number;
  writer: string;
  fireId: number;
  content: string;
  like: number;
  isLiked: boolean;
  isAnonymous: boolean;
  hasAuthority: boolean;
  createDate: string;
  modifiedDate: string;
  reReplies: Replies[];
}

export default function MobileMyPagePost() {
  const token = useSelector((state: any) => state.user.token);
  const [posts, setPosts] = useState<Post[]>([]); // Renamed to `posts`
  const [sort, setSort] = useState("date");

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    console.log(token);
    console.log("posts", posts.length); // Updated to log `posts`
  }, [posts]); // Updated dependency

  const fetchPosts = async () => {
    const response = await getMembersPosts(token, sort);
    if (response.status === 200) {
      console.log(response.body.data, "ㅎ역");
      setPosts(response.body.data);
    }
  };

  return (
    <MobileMyPagePostWrapper>
      <CommontTitle title={"내가 쓴 글"} />
      {posts.length === 0 ? (
         <Empty/>
      ) : (
        <Card post={posts} /> // Pass the array to Card
      )}
    </MobileMyPagePostWrapper>
  );
}

const MobileMyPagePostWrapper = styled.div`
  /* Add styles here */
`;

