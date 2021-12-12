import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import FeedCard from "../featuredComponents/FeedCard.js";
import LoadingAnimatedFeedCard from "../featuredComponents/LoadingAnimatedFeedCard.js";
import CreatePost from "./newsfeed/CreatePost.js";
import { AuthContext } from "../../context/AuthContext.js";
import { useHistory } from "react-router-dom";
function UserMediaPosts() {
  const {user} = useContext(AuthContext);

const [posts, setPosts] = useState([]);


const history = useHistory();
const loadPosts = async ()=>{
  try{
    const res = await axios.get(`/posts/userMediaPosts/${user.data.user.userId}`);
    // console.log(res.data.data);
    setPosts(res.data.data);
    console.log(posts)
  }
  catch(error){
    console.log(error)
    if(error)
    {
      localStorage.removeItem('user')
      history.push("/");
    }
  }
}
useEffect(()=>{
loadPosts();
},[]);


  return (
    <div>
      <div className="">

        <CreatePost/>
      </div>
      <div>
        <div>
        </div>
        {(posts.length)?
        <>
        {
        posts.map((data, index)=>{
          return (
            <>
            <div key={index}>
          <FeedCard postDetails={data} />
          </div>
          </>
          )
        })
        }
    <div className="flex max-w-xl my-10 bg-white p-4 shadow-md rounded-xl overflow-hidden mx-4">
    <div className="flex items-center w-full text-xl">Follow more users to get posts from them. Users will post more in a while</div></div>
    {/* <LoadingAnimatedFeedCard/>
    <LoadingAnimatedFeedCard/> */}
    </>:
    <div className="text-2xl text-center p-10">
    Post More to Include in your Media Section ..
  </div>
      }
      </div>
    </div>
  );
}

export default UserMediaPosts;
