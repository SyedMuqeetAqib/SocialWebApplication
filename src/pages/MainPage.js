import React from "react";
import { Switch, Route } from "react-router-dom";
import LeftSidebar from "../components/sideBars/LeftSidebar";
import RightSidebar from "../components/sideBars/RightSidebar";
import NewsFeed from "../components/mainArea/NewsFeed";
import SearchResults from "../components/mainArea/SearchResults";
import User from "../components/mainArea/User";
import Post from "../components/mainArea/Post";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "../components/mainArea/Profile";
import Following from "../components/mainArea/Following";
import Follower from "../components/mainArea/Follower";
import UserMediaPosts from "../components/mainArea/UserMediaPosts";
import Notification from "../components/mainArea/Notification";
import Events from "../components/mainArea/Events";
import FAQ from "../components/mainArea/FAQ";
import Jobs from "../components/mainArea/Jobs";


function MainPage() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-8 h-full  min-h-screen md:pt-16 pt-12 md:gap-6">
        <div className="md:col-span-2 md:w-full col-start-auto h-full md:block hidden">
          <LeftSidebar />
        </div>
        <div className=" col-span-8 md:col-span-4 rounded-xl shadow-2xl ">

          <Switch>
            <Route path="/search" exact component={NewsFeed}/>
            <Route path="/search/:handle" exact component={SearchResults}/>
            <Route path="/" exact component={NewsFeed}/>
            <Route path="/jobs" exact component={Jobs}/>
            <Route path="/faq" exact component={FAQ}/>
            <Route path="/events" exact component={Events}/>
            <Route path="/user/:handle" exact component={User}/>
            <Route path="/user/" exact component={NewsFeed}/>
            <Route path="/post/:handle" exact component={Post}/>
            <Route path="/post/" exact component={NewsFeed}/>
            <Route path="/profile" exact component={Profile}/>
            <Route path="/following" exact component={Following}/>
            <Route path="/follower" exact component={Follower}/>
            <Route path="/MyMedia" exact component={UserMediaPosts}/>
            <Route path="/notifications" exact component={Notification}/>
            
          </Switch>
        </div>
        <div className="md:col-span-2 md:w-full col-start-auto h-full md:block hidden">
          <RightSidebar />
        </div>
      </div>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
    </div>
  );
}

export default MainPage;
