import React, { useContext, useEffect, useState } from 'react'
import ProfileCard from '../featuredComponents/ProfileCard';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';


function Follower() {

  const {user} = useContext(AuthContext);
const [follower, setFollower] = useState([]);

  const loadFollowing=()=>{  
    axios.post("/search/follower",{userId:user.data.user.userId}).then(response=>{console.log(response)
    setFollower(response.data.userDetails);
  }).catch(err=>console.log(err));
  }
    useEffect(()=>{
      loadFollowing();
    },[]);

    return (
        <div>
  {(follower)?follower.map((userData, index)=>{
  return <ProfileCard isSearch={true} userDetails={userData}/>
  }
  )
  :
  <div>
    User with name not found, please search again
  </div>
  }


        </div>
    )
}
export default Follower
