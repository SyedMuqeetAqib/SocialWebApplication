import React, { useContext, useEffect, useState } from 'react'
import ProfileCard from '../featuredComponents/ProfileCard';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';


function Following() {

  const {user} = useContext(AuthContext);
const [following, setFollowing] = useState([]);

  const loadFollowing=()=>{  
    axios.post("/search/following",{userId:user.data.user.userId}).then(response=>{console.log(response)
    setFollowing(response.data.userDetails);
  }).catch(err=>console.log(err));
  }
    useEffect(()=>{
      loadFollowing();
    },[]);

    return (
        <div>

  {(following)?following.map((userData, index)=>{
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
export default Following
