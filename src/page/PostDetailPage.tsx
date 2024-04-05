import styled from 'styled-components';
import PostContentContainer from '../container/postdetail/PostContentContainer';
import PostUtility from '../container/postdetail/PostUtilityContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getPost from '../utils/getPost';
import { useSelector } from 'react-redux';
import DeletePostBtn from '../component/postdetail/post/deletpostbtn';
import EditPostBtn from '../component/postdetail/post/editpostbtn';
import ReturnButton from '../component/postdetail/post/ReturnButton';
import CommentList from '../component/postdetail/comment/commentlist';
import CommentInput from '../component/postdetail/comment/commentinput';


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
    bestReplies: Replies[];
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
        <>
        <PostWrapper>
            <ReturnButton />
            <PostContentContainer id={post.id} title={post.title} createDate={post.createDate} view={post.view} writer={post.writer} content={post.content} imageCount={post.imageCount}/>
            <PostUtility like={post.like} isLiked={post.isLiked} scrap={post.scrap} isScraped={post.isScraped}/> {/*기능버튼(스크랩, 좋아요...)*/}
            <div key={post.id}>
                {post.hasAuthority &&(
                <>
                <DeletePostBtn token={token} id={post.id} onPostUpdate={handlePostUpdate} /> 
                <EditPostBtn handleEditPost={handleEditPost} id={post.id} />
                </>
                )}
            </div>
        </PostWrapper>
        <CommentWrapper>
            <CommentList bestComment={post.bestReplies[0]} comments={post.replies} onCommentUpdate={() => setCommentUpdated(true)}/>
            <CommentInput onCommentUpdate={() => setCommentUpdated(true)}></CommentInput>
        </CommentWrapper>
</>
    ) : (
            <div>Loading...</div>
        )}
    </>
    )
}

const PostWrapper = styled.div `
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const CommentWrapper = styled.div `
    border-top: solid #EAEAEA 5px;
    padding: 20px;
    padding-bottom: 120px;
`
