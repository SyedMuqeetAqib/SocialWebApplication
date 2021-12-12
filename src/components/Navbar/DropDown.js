import React, {useContext, useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import {Menu} from "@headlessui/react";
import {io} from "socket.io-client";
import moment from 'moment'
import { AuthContext } from "../../context/AuthContext.js";

function DropDown() {
    const {user} = useContext(AuthContext);
    const [socket, setSocket] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);

    useEffect(()=>{
      setSocket(io("ws://localhost:8900"));
      // socket.current.emit("");
      //the above line should be distributed to like, follw, comment and post button 
      // to send socket emission on the event

    },[])

    useEffect(()=>{
      socket?.on("welcome",message=>{
        console.log(message)
      })
    },[socket])

    const loadNotifications= async ()=>{  
      axios.post("/postAction/notification",{userId:user.data.user.userId}).then(response=>
        {
          console.log(response)
          setNotifications(response.data.notification);
        
          setIsLoading(false);
        }).catch(err=>console.log(err));
    }
console.log(notifications )
console.log(notificationCount)
      useEffect(()=>{
        loadNotifications();
        notifications.forEach((item, index)=>{
          if(!item.hadRead){
            setNotificationCount(notificationCount + 1)
          }
        });
      },[]);

    const markAllasRead = (e)=>{
        e.preventDefault();
        axios.post("/postAction/notification/markAllAsRead",{userId:user.data.user.userId})
        .then(response=>{
          console.log(response);
        setNotificationCount(0);
      }
        ).catch(err=>{
          console.log(err)
        });
        return;
    }

    return (
      <>
        <div>
          <Menu as="div" className="static">
            <Menu.Button className="relative flex items-center space-x-1 cursor-pointer md:text-gray-900 font-medium tracking-widest  mr-5 md:mr-8">
              <svg
                className="h-6 w-6 fill-current mx-auto"
                height="511pt"
                viewBox="-21 1 511 511.99998"
                width="511pt"
                xmlns="http://www.w3.org/2000/svg" ><path d="m311.628906 435.773438c0 35.046874-23.644531 64.554687-55.839844 73.46875-6.488281 1.796874-13.320312 2.757812-20.375 2.757812-42.097656 0-76.226562-34.125-76.226562-76.226562l76.347656-39.234376zm0 0"
                  fill="#e58e13" /><path d="m307.941406 459.285156c-7.847656 24.21875-27.492187 43.132813-52.152344 49.957032-15.503906-4.289063-29.023437-13.351563-38.875-25.503907-7.941406-9.800781-.777343-24.453125 11.835938-24.453125zm0 0"
                  fill="#f7d360" /><path d="m432.210938 359.558594-163.761719 35.414062-229.84375-35.414062c18.035156 0 28.234375-9.433594 34.023437-25.078125 28.003906-75.523438-46.582031-295.632813 162.785156-295.632813 209.367188 0 134.769532 220.109375 162.773438 295.632813 5.800781 15.644531 15.996094 25.078125 34.023438 25.078125zm0 0"
                  fill="#f7d360" /><path d="m470.316406 397.667969c0 21.042969-17.0625 38.105469-38.105468 38.105469h-393.605469c-10.519531 0-20.050781-4.261719-26.945313-11.160157-6.898437-6.894531-11.160156-16.425781-11.160156-26.945312 0-21.046875 17.0625-38.109375 38.105469-38.109375h393.605469c10.519531 0 20.050781 4.265625 26.945312 11.160156 6.898438 6.898438 11.160156 16.425781 11.160156 26.949219zm0 0"
                  fill="#e58e13" /><path d="m398.1875 334.480469h-204.574219c-22.054687 0-39.691406-18.253907-39.007812-40.300781 2.882812-93.265626-11.992188-253.558594 79.277343-255.320313-250.535156 1.296875-90.382812 320.699219-195.269531 320.699219h393.597657c-18.027344 0-28.222657-9.433594-34.023438-25.078125zm0 0"
                  fill="#e58e13" /><path d="m470.316406 397.667969c0 21.042969-17.0625 38.105469-38.105468 38.105469h-283.480469c-10.523438 0-20.054688-4.261719-26.949219-11.160157-6.894531-6.894531-11.160156-16.425781-11.160156-26.945312 0-21.046875 17.0625-38.109375 38.109375-38.109375h283.480469c10.519531 0 20.050781 4.265625 26.945312 11.160156 6.898438 6.898438 11.160156 16.425781 11.160156 26.949219zm0 0"
                  fill="#f7d360" /><path d="m274.148438 41.765625c.082031-.960937.113281-1.933594.113281-2.917969 0-21.449218-17.394531-38.847656-38.847657-38.847656-21.460937 0-38.847656 17.398438-38.847656 38.847656 0 .984375.03125 1.957032.113282 2.917969" fill="#e58e13" />
                <g fill="#e6e6e6">
                  <path d="m424.613281 167.71875c-4.328125 0-7.835937-3.511719-7.835937-7.835938 0-36.269531-9.324219-67.222656-27.710938-92-13.726562-18.496093-27.683594-26.457031-27.820312-26.539062-3.765625-2.113281-5.121094-6.878906-3.019532-10.652344 2.101563-3.769531 6.84375-5.136718 10.621094-3.050781.667969.371094 16.535156 9.277344 32.25 30.160156 14.304688 19.007813 31.355469 52.148438 31.355469 102.082031 0 4.324219-3.511719 7.835938-7.839844 7.835938zm0 0" />
                  <path d="m459.09375 122.789062c-4.328125 0-7.835938-3.507812-7.835938-7.835937 0-50.023437-29.625-69.910156-30.886718-70.730469-3.613282-2.355468-4.660156-7.195312-2.328125-10.820312 2.335937-3.625 7.140625-4.695313 10.777343-2.378906 1.558594.988281 38.109376 24.929687 38.109376 83.929687 0 4.328125-3.507813 7.835937-7.835938 7.835937zm0 0" />
                  <path d="m46.203125 167.71875c-4.328125 0-7.835937-3.511719-7.835937-7.835938 0-49.933593 17.050781-83.074218 31.351562-102.082031 15.71875-20.882812 31.582031-29.792969 32.25-30.160156 3.789062-2.09375 8.558594-.71875 10.652344 3.070313 2.089844 3.78125.722656 8.539062-3.050782 10.636718-.308593.175782-14.171874 8.15625-27.816406 26.535156-18.390625 24.777344-27.710937 55.730469-27.710937 92-.003907 4.324219-3.511719 7.835938-7.839844 7.835938zm0 0" />
                  <path d="m11.722656 122.789062c-4.328125 0-7.835937-3.507812-7.835937-7.835937 0-59 36.554687-82.941406 38.109375-83.929687 3.652344-2.324219 8.496094-1.246094 10.820312 2.402343 2.316406 3.640625 1.253906 8.46875-2.375 10.796875-1.300781.851563-30.882812 20.746094-30.882812 70.730469 0 4.328125-3.507813 7.835937-7.835938 7.835937zm0 0" />
                </g>
              </svg>
              {(isLoading)?"":(notificationCount!=0)&&<span className="absolute top-0 right-0 bg-red-500 rounded-full h-4 w-4 text-xs">{notificationCount}</span>}
            </Menu.Button>
            {
              <Menu.Items className="overflow-y-scroll h-96 absolute md:right-10 right-0 m-2 md:min-w-max shadow-2xl rounded-xl bg-gray-100 border border-custom-theme transition delay-75 ease-in-out">
                <div className="pt-2 pl-4">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/"
                        onClick={markAllasRead}
                        className={`p-1.5 rounded-3xl cursor-pointer text-white text-xs ${
                          active ? "bg-custom-theme" : "bg-gray-300"
                        }`}
                      >
                        Mark all as Read
                      </a>
                    )}
                  </Menu.Item>
                </div>
                {isLoading ? (
                  <Menu.Item>
                    <div className="text-2xl text-center p-2">Loading..</div>
                  </Menu.Item>
                ) : (
                  <div className="py-2">
                    {/* <Menu.Items>
                  <Menu.Item>
                <div className="text-2xl text-center p-2">
                  No Notifications Yet, Stay Tuned..
                </div>
                </Menu.Item>
                </Menu.Items> */}

                    {notifications.length>0 ? (
                      notifications.map((item, index) => {
                        return (
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={
                                  item.notificationRole == 3
                                    ? "/user/" + item.userId
                                    : `/post/${item.notificationPostId}`
                                }
                                className={`flex items-center rounded-xl px-4 py-3 ${
                                  active ? "bg-gray-300" : ""} mx-2`}
                              >
                                <img
                                  className="h-8 w-8 rounded-full object-cover mx-1"
                                  src={
                                    item.profilePicture
                                      ? "" + item.profilePicture
                                      : "/profileReplace.png"
                                  }
                                  alt="avatar"
                                />
                                <p className="text-gray-600 text-sm mx-2">
                                  {item.notificationRole == 1 && (
                                    <span>
                                      <span className="font-bold">
                                        {item.fullname}
                                      </span>{" "}
                                      Liked the Your Post.
                                    </span>
                                  )}
                                  {item.notificationRole == 2 && (
                                    <span>
                                      <span className="font-bold">
                                        {item.fullname}
                                      </span>{" "}
                                      Commented the Your Post.
                                    </span>
                                  )}
                                  {item.notificationRole == 3 && (
                                    <span>
                                      <span className="font-bold">
                                        {item.fullname}
                                      </span>{" "}
                                      Started Following You.{" "}
                                    </span>
                                  )}
                                  {item.notificationRole == 4 && (
                                    <span>
                                      <span className="font-bold">
                                        {item.fullname}
                                      </span>{" "}
                                      Posted which might be Relevent for you.{" "}
                                    </span>
                                  )}
                                  {moment(item.notificationTime).fromNow()}
                                </p>
                              </Link>
                            )}
                          </Menu.Item>
                        );
                      })
                    ) : 
                      <Menu.Item>
                        <div className="text-2xl text-center p-2">
                          No Notifications Yet, Stay Tuned..
                        </div>
                      </Menu.Item>
                    }
                  </div>
                )}
              </Menu.Items>
            }
          </Menu>
        </div>
      </>
    );
}

export default DropDown;
