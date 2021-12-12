import React, { useState, Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import DatePicker from "react-datepicker";
import axios from "axios";
import 'react-datepicker/dist/react-datepicker.css'
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";


function CreatePost() {
  const audience = [
    { privacy: "Followers" },
    { privacy: "Public" },
    { privacy: "Private" },
    { privacy: "Group Post" },
    { privacy: "Custom" },
  ];
  const departmentList = [
    { department: "All" },
    { department: "Computer Science" },
    { department: "BBA" },
    { department: "Environmental Science" },
    { department: "Software Engineering" },
    { department: "AI" },
  ];

  const batchList = [
    {batch:"All"},
    { batch: 2017 },
    { batch: 2018 },
    { batch: 2019 },
    { batch: 2020 },
    { batch: 2021 },
  ];



  const postTypeOptions = [
    { type: "Normal" },
    // { type: "Vote Panel" },
    { type: "Question" },
    { type: "Event" },
    { type: "Job" },
  ];

  const {user} = useContext(AuthContext);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [postContent, setPostContent] = useState("");
  const [postPrivacy, setPostPrivacy] = useState(audience[0].privacy)
  const [postType, setPostType] = useState(postTypeOptions[0].type)
  const [batch, setBatch] = useState("All")
  const [department, setDepartment] = useState("All")

  const onPostAudienceChange = (e)=>{
    e.preventDefault();
    setPostPrivacy(e.target.value);
    console.log(postPrivacy)
  }
  const onPostDepartmentChange = (e)=>{
    e.preventDefault();
    setDepartment(e.target.value);
    console.log(department)
  }
  const onPostBatchChange = (e)=>{
    e.preventDefault();
    setBatch(e.target.value);
    console.log(batch)
  }

  const onPostContentChange = (e)=>{
e.preventDefault();
setPostContent(e.target.value);
console.log(postContent)
  }
  const onPostTypeChange = (e)=>{
    e.preventDefault();
    setPostType(e.target.value);
    console.log(postType)
  }

  let [isOpen, setIsOpen] = useState(false);
  let [files, setFiles] = useState([])
  const fileSelectedHandler = (e) => {
    setFiles(e.target.files)
    console.log(files)
  }

  let [postDetails, setPostDetails] = useState({
    postType:null,
    postText:null,
    PostImages:{},
    postPrivacy:null,
    postEventDateTime:null,
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // console.log(user.data.user.userId)
  console.log(files)
  const onUpload=(event)=> {
    event.preventDefault()

    let formData = new FormData();

    for (const key of Object.keys(files)) {
        formData.append('imagesArray', files[key])
    }
 
    
    // axios.post(`/posts/postMedia/30`,formData).then(
    //                  response=>{
    //                      console.log("image response from server: "+ response)
    //                      setFiles(null)
    //                    }
    //                  ).catch((error)=>{
    //                    console.log("error from inserting images post"+error)
    //                    setFiles(null)
    //                  }
    //                  )
    //                 }

    axios.post("/posts", {
      description:postContent,
      postedBy:user.data.user.userId,
      postType:postType,
      postPrivacy:postPrivacy,
      batch:batch,
      department:department,
      containMedia:(files.length>0)
    }).then(response => {
        console.log((response))
       if(response){
         if(files.length>0){
           console.log(response.data.postId)
             axios.post(`/posts/postMedia/${response.data.postId}`,formData).then(
                 response=>{
                     console.log("image response from server: "+ response)
                     setFiles(null)
                   }
                 ).catch((error)=>{
                   console.log("error from inserting images post"+error)
                   setFiles(null)
                 }
                 )
            console.log("in media")
               }
               toast("Post has been uploaded");
        }
    }).catch((error)=>
    console.log("error from creating post"+error)
  )
    
}
  return (
    <>
      <div
        className="inset-0 flex items-center px-4 justify-center bg-opacity-80 py-2 max-w-xl my-5 shadow-md rounded-xl overflow-hidden mx-auto bg-custom-theme cursor-pointer"
        onClick={openModal}
      >
        <div className=" grid grid-rows-1 items-center w-18 mr-2">
          <span className="md:w-auto md:h-auto w-12 h-auto rounded-full bg-gray-100 border-2">
            <img
              className="md:w-12 md:h-12 w-14 h-12 object-cover rounded-full shadow cursor-pointer"
              alt="User avatar"
              src={(user.data.user.profilePicture)?""+user.data.user.profilePicture:"/profileReplace.png"}
            />
          </span>
          <div className="mr-2 mb-2 ml-2 md:w-8">
            <span className="text-gray-50 text-sm font-semibold truncate overflow-clip">
              Syed
            </span>
          </div>
        </div>
        <div className="grid grid-rows-2 items-center text-center">
          <div className="self-center w-full max-w-xl text-gray-600 focus-within:text-gray-400">
            <div
              type="search"
              className="md:w-full w-64 py-2 pl-3  truncate pr-10 text-sm bg-gray-100 border shadow-lg border-custom-theme appearance-none rounded-xl placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
              placeholder=""
              autoComplete="off"
            >
              Post Pictures, Events, Jobs, Questions here...
            </div>
          </div>
          <div className="items-center text-center justify-center">
            <span className="cursor-pointer shadow-md px-4 py-1 w-16 text-sm font-medium text-gray-700 rounded-md  hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 bg-gray-100">
              Post
            </span>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Share your Photos, Status and many more by Post...
                </Dialog.Title>
                <form onSubmit={onUpload}>
                <div className="mt-2">
                  {/* start select audience dropdown */}
                  <div className="flex align-text-top">
                    <div className="top-16 z-10">
                      {/* <DropDown listItems={audience} /> */}

                      <select
                        className="relative w-24 py-1 pl-2 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        value={postPrivacy}
                        name="crop_id"
                        onChange={(e) => onPostAudienceChange(e)}
                        required
                      >
                        {audience.map((item) => {
                          return (
                            <option value={item.privacy}>{item.privacy}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="flex w-48 z-10 absolute right-4">
                      <span className="inline text-md mr-1">
                        Post Type:
                      </span>
                      <div className="inline">
                      <select
                        className="relative py-1 pl-2 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        value={postType}
                        name="postType"
                        onChange={(e) => onPostTypeChange(e)}
                        required
                      >
                        {postTypeOptions.map((item) => {
                          return (
                            <option value={item.type}>{item.type}</option>
                          );
                        })}
                      </select>
                      </div>
                    </div>
                  </div>
                 
                  {postType == "Event" && (
                    <div className="flex py-2">
                      <div>Date and Time of Event:</div>
                      <div className="pl-2">
                        <DatePicker
                          className=" w-52 border-2 px-2 shadow-md rounded"
                          placeholderText="Set Date and Time of Event"
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          dateFormat="dd/MM/yyyy h:mm aa"
                          showTimeSelect
                          minDate={new Date()}
                          isClearable={true}
                        />
                      </div>
                    </div>
                  )}

                  {postPrivacy == "Custom" &&(
                    <>
                    <div className="pt-2">
                      <div>Filter your post to notified to specific department and batch</div>
                    Department
                    <select
                    className="relative w-24 py-1 pl-2 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                    value={department}
                    name="department"
                    onChange={(e) => onPostDepartmentChange(e)}
                    required
                  >
                    {departmentList.map((item) => {
                      return (
                        <option value={item.department}>{item.department}</option>
                      );
                    })}
                  </select>
                    Batch
                  <select
                  className="relative w-24 py-1 pl-2 pr-10 text-right bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                  value={batch}
                  name="department"
                  onChange={(e) => onPostBatchChange(e)}
                  required
                  >
                  {batchList.map((item) => {
                    return (
                      <option value={item.batch}>{item.batch}</option>
                    );
                  })}
                  </select>
                  </div>
</>
                  )

                  }

                  {/* end time picker */}
                  <div className="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <textarea
                    onChange={onPostContentChange}
                    value={postContent}
                      type="search"
                      className="w-full h-40 py-2 pl-4 pr-10 text-sm bg-gray-100 border shadow-lg border-custom-theme appearance-none rounded-xl placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue"
                      placeholder="Write here to post..."
                      autoComplete="off"
                    />
                  </div>

                  {/* upload button start */}
                  <input type="file" multiple onChange={fileSelectedHandler} />
                  {/* upload button ends */}
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-50 bg-custom-theme bg-opacity-70 border border-transparent rounded-md hover:bg-opacity-90 focus:outline-none focus:bg-opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    x
                  </button>
                  <button
                    type="submit"
                    className="inline-flex tracking-widest float-right justify-center px-4 py-2 text-sm font-medium text-gray-50 bg-custom-theme bg-opacity-70 border border-transparent rounded-md hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Post
                  </button>
                </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CreatePost;
