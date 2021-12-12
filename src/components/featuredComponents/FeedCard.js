import React, {useContext, useEffect, useState} from "react";
import moment from 'moment'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {  toast } from 'react-toastify';



const FeedCard = (props) => {

  const {user, isFetching,payload, error, dispatch} = useContext(AuthContext);
  const [isLike, setIsLike] = useState(props.postDetails.liked);
  const [commentValue, setCommentValue] = useState("");
  const [likesCount, setLikesCount] = useState(props.postDetails.like_cnt);
  const [commentCount, setCommentCount] = useState(props.postDetails.comment_cnt);
  const [postMedia, setPostMedia] = useState([]);
  const [commentDetails, setCommentDetails] = useState([[props.postDetails.lastCommentedUser,props.postDetails.commentContent,props.postDetails.commentTime]]);
  const history = useHistory();
  const sliderProperties = {
    transitionDuration: 200,
    infinite: false,
    pauseOnHover:true,
    canSwipe:true,
    autoplay:false,
    indicators:true
  };

  useEffect(()=>{
    if(props.postDetails.containMedia){
    axios.post(`/posts/postMedia`,{postId:props.postDetails.postId}).then((response)=>{
      console.log(response.data.postMedia)
      setPostMedia(response.data.postMedia);
    }).catch((error)=>{
      console.log(error)
    });
    }
  },[props.postDetails]);

  const gotoUrl =(userId)=>{
    console.log(userId)
      history.push("/user/"+userId);
  }

  const handleLikeButton = (postId)=>{
    if(isLike){
      axios.post(`/postAction/unlike/${postId}`,{userId:user.data.user.userId}).then(
        response=>{console.log(response)
        setLikesCount(likesCount-1)}
      ).catch(error=>console.log(error))
    }
    else{
      axios.post(`/postAction/like/${postId}`,{userId:user.data.user.userId,notifiedTo:props.postDetails.postedBy}).then(
        response=>{console.log(response)
          setLikesCount(likesCount+1)}
      ).catch(error=>console.log(error))
    
    }
    setIsLike(!isLike)
  }
  const handleCommentInput = (event)=>{
    event.preventDefault();
     setCommentValue(event.target.value)
  }

  const viewAllComment = (postId) =>{
    try{
      let comments = [];
      axios.get(`/postAction/allComments/${postId}`).then(
        response=>{
          console.log(response.data.allComments)
          response.data.allComments.forEach(element => {
            comments.push([element.fullName,element.commentText,element.commentTime])
          });
          setCommentDetails(comments)
          // setCommentDetails(response.data.allComments)

          // setLikesCount(likesCount+1)
        }
      ).catch(error=>console.log(error))
    }
    catch(error){
      console.log(error)
    }
  }
  const handleComment= (event) => {
    event.preventDefault();
    if(commentValue!==undefined && commentValue.length!== 0){
      console.log(commentValue);
    }
    axios.post(`/postAction/comment/${props.postDetails.postId}`,{userId:user.data.user.userId, commentContent:commentValue,notifiedTo:props.postDetails.postedBy}).then(
      response=>{console.log(response)
      setCommentCount(commentCount+1);
      setCommentValue("");
      
      }
    ).catch(error=>console.log(error));
    toast("Comment has been posted");
  }

  return (
    <>
<div className="px-2">

  <div className="flex max-w-xl my-10 bg-white shadow-md rounded-xl overflow-hidden mx-auto">
    <div className="flex items-center w-full">
      <div className="w-full">
        <div className="flex flex-row mt-2 px-2 pt-2 mx-3">
          <div className="w-auto h-auto rounded-full border-2 border-custom-theme">
            
            <img onClick={()=>gotoUrl(props.postDetails.postedBy)}
              className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
              alt="User avatar"
    
              src={(props.postDetails.profilePicture)?""+props.postDetails.profilePicture:"/profileReplace.png"}
            />
            
          </div>
          <div className="flex flex-col mb-2 ml-4 mt-1">
            <div onClick={()=>gotoUrl(props.postDetails.postedBy)} className="text-gray-600 cursor-pointer text-sm font-semibold">
              {props.postDetails.fullname ? props.postDetails.fullname : ""}
            </div>
            <div className="flex w-full mt-1">
              <div className="text-gray-700 font-base text-xs mr-1 cursor-pointer">
                Student
              </div>
              <div className="text-gray-500 font font-light text-xs">
                {
                  moment(props.postDetails.postTime).fromNow()} 
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-900 text-sm mb-0 mx-3 mt-2 px-2">
          {props.postDetails.caption}
        </div>
        {(props.postDetails.containMedia) ? 
          <>
            <div>
            
                <div className="text-gray-400 font-medium text-sm mb-2 mt-3 mx-3 px-2">
                  
                  <Slide {...sliderProperties}>
                    {postMedia.map((slideImage, index)=>{
                      return (
                    <div className="each-slide  max-h-96" key={index}>
                    <div className="text-gray-400 font-medium text-sm mb-2 mt-3">
                       <div>
                         <img className="rounded object-cover" src={slideImage.mediaPath} />
                         </div> 
                      </div>
                    </div>)
                      })}
                  </Slide>
                  <p className="text-center"> {postMedia.length} Photos</p>
                </div>
                    
             
            </div>
          </>
        :<div></div>}
        
        <div className="flex justify-start mb-4 border-t border-gray-100">
          <div className="flex w-full mt-1 pt-2 pl-5 ">
            <button
              key={props.postDetails.postDetails}
              onClick={() => handleLikeButton(props.postDetails.postId)}
              className={`flex transition duration-500 ease-in-out px-2 py-0 items-center rounded border-black h-10 ${
                isLike
                  ? "text-red-500 bg-red-300"
                  : "text-gray-100 bg-custom-theme"
              }`}
            >
              <svg
                className="h-6 w-6"
                height="512pt"
                viewBox="0 -19 512 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m364.5 0c-39.964844 0-79.421875 16.128906-108.496094 43.785156-29.078125-27.65625-68.535156-43.785156-108.503906-43.785156-82.710938 0-147.5 64.789062-147.5 147.5 0 96.671875 111.4375 203.085938 246.066406 322.136719 2.835938 2.507812 6.386719 3.761719 9.9375 3.761719 3.550782 0 7.101563-1.253907 9.9375-3.761719 134.621094-119.058594 246.058594-225.472657 246.058594-322.136719 0-82.710938-64.789062-147.5-147.5-147.5zm0 0"
                  fill="#ff4949"
                />
                <path
                  d="m364.5 0c-39.964844 0-79.421875 16.128906-108.496094 43.785156-.003906-.003906-.011718-.011718-.015625-.015625v429.628907h.015625c3.550782 0 7.101563-1.253907 9.9375-3.765626 134.621094-119.054687 246.058594-225.46875 246.058594-322.132812 0-82.710938-64.789062-147.5-147.5-147.5zm0 0"
                  fill="#f30051"
                />
              </svg>
              <span className="pl-2">{isLike ? "Liked" : "Like"}</span>
            </button>
            
          </div>
          {/* <div className="flex justify-end w-full mt-1 pt-2 pr-5">
            <span className="transition flex ease-out duration-300 hover:bg-blue-50 bg-blue-100 h-10 px-2 py-2 text-center rounded-full text-blue-600 cursor-pointer mr-2">
              <svg
                className="h-6 w-6"
                height="512pt"
                viewBox="0 0 512 512"
                width="512pt"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m495.917969 217.066406-203.71875-203.714844c-8.851563-8.859374-17.902344-13.351562-26.890625-13.351562-12.472656 0-27.039063 9.347656-27.039063 35.683594v125.605468c-62.179687 4.234376-120.03125 30.65625-164.234375 75.320313-47.742187 48.238281-74.035156 112.183594-74.035156 180.054687 0 29.234376 4.90625 57.945313 14.589844 85.335938 2.121094 5.992188 7.785156 10 14.140625 10 6.359375 0 12.023437-4.007812 14.144531-10 29.78125-84.257812 107.136719-142.988281 195.394531-149.960938v124.273438c0 26.335938 14.566407 35.683594 27.039063 35.683594 8.988281 0 18.035156-4.488282 26.890625-13.34375l203.722656-203.722656c10.367187-10.371094 16.078125-24.195313 16.078125-38.933594-.003906-14.734375-5.714844-28.5625-16.082031-38.929688zm0 0"
                  fill="#0065a3"
                />
                <path
                  d="m56.679688 256c-36.714844 45.378906-56.679688 101.527344-56.679688 160.664062 0 29.234376 4.90625 57.945313 14.589844 85.335938 2.121094 5.992188 7.785156 10 14.140625 10 6.359375 0 12.023437-4.007812 14.144531-10 29.78125-84.257812 107.136719-142.988281 195.394531-149.960938v124.273438c0 26.335938 14.566407 35.683594 27.039063 35.683594 8.988281 0 18.035156-4.488282 26.890625-13.34375l203.722656-203.722656c10.367187-10.371094 16.074219-24.195313 16.078125-38.933594h-455.320312zm0 0"
                  fill="#005183"
                />
              </svg>
              <span className="pl-2">Share</span>
            </span>
          </div> */}
        </div>
        <div className="flex w-full border-t border-gray-100">
          <div className="mt-3 mx-5 flex flex-row">
            <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
              Likes:<div className="ml-1 text-gray-500 text-ms"> {likesCount}</div>
            </div>
          </div>
          <div className="mt-3 mx-5 w-full flex justify-end">
            <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center">
              Comments: <div className="ml-1 text-gray-500 text-ms"> {commentCount}</div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
          <img
          onClick={()=>gotoUrl(props.postDetails.postedBy)}
            className="w-10 h-9 object-cover rounded-full shadow mr-2 cursor-pointer"
            alt="User avatar"
            src={(props.postDetails.profilePicture)?""+props.postDetails.profilePicture:"/profileReplace.png"}
          />

          <form onSubmit={handleComment} className="w-full">
          <input
          onChange={handleCommentInput}
          value={commentValue}
            type="search"
            className="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
            style={{ borderRadius: 25 }}
            placeholder="Post a comment..."
            autoComplete="off"
          />
          </form>
        </div>
        <div className="text-sm mb-2 px-6 text-gray-400 cursor-pointer font-medium">
          {commentCount >0
            ? <div onClick={()=>viewAllComment(props.postDetails.postId)}>View all {commentCount} comments</div>
            :"Write first comment on this post" }
        </div>
        {props.postDetails.comment_cnt>0 && (
          <div>
            {(commentDetails.map((content, index)=>{
              return <div className="px-2 pb-2">
            <div className=" border-2 rounded-xl mt-2 py-2 px-5  text-sm">
              <span className="font-medium mr-2">{content[0]}</span>
              {content[1]}. <span className="text-xs opacity-70">{
                  moment(content[2]).fromNow() }</span>
            </div>
          </div>
            }))}
          
          </div>
        )}
      </div>
    </div>
  </div>
</div>

            </>
  );
        
};

export default FeedCard;
