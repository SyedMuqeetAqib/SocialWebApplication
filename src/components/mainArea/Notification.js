import React, {useContext, useEffect, useRef, useState} from 'react'
import {Link} from "react-router-dom";
import axios from "axios";
import moment from 'moment'
import { AuthContext } from "../../context/AuthContext.js";


function Notification() {
    const {user} = useContext(AuthContext);
    const [socket, setSocket] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [notifications, setNotifications] = useState([]);
    const [notificationCount, setNotificationCount] = useState(0);

    const loadNotifications= async ()=>{  
        axios.post("/postAction/notification",{userId:user.data.user.userId}).then(response=>
          {
            console.log(response)
            setNotifications(response.data.notification);
          
            setIsLoading(false);
          }).catch(err=>console.log(err));
      }

      useEffect(()=>{
        loadNotifications();
        notifications.forEach((item, index)=>{
          if(!item.hadRead){
            setNotificationCount(notificationCount + 1)
          }
        });
      },[]);

    return (
        <div>
             {notifications.length>0 ? (
                      notifications.map((item, index) => {
                        return (
                            <Link
                            to={
                              item.notificationRole == 3
                                ? "/user/" + item.userId
                                : `/post/${item.notificationPostId}`
                            }
                            className={`flex items-center my-2 rounded-xl px-4 py-3 bg-gray-200 hover:bg-gray-300 mx-2`}
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
                        )})):
                        <div className="p-4 text-xl">No Notification For Now, Stay Tuned</div>}
        </div>
                           
                      
    )
}

export default Notification
