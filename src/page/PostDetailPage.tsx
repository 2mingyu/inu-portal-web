import styled from 'styled-components';
import PostContentContainer from '../container/postdetail/PostContentContainer';
import PostUtility from '../container/postdetail/PostUtilityContainer';
import PostComment from '../container/postdetail/PostCommentContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getPost from '../utils/getPost';
import { useSelector } from 'react-redux';
import DeletePostBtn from '../component/postdetail/post/deletpostbtn';
import EditPostBtn from '../component/postdetail/post/editpostbtn';
import ReturnButton from '../component/postdetail/post/ReturnButton';


interface Post {
    id: number;
    title: string;
    category: string;
    writer: string;
    content: string;
    like: number;
    scrap: number;
    view: number;
    isLiked: boolean;
    isScraped: boolean;
    hasAuthority: boolean;
    createDate: string;
    modifiedDate: string;
    imageCount: number;
    bestReplies: Replies;
    replies: Replies[];
}

interface Replies {
    id: number;
    writer: string;
    content: string;
    like: number;
    isLiked: boolean;
    isAnonymous: boolean;
    hasAuthority: boolean;
    createDate: string;
    modifiedDate: string;
    reReplies: Replies[];
}

export default function PostDetail(){
    const token = useSelector((state: any) => state.user.token);
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<Post|null>();
    const [commentUpdated, setCommentUpdated] = useState(false);
    useEffect(() => {
        if (id) {
            const fetchPost = async () => {
              const postDetail = await getPost(token, id);
              setPost(postDetail);
            };
            setCommentUpdated(false);
            fetchPost();
        }
    }, [id, commentUpdated]);

    const handlePostUpdate = () => {
        // 업데이트가 필요한 경우 여기에서 수행
        // 예: 댓글 갱신, 상태 변경 등
        setCommentUpdated(true);
    };

    const handleEditPost =() =>{
        console.log('Edit button Clicked!');
    };

    return(
        <>
        {post ? (
            <PostWrapper>
                <ReturnButton />
                <DeletePostBtn token={token} id={post.id} onPostUpdate={handlePostUpdate} /> 
                <EditPostBtn handleEditPost={handleEditPost} id={post.id}/>
                <PostContentContainer id={post.id} title={post.title} writer={post.writer} content={post.content} imageCount={post.imageCount}/>
                <PostUtility like={post.like} isLiked={post.isLiked} scrap={post.scrap} isScraped={post.isScraped}/> {/*기능버튼(스크랩, 좋아요...)*/}
                <PostComment comments={post.replies} onCommentUpdate={() => setCommentUpdated(true)}/> {/*댓글*/}
            </PostWrapper>
        ) : (
            <div>Loading...</div>
        )}
        </>
    )
}

const PostWrapper = styled.div `
    padding: 100px; // (임시)
`
