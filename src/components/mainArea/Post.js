import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import FeedCard from '../featuredComponents/FeedCard';
import LoadingAnimatedFeedCard from '../featuredComponents/LoadingAnimatedFeedCard';

function Post() {
    const [posts, setPosts] = useState([]);
    const {handle} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        axios.get("/posts/"+handle).then(
            res=>{
                setPosts(res.data.data);
                setIsLoading(false);
            }
        ).catch(err=>{
            console.log(err)
        })
    },[handle]);

    console.log(posts[0]);
    return (
        <div>
            {(isLoading)?
            <LoadingAnimatedFeedCard/>:
            <FeedCard postDetails = {posts[0]}/>
            }
        </div>
    )
}

export default Post
