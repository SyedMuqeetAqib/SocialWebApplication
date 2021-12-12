import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import FeedCard from '../featuredComponents/FeedCard';
import ProfileCard from '../featuredComponents/ProfileCard'


function User() {

const [userDetails, setUserDetails] = useState([]);
const [userPosts, setUserPosts] = useState([]);
const [userDetailsFetched, setUserDetailsFetched] = useState(false);
const {user} = useContext(AuthContext);
const {handle}=useParams();
console.log(handle)
const history = useHistory();
const loadUserDetails = ()=>{
    axios.get("/users/"+handle+"/"+user.data.user.userId).then(response=>{
        if(response){
            // setUserDetails(response)
            setUserDetails(response.data.userDetails)
            setUserPosts(response.data.userPosts)
            setUserDetailsFetched(true);
        }
    }).catch(error=>console.log(error))
}

useEffect(()=>{
  loadUserDetails();
  setUserDetailsFetched(false);
    
},[])

console.log(userDetails,"From user profile page")
    return (
        <>
        {(userDetails)?
        <div>
          {(userDetailsFetched)&&
        <div>
            <ProfileCard userDetails={userDetails} isSearch={false}/>
            
        
        <div>
        {
        userPosts.map((data, index)=>{
          return (
            <>
          <FeedCard key={index} postDetails={data}/>
          </>
          )
        })
        }
        </div>
        </div>
        }
        </div>
        :
        <div>
 
<div className=" bg-gray-100 flex items-center">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md">
      		<div className="text-5xl font-dark font-bold">404</div>
            <p
              className="text-2xl md:text-3xl font-light leading-normal"
            >Sorry we couldn't find User on this Link. </p>
          <p className="mb-8">But dont worry, you can find plenty of other users by searching them.</p>
          <div className="text-center">
          <a href="/" className="px-4inline py-2 text-sm font-medium leading-5 shadow px-2 text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-custom-theme  hover:bg-gray-700 cursor-pointer">back to NewsFeed</a>
          </div>
    </div>
      <div className="max-w-lg">
    </div>
    
  </div>
</div>
        </div>
        }
        </>
    )
    }
export default User
