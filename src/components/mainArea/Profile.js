import React, { useContext, useEffect, useRef, useState } from 'react'
import ProfileCard from '../featuredComponents/ProfileCard'
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

function Profile() {
    const [userDetails, setUserDetails] = useState([]);
    const [userDetailsFetched, setUserDetailsFetched] = useState(false);
    const {user} = useContext(AuthContext);

    const departmentList = [
        { department: "Computer Science" },
        { department: "BBA" },
        { department: "Environmental Science" },
        { department: "Software Engineering" },
        { department: "AI" },
      ];


    const password = useRef();
    const passwordAgain = useRef();
    const [department, setDepartment] = useState("Computer Science");
    const [aboutContent, setAboutContent] = useState("");
    let [files, setFiles] = useState()

    
    const loadUserDetails = ()=>{
        axios.post("/users/profile",{userId:user.data.user.userId}).then(response=>{
            if(response){
                // setUserDetails(response)
                setUserDetails(response.data.userDetails[0])
console.log(response.data.userDetails[0])
                setUserDetailsFetched(true);
            }
        }).catch(error=>console.log(error))
    }


    const changeDepartment = (event) =>{
        event.preventDefault();
        setDepartment(event.target.value);
        console.log(department)
    }
    const submitDepartment = (event) =>{
        event.preventDefault();
        axios.post("/users/changeDepartment",{department: department,about:aboutContent, userId: user.data.user.userId}).then((res)=>{
            toast("Department and About Updated")
        }).catch((error)=>console.log(error));
    }

    const submitChangePassword = (event) =>{
        event.preventDefault();
        if(passwordAgain.current.value !== password.current.value)
    {
      passwordAgain.current.setCustomValidity("Password don't matched!")
    }else{
        axios.post("/usersAuth/changePassword",{userId:user.data.user.userId, password:password.current.value}).then(res=>toast("Password Updated Successfully")).catch(
            (error)=>{
                console.log(error)
            }
        );
    }
    }
  const onAboutChange= (event)=>{
    event.preventDefault();
    setAboutContent(event.target.value)
  }
    useEffect(()=>{
        loadUserDetails();
        setUserDetailsFetched(false);
          
      },[])

      const fileSelectedHandler = (e) => {
        setFiles(e.target.files)
        console.log(files)
        let formData = new FormData();
  
        formData.append('imagesArray', files);
        axios.post(`/users/profilePicture/${user.data.user.userId}`,formData).then(
          response=>{
              console.log("image response from server: "+ response)
              setFiles(null)
            }
          ).catch((error)=>{
            console.log("error from inserting images post"+error)
            setFiles(null)
          }
          )
      }
      const profileChange = (e) =>{
        e.preventDefault();
        console.log("data")

      }
    return (<div>
        {(userDetails)?
            <div>
              {(userDetailsFetched)&& <ProfileCard userDetails={userDetails} />   }
        </div>
        :""}

        <div>
            <div className="p-6">
            <div className="text-xl">
                        Update Profile Picture and Cover Picture
                    </div>
            
             <div className="py-3 center mx-auto">
    <form>
  <div className="bg-white px-4 py-5 my-2 rounded-lg shadow-lg text-center w-48">
   
    <label className="cursor-pointer mt-6">
      <span className="mt-2 text-base leading-normal px-4 py-2 bg-custom-theme text-white rounded-full">Profile Picture</span>
      <input type="file" onChange={fileSelectedHandler} className="hidden" accept="image/png, image/jpg, image/jpeg"  />
    </label>
  </div>
  </form>

  <div className="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48">
   
    <label className="cursor-pointer mt-6">
      <span className="mt-2 text-base leading-normal px-4 py-2 bg-custom-theme text-white rounded-full">Cover Picture</span>
      <input type="file" className="hidden" accept="image/png, image/jpg, image/jpeg"  />
    </label>
  </div>
</div>

            </div>
                    <div>
                    <form onSubmit={submitDepartment}>
                      <div className="pb-2 pt-4 px-4">
                       <span className="text-xl"> Choose Department to update:</span>
                        <select
                    className="relative block p-4 m-4 w-80 text-lg py-1 pl-2 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                    value={department}
                    name="department"
                    onChange={changeDepartment}
                    required
                  >
                    {departmentList.map((item) => {
                      return (
                        <option value={item.department}>{item.department}</option>
                      );
                    })}
                  </select>

                  <textarea
                    onChange={onAboutChange}
                    value={aboutContent}
                      type="search"
                      className="w-full h-40 py-2 mb-2 pl-4 pr-10 text-sm bg-gray-100 border shadow-lg border-custom-theme appearance-none rounded-xl placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                      placeholder="Write here to update your about section..."
                      autoComplete="off"
                    />

                  <button type="submit" className="uppercase block w-full p-2 text-lg rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-none">Update Department and About Section</button>
                      </div>
                      </form>
                      
                      <form onSubmit={submitChangePassword}>
                          <div className="p-4">
                          <span className="text-xl">Update Password:</span>
                      <div className="pb-2 pt-4">
                        <input
                          className="block w-full p-4 text-lg rounded-xl "
                          minLength="5"
                          required
                          
                          ref={password}
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="pb-2 pt-4">
                        <input
                          className="block w-full p-4 text-lg rounded-xl "
                          minLength="5"
                          required
                          
                          ref={passwordAgain}
                          type="password"
                          name="retypePassword"
                          id="retypePassword"
                          placeholder="Retype Password"
                        />
                      </div>
                      <div className="px-4 pb-2 pt-4">
                      <button
                        type="submit"
                        className="uppercase block w-full p-2 text-lg rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-none"
                      >
                        Update Password
                      </button> 
                      
                    
                     </div>
                    </div>
                    </form>
                 
                   
                
                  
        </div></div>
        </div>
       
        )
}

export default Profile
