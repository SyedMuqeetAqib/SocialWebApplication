import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';


function ProfileCard({isSearch, userDetails}) {
  
  console.log(userDetails.Followers)
  const {user, isFetching,payload, error, dispatch} = useContext(AuthContext);
  const history = useHistory();
  const [followCount, setFollowCount] = useState(userDetails.Followers);
  const [isFollowed, setIsFollowed] = useState(userDetails.followed);

  console.log(isFollowed);
  console.log("is user followed",userDetails.followed)
const gotoUrl =(userId)=>{
  console.log(userId)
  if(isSearch){
    history.push("/user/"+userId);
  }
}
console.log("data from users details",userDetails.Followers)
console.log("data of users",userDetails.userId)
console.log("data from current user",user.data.user.userId)
const handleFollow=(followingId)=>{
  console.log("follow wala buuton")
if(isFollowed){
  axios.post(`/users/unfollow/${followingId}`,{userId:user.data.user.userId}).then(
    response=>{console.log(response)
    setFollowCount(followCount-1)
    setIsFollowed(0);
    toast("You Unfollowed "+userDetails.fullName);
  }
  ).catch(error=>console.log(error))
}
else{
  axios.post(`/users/follow/${followingId}`,{userId:user.data.user.userId}).then(
    response=>{console.log(response)
      setFollowCount(followCount+1)
      setIsFollowed(1);
      toast("You are Following "+userDetails.fullName);
    }
  ).catch(error=>console.log(error))

}
setIsFollowed(!isFollowed)
}
    return (
      <div className="px-3">
        
        <div className={` rounded-2xl my-2  shadow-2xl hover:border-2 hover:border-gray-500  p-2`}>
           
              <div onClick={()=>gotoUrl(userDetails.userId)}  className={`${isSearch&&"cursor-pointer"} w-full bg-cover  rounded-t-xl bg-no-repeat bg-center`} style={{height: (isSearch)?100:200, backgroundImage: (userDetails.coverPicture)?'url('+userDetails.coverPicture+')':'url(/sampleCover.jpg)'}}>
                {/* <img className="opacity-0 w-full h-full" src={"./sampleCover.jpg"} alt /> */}
              </div>
              <div className="p-4">
                <div className="relative flex w-full">
                  {/* Avatar */}
                  <div onClick={()=>gotoUrl(userDetails.userId)}  className={`${isSearch&&"cursor-pointer"} flex flex-1`}>
                    <div style={{marginTop: '-6rem'}}>
                      <div style={{height: '9rem', width: '9rem'}} className="bg-gray-100 md rounded-full relative avatar">
                        <img style={{height: '9rem', width: '9rem'}} className="md rounded-full relative  object-cover border-4 border-gray-900" src={(userDetails.profilePicture)?""+userDetails.profilePicture:"/profileReplace.png"} alt />
                        <div className="absolute" />
                      </div>
                    </div>
                  </div>
                  {/* Follow Button */}
                  {(user.data.user.userId != userDetails.userId )&&
                  <div onClick={()=>handleFollow(userDetails.userId)}  className="flex flex-col text-right">
                    <button className={`flex justify-center transition duration-50 ease-in-out max-h-max whitespace-nowrap focus:outline-none  focus:ring  rounded-md border bg-transparent ${isFollowed?"text-gray-50 bg-custom-theme":"border-gray-500 text-gray-700 hover:border-custom-theme"}   items-center hover:shadow-lg font-bold py-2 px-4`} onClick={()=>setIsFollowed(!isFollowed)}>
                    {isFollowed?"Following":"Follow"}
                    </button>
                  </div>
                  }
                </div>
                {/* Profile info */}
                <div className="space-y-1 justify-center w-full mt-3 ml-3">
                  {/* User basic*/}
                  <div  onClick={()=>gotoUrl(userDetails.userId)} className={`${isSearch&&"cursor-pointer"}`}>
                    <h2 className="text-xl leading-6 font-bold ">{userDetails.fullName}</h2>
                    {/* <p className="text-sm leading-5 font-medium text-gray-600">@Ricardo_oRibeir</p> */}
                  </div>
                  {/* Description and others */}
                  {
                    (userDetails.aboutUser)&&
                    <div className="mt-3">
                    <p className=" leading-tight mb-2">{userDetails.aboutUser} </p>
                  </div>
                  }
                  <div className="pt-3 flex justify-start items-start w-full divide-x divide-gray-800 divide-solid">
                    <div className="text-center pr-3"><span className="font-bold ">{userDetails.Following}</span><span className="text-gray-600"> Following</span></div>
                    <div className="text-center px-3"><span className="font-bold ">{followCount}</span><span className="text-gray-600"> Followers</span></div>
                  </div>
                </div>
              </div>
              {/* <hr className="border-gray-800" /> */}
           
        </div>
        </div>
    )
}

export default ProfileCard
    