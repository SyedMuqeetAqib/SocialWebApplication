import React, { useContext, useEffect, useState } from 'react'
import ProfileCard from '../featuredComponents/ProfileCard';
import {useParams} from "react-router-dom"
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';


function SearchResults() {

  const {user} = useContext(AuthContext);
    const {handle} = useParams();
  const [searchDetails, setSearchDetails] = useState([]);
  const loadSearch=()=>{  
    axios.post("/search",{keyword:handle,userId:user.data.user.userId}).then(response=>{console.log(response)
    setSearchDetails(response.data.userDetails);
  }).catch(err=>console.log(err));
  }
    useEffect(()=>{
      loadSearch();
    },[handle]);

    console.log(searchDetails,"From search results")
    return (
        <div>

  {(searchDetails)?searchDetails.map((userData, index)=>{
  return <ProfileCard isSearch={true} userDetails={userData}/>
  }
  )
  :
  <div>
    User with name {handle} not found, please search again
  </div>
  }


        </div>
    )
}

export default SearchResults
