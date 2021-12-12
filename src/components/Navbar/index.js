import React, { useContext, useEffect, useState } from "react";
import {  NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { logoutCall } from "../../logoutApiCall";
import "./css/main.css";
import DropDown from "./DropDown.js";

const Navbar = () => {
  const [mobileNavOptions, setMobileNavOptions] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const {user, isFetching,payload, error, dispatch} = useContext(AuthContext);
  const history = useHistory();

  const options = [
    { option: "NewsFeed" },
    { option: "Search" },
    { option: "My Profile" },
    { option: "Edit Profile" },
    { option: "Following" },
    { option: "Followers" },
    { option: "My Media" },
    { option: "Logout" },
  ];
  const onChange = (e) =>{
    e.preventDefault();
    setMobileNavOptions(e.target.value);
    console.log(mobileNavOptions)
  }

  const handleSearchInput = (event)=>{
    event.preventDefault();
    if(searchValue!==undefined)
    {
      setTimeout(setSearchValue(event.target.value),10000);
      console.log(searchValue);
    }
  }
  const handleSearchSubmit = (e)=>{
    e.preventDefault();
 
      if(searchValue){
        history.push("/search/"+searchValue);

      }

  }

  useEffect(()=>{
    if(mobileNavOptions==="NewsFeed"){
      history.push("/");
      setOpenSearch(false);
    }
    else if (mobileNavOptions ==="Search"){
      setOpenSearch(true);
    }
    else if(mobileNavOptions === "My Profile"){
      history.push("/user/"+user.data.user.userId);
      setOpenSearch(false);
    }
    else if(mobileNavOptions === "Edit Profile"){
      history.push("/profile");
      setOpenSearch(false);
    }
    else if(mobileNavOptions === "Followers"){
      history.push("/follower");
      setOpenSearch(false);
    }
    else if(mobileNavOptions === "Following"){
      history.push("/following");
      setOpenSearch(false);
    }
    else if(mobileNavOptions === "My Media"){
      history.push("/MyMedia");
      setOpenSearch(false);
    }
    else if(mobileNavOptions==="Logout"){
      logoutCall(dispatch)
      setOpenSearch(false);
    }
  },[mobileNavOptions]);
  return (
    <>
<div className="w-full fixed z-50">
  <header className="bg-gray-100 bg-opacity-90 shadow-xl rounded-b-xl">
    <nav className="flex justify-between w-full text-custom-theme font-medium p-1 items-center">
      
      <div className="flex-1 items-center">
      <a  className="md:text-lg lg:text-lg tracking-widest truncate md:ml-10" href="/"><span>AMONG SMIU</span></a>
      </div>
      
      <div className="flex-1 md:hidden items-center">
        <div className="items-center text-center align-middle">
      <select
                        className="relative rounded-full mx-4 w-28 py-1 pl-2 pr-10 text-center align-middle bg-white shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                        value={mobileNavOptions}
                        name="mobileNavOptions"
                        onChange={(e) => onChange(e)}
                        required
                      >
                        {options.map((item) => {
                          return (
                            <option value={item.option}>{item.option}</option>
                          );
                        })}
                      </select>
                      </div>
      </div>
      <div className="md:items-center md:w-auto flex-1">
        <div className="md:flex hidden tracking-widest">

          <NavLink exact activeClassName="bg-custom-theme" to="/" className="block h-11 w-12 text-center hover:bg-gray-200 rounded md:text-gray-900 font-medium tracking-widest  md:mr-10 lg:mr-14"  >
            <div className="align-middle mt-1"><svg className="h-5 w-5 fill-current mx-auto"  height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m456.832031 0h-401.667969c-30.417968 0-55.164062 24.746094-55.164062 55.167969v88.367187c0 8.28125 6.714844 15 15 15h482c8.285156 0 15-6.71875 15-15v-88.367187c0-30.421875-24.75-55.167969-55.167969-55.167969zm0 0" fill="#0065a3"/><path d="m456.832031 0h-200.832031v158.535156h241c8.285156 0 15-6.71875 15-15v-88.367187c0-30.421875-24.75-55.167969-55.167969-55.167969zm0 0" fill="#005183"/><path d="m368.464844 94.265625h-224.933594c-8.28125 0-15-6.714844-15-15 0-8.28125 6.71875-15 15-15h224.933594c8.285156 0 15 6.71875 15 15 0 8.285156-6.714844 15-15 15zm0 0" fill="#e7f0ef"/><path d="m0 143.535156v313.296875c0 30.421875 24.746094 55.167969 55.164062 55.167969h401.667969c30.417969 0 55.167969-24.746094 55.167969-55.167969v-313.296875zm0 0" fill="#e7f0ef"/><path d="m256 143.535156v368.464844h200.832031c30.417969 0 55.167969-24.746094 55.167969-55.167969v-313.296875zm0 0" fill="#c5e1e6"/><path d="m143.53125 208.867188h-64.265625c-8.28125 0-15 6.714843-15 15v64.265624c0 8.285157 6.71875 15 15 15h64.269531c8.28125 0 15-6.714843 15-15v-64.265624c-.003906-8.285157-6.71875-15-15.003906-15zm0 0" fill="#0065a3"/><g fill="#265c76"><path d="m432.730469 303.132812h-224.929688c-8.285156 0-15-6.714843-15-15 0-8.28125 6.714844-15 15-15h224.933594c8.28125 0 15 6.71875 15 15-.003906 8.285157-6.71875 15-15.003906 15zm0 0"/><path d="m432.730469 367.398438h-353.464844c-8.28125 0-15-6.714844-15-15 0-8.285157 6.71875-15 15-15h353.46875c8.28125 0 15 6.714843 15 15-.003906 8.285156-6.71875 15-15.003906 15zm0 0"/><path d="m432.730469 431.667969h-353.464844c-8.28125 0-15-6.71875-15-15 0-8.285157 6.71875-15 15-15h353.46875c8.28125 0 15 6.714843 15 15-.003906 8.28125-6.71875 15-15.003906 15zm0 0"/><path d="m432.730469 238.867188h-224.929688c-8.285156 0-15-6.71875-15-15 0-8.285157 6.714844-15 15-15h224.933594c8.28125 0 15 6.714843 15 15-.003906 8.28125-6.71875 15-15.003906 15zm0 0"/></g><path d="m383.464844 79.265625c0-8.28125-6.714844-15-15-15h-112.464844v30h112.464844c8.285156 0 15-6.714844 15-15zm0 0" fill="#c5e1e6"/><path d="m447.730469 288.132812c0-8.28125-6.714844-15-15-15h-176.730469v30h176.730469c8.285156 0 15-6.714843 15-15zm0 0" fill="#1d4659"/><path d="m432.730469 367.398438c8.285156 0 15-6.714844 15-15 0-8.285157-6.714844-15-15-15h-176.730469v30zm0 0" fill="#1d4659"/><path d="m432.730469 431.667969c8.285156 0 15-6.71875 15-15 0-8.285157-6.714844-15-15-15h-176.730469v30zm0 0" fill="#1d4659"/><path d="m447.730469 223.867188c0-8.285157-6.714844-15-15-15h-176.730469v30h176.730469c8.285156 0 15-6.71875 15-15zm0 0" fill="#1d4659"/></svg>
            <span className="text-xs">Home</span></div>
          </ NavLink>
          <NavLink exact activeClassName="bg-custom-theme" to="/jobs" className="block h-11 w-12 text-center hover:bg-gray-200 rounded  md:text-gray-900 font-medium tracking-widest  md:mr-10 lg:mr-14" >
            <div className="align-middle mt-1"><svg className="h-5 w-5 fill-current mx-auto"  id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><g><path d="m308.2 148.598c-8.805 0-15.968-7.163-15.968-15.968v-57.768c0-6.859-5.581-12.439-12.44-12.439h-87.944c-6.859 0-12.44 5.58-12.44 12.439v57.768c0 8.805-7.163 15.968-15.968 15.968s-15.968-7.163-15.968-15.968v-57.768c0-24.468 19.906-44.375 44.375-44.375h87.944c24.469 0 44.375 19.906 44.375 44.375v57.768c.002 8.805-7.161 15.968-15.966 15.968z" fill="#365e7d"/></g><g><path d="m0 188.24v205.425c0 25.306 20.515 45.82 45.82 45.82h326.351c25.306 0 45.82-20.515 45.82-45.82v-205.425z" fill="#ddb7a0"/><path d="m425.82 109.499h-65.238c25.306 0 45.82 20.515 45.82 45.82v238.346c0 25.306-20.515 45.82-45.82 45.82h65.238c25.306 0 45.82-20.515 45.82-45.82v-238.346c0-25.306-20.514-45.82-45.82-45.82z" fill="#d6a889"/><path d="m417.992 264.867v-109.548c0-25.306-20.515-45.82-45.82-45.82h-326.352c-25.306 0-45.82 20.515-45.82 45.82v31.867c0 45.856 37.173 83.029 83.029 83.029h305.582c10.345 0 20.247-1.892 29.381-5.348z" fill="#cc9675"/><path d="m425.82 109.499h-65.238c25.306 0 45.82 20.515 45.82 45.82v112.965c37.303-8.147 65.238-41.352 65.238-81.098v-31.867c0-25.306-20.514-45.82-45.82-45.82z" fill="#c4845c"/></g></g></g><g><path d="m105.396 327.233c-11.826 0-21.412-9.586-21.412-21.412v-49.762c0-11.826 9.586-21.412 21.412-21.412 11.826 0 21.412 9.586 21.412 21.412v49.762c0 11.825-9.587 21.412-21.412 21.412z" fill="#f4fbff"/><path d="m83.984 289.797v16.024c0 11.826 9.586 21.412 21.412 21.412 11.826 0 21.412-9.587 21.412-21.412v-16.024z" fill="#e4f6ff"/></g><g><g><g><path d="m283.466 338.442h31.08v65.101h-31.08z" fill="#f4fbff" transform="matrix(.707 .707 -.707 .707 349.908 -102.768)"/><path d="m282.198 416.384-28.584-28.584-8.909 3.181-49.114 49.114c-9.475 9.475-9.475 24.836 0 34.311s24.836 9.475 34.311 0l49.114-49.114z" fill="#407093"/><path d="m292.911 398.324-21.236-21.236c-3.61-3.611-9.464-3.611-13.075 0l-13.894 13.895 34.311 34.311 13.895-13.895c3.61-3.611 3.61-9.465-.001-13.075z" fill="#4a80aa"/><circle cx="391.687" cy="278.311" fill="#e4f6ff" r="120.313"/><circle cx="391.687" cy="278.311" fill="#cbe2ff" r="85.074"/><path d="m451.844 218.155c-25.083-25.083-61.927-31.216-92.776-18.425 10.012 4.151 19.397 10.284 27.537 18.425 33.224 33.223 33.224 87.089 0 120.313-8.141 8.141-17.525 14.274-27.537 18.425 30.849 12.791 67.693 6.658 92.776-18.425 33.223-33.224 33.223-87.09 0-120.313z" fill="#bed8fb"/></g></g></g></g></g></svg>
            <span className="text-xs">Jobs</span></div>
          </ NavLink>
          <NavLink exact activeClassName="bg-custom-theme" to="/faq" className="block h-11 w-12 text-center hover:bg-gray-200 rounded  md:text-gray-900 font-medium tracking-widest  md:mr-10 lg:mr-14"  >
            <div className="align-middle mt-1"><svg className="h-5 w-5 fill-current mx-auto" height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m200 328v32l-87.175781 29.054688c-19.601563 6.539062-32.824219 24.882812-32.824219 45.546874v53.398438h336v-53.398438c0-20.664062-13.222656-39-32.824219-45.539062l-87.175781-29.0625v-32zm0 0" fill="#b4dd7f"/><path d="m200 320h96v88h-96zm0 0" fill="#f0d0b4"/><path d="m296 360-48 48 56 40 16-80zm0 0" fill="#e6e9ed"/><path d="m200 360 48 48-56 40-16-80zm0 0" fill="#e6e9ed"/><path d="m352 488v-40l16 40zm0 0" fill="#a0d468"/><path d="m144 488v-40l-16 40zm0 0" fill="#a0d468"/><path d="m200 347.015625c14.136719 8.207031 30.503906 12.984375 48 12.984375s33.863281-4.777344 48-12.984375v-27.015625h-96zm0 0" fill="#ecc19c"/><path d="m136 248v-64c0-35.28125 16.3125-66.753906 41.816406-87.289062 10.574219-8.511719 23.167969-14.160157 36.40625-17.125 22.242188-4.992188 45.3125-4.992188 67.554688 0 13.238281 2.972656 25.839844 8.613281 36.40625 17.125 25.503906 20.535156 41.816406 52.007812 41.816406 87.289062v64zm0 0" fill="#b27946"/><path d="m168 168v96c0 44.183594 35.816406 80 80 80s80-35.816406 80-80v-96zm0 0" fill="#f0d0b4"/><path d="m168 216c-17.671875 0-32 14.328125-32 32s14.328125 32 32 32h160c17.671875 0 32-14.328125 32-32s-14.328125-32-32-32zm0 0" fill="#f0d0b4"/><path d="m327.222656 223.847656c-25.824218-5.167968-50.160156-16.046875-71.222656-31.847656-5.039062 10.070312-5.039062 21.929688 0 32l-16.398438-2.34375c-25.984374-3.710938-50.609374-13.914062-71.601562-29.65625l-8-40h176zm0 0" fill="#b27946"/><path d="m216 240c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"/><path d="m296 240c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"/><path d="m248 312c17.648438 0 32-14.351562 32-32h-16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16h-16c0 17.648438 14.351562 32 32 32zm0 0"/><path d="m385.710938 381.480469-81.710938-27.25v-22.40625c13.6875-11.320313 23.824219-26.726563 28.710938-44.304688 19.816406-2.359375 35.289062-19.078125 35.289062-39.519531v-64c0-46.089844-26.910156-88.65625-68.566406-108.449219l-6.867188 14.457031c36.105469 17.152344 59.433594 54.046876 59.433594 93.992188v32.207031c-4.671875-3.535156-10.054688-6.183593-16-7.390625v-16.816406h-16v21.976562c-21.304688-5.480468-41.617188-15.199218-59.199219-28.375l-7.664062-5.753906-4.289063 8.566406c-4.023437 8.050782-5.40625 17.128907-4.144531 25.882813l-3.96875-.570313c-23.277344-3.320312-45.550781-12.285156-64.726563-25.886718v-19.839844h-16v40.808594c-5.945312 1.214844-11.328124 3.855468-16 7.390625v-32.199219c0-39.945312 23.328126-76.839844 59.433594-93.992188l-6.867187-14.457031c-41.664063 19.792969-68.574219 62.359375-68.574219 108.449219v64c0 20.441406 15.472656 37.160156 35.289062 39.519531 4.886719 17.578125 15.023438 32.984375 28.710938 44.304688v22.40625l-81.703125 27.242187c-22.914063 7.632813-38.296875 28.984375-38.296875 53.121094v61.40625h352v-61.40625c0-24.136719-15.382812-45.488281-38.289062-53.113281zm-74.941407-8.128907-12.195312 60.945313-38.246094-27.320313 37.824219-37.824218zm41.230469-125.351562c0 10.535156-6.871094 19.414062-16.335938 22.632812.167969-2.199218.335938-4.394531.335938-6.632812v-38.527344c9.289062 3.3125 16 12.113282 16 22.527344zm-208 0c0-10.414062 6.710938-19.214844 16-22.527344v38.527344c0 2.238281.167969 4.433594.335938 6.632812-9.464844-3.21875-16.335938-12.097656-16.335938-22.632812zm32 16v-57.015625c19.039062 11.648437 40.335938 19.429687 62.464844 22.589844l31.519531 4.496093-6.832031-13.65625c-2.425782-4.839843-3.335938-10.261718-2.746094-15.542968 18.128906 11.914062 38.480469 20.464844 59.585938 25.394531v33.734375c0 39.703125-32.304688 72-72 72-39.695313 0-71.992188-32.296875-71.992188-72zm72 88c14.40625 0 27.984375-3.550781 40-9.710938v14.398438l-40 40-40-40v-14.398438c12.015625 6.160157 25.59375 9.710938 40 9.710938zm-50.160156 17.152344 37.824218 37.824218-38.25 27.320313-12.191406-60.945313zm210.160156 110.847656h-48v-32h-16v32h-192v-32h-16v32h-48v-45.40625c0-17.242188 10.992188-32.496094 27.351562-37.945312l54.585938-18.191407 16.648438 83.246094 61.414062-43.871094 61.414062 43.871094 16.648438-83.246094 54.585938 18.191407c16.359374 5.457031 27.351562 20.703124 27.351562 37.945312zm0 0"/><path d="m456 0c-22.054688 0-40 17.945312-40 40v16h16v-16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40zm0 0"/><path d="m448 136h16v16h-16zm0 0"/><path d="m424 160c-22.054688 0-40 17.945312-40 40v16h16v-16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40zm0 0"/><path d="m416 296h16v16h-16zm0 0"/><path d="m224 40c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v16h16zm0 0"/><path d="m240 136h16v16h-16zm0 0"/><path d="m48 40c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v16h16zm0 0"/><path d="m64 136h16v16h-16zm0 0"/><path d="m80 200c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v16h16v-16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187zm0 0"/><path d="m32 296h16v16h-16zm0 0"/></svg>
            <span className="text-xs">FAQ</span></div>
          </ NavLink>
          <NavLink exact activeClassName="bg-custom-theme" to="/events" className="block h-11 w-12 text-center hover:bg-gray-200 rounded  md:text-gray-900 font-medium tracking-wide" >
            <div className="align-middle mt-1"><svg className="h-5 w-5 fill-current mx-auto" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m512 110v332c0 24.81-20.19 45-45 45h-422c-24.81 0-45-20.19-45-45v-332c0-24.81 20.19-45 45-45h422c24.81 0 45 20.19 45 45z" fill="#eef4ff"/><path d="m512 110v332c0 24.81-20.19 45-45 45h-211v-422h211c24.81 0 45 20.19 45 45z" fill="#d9e6fc"/><path d="m512 110v74c0 8.28-6.72 15-15 15h-482c-8.28 0-15-6.72-15-15v-74c0-24.81 20.19-45 45-45h422c24.81 0 45 20.19 45 45z" fill="#dd5958"/><path d="m512 110v74c0 8.28-6.72 15-15 15h-241v-134h211c24.81 0 45 20.19 45 45z" fill="#d8225b"/><path d="m96 135c-8.284 0-15-6.716-15-15v-80c0-8.284 6.716-15 15-15s15 6.716 15 15v80c0 8.284-6.716 15-15 15z" fill="#ffe278"/><path d="m271 40v80c0 8.28-6.72 15-15 15s-15-6.72-15-15v-80c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#ffe278"/><path d="m271 40v80c0 8.28-6.72 15-15 15v-110c8.28 0 15 6.72 15 15z" fill="#ffb454"/><path d="m416 135c-8.284 0-15-6.716-15-15v-80c0-8.284 6.716-15 15-15s15 6.716 15 15v80c0 8.284-6.716 15-15 15z" fill="#ffb454"/><g fill="#425796"><path d="m144 279h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m144 343h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m144 407h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m287 264c0 8.28-6.72 15-15 15h-32c-8.28 0-15-6.72-15-15s6.72-15 15-15h32c8.28 0 15 6.72 15 15z"/></g><path d="m287 264c0 8.28-6.72 15-15 15h-16v-30h16c8.28 0 15 6.72 15 15z" fill="#283758"/><path d="m287 328c0 8.28-6.72 15-15 15h-32c-8.28 0-15-6.72-15-15s6.72-15 15-15h32c8.28 0 15 6.72 15 15z" fill="#425796"/><path d="m272 343h-16v-30h16c8.28 0 15 6.72 15 15s-6.72 15-15 15z" fill="#283758"/><path d="m287 392c0 8.28-6.72 15-15 15h-32c-8.28 0-15-6.72-15-15s6.72-15 15-15h32c8.28 0 15 6.72 15 15z" fill="#425796"/><path d="m287 392c0 8.28-6.72 15-15 15h-16v-30h16c8.28 0 15 6.72 15 15z" fill="#283758"/><path d="m400 279h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#283758"/><path d="m400 343h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#283758"/><path d="m400 407h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#283758"/></g></svg>
            <span className="text-xs">Events</span></div>
          </ NavLink>

        </div>
       
      </div>
      <div className="flex-1 align-middle">
      <div className="flex text-sm md:pr-15 md:pr-12 items-center justify-end" v-else>

         <DropDown/>
        
          <a className="block md:text-gray-900 font-medium tracking-widest  mr-5" href="/link">
          
          </a>
        </div>
        </div>
    </nav>
    {(openSearch)&&
    <form onSubmit={handleSearchSubmit}>

              <input
                type="search"
                onChange={handleSearchInput}
                value={searchValue}
                className=" w-11/12  ml-4 pr-2 text-sm order bg-gray-200 border-transparent appearance-none rounded-tg placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue rounded-xl text-gray-700 leading-tight focus:outline-none py-2 my-2 px-2"
                style={{ borderRadius: 25 }}
                placeholder="Search..."
                autoComplete="off"
                /> 
            </form>
}
  </header>

  <div className="bottomNav fixed bottom-0 w-full bg-gray-100 ">
    <nav className="md:hidden bottom-0 w-full text-xs transition-shadow shadow-inner border-t rounded-t-xl">
      <ul className="flex justify-around items-center text-white text-center text-xs font-medium">
        
        <NavLink activeClassName="bg-custom-theme rounded-md " exact to="/" className="block md:text-gray-900 font-medium tracking-widest "  href="/link">
        <li className="px-3 py-2 hover:bg-gray-100">
            <svg className="h-5 w-5 fill-current mx-auto"  height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m456.832031 0h-401.667969c-30.417968 0-55.164062 24.746094-55.164062 55.167969v88.367187c0 8.28125 6.714844 15 15 15h482c8.285156 0 15-6.71875 15-15v-88.367187c0-30.421875-24.75-55.167969-55.167969-55.167969zm0 0" fill="#0065a3"/><path d="m456.832031 0h-200.832031v158.535156h241c8.285156 0 15-6.71875 15-15v-88.367187c0-30.421875-24.75-55.167969-55.167969-55.167969zm0 0" fill="#005183"/><path d="m368.464844 94.265625h-224.933594c-8.28125 0-15-6.714844-15-15 0-8.28125 6.71875-15 15-15h224.933594c8.285156 0 15 6.71875 15 15 0 8.285156-6.714844 15-15 15zm0 0" fill="#e7f0ef"/><path d="m0 143.535156v313.296875c0 30.421875 24.746094 55.167969 55.164062 55.167969h401.667969c30.417969 0 55.167969-24.746094 55.167969-55.167969v-313.296875zm0 0" fill="#e7f0ef"/><path d="m256 143.535156v368.464844h200.832031c30.417969 0 55.167969-24.746094 55.167969-55.167969v-313.296875zm0 0" fill="#c5e1e6"/><path d="m143.53125 208.867188h-64.265625c-8.28125 0-15 6.714843-15 15v64.265624c0 8.285157 6.71875 15 15 15h64.269531c8.28125 0 15-6.714843 15-15v-64.265624c-.003906-8.285157-6.71875-15-15.003906-15zm0 0" fill="#0065a3"/><g fill="#265c76"><path d="m432.730469 303.132812h-224.929688c-8.285156 0-15-6.714843-15-15 0-8.28125 6.714844-15 15-15h224.933594c8.28125 0 15 6.71875 15 15-.003906 8.285157-6.71875 15-15.003906 15zm0 0"/><path d="m432.730469 367.398438h-353.464844c-8.28125 0-15-6.714844-15-15 0-8.285157 6.71875-15 15-15h353.46875c8.28125 0 15 6.714843 15 15-.003906 8.285156-6.71875 15-15.003906 15zm0 0"/><path d="m432.730469 431.667969h-353.464844c-8.28125 0-15-6.71875-15-15 0-8.285157 6.71875-15 15-15h353.46875c8.28125 0 15 6.714843 15 15-.003906 8.28125-6.71875 15-15.003906 15zm0 0"/><path d="m432.730469 238.867188h-224.929688c-8.285156 0-15-6.71875-15-15 0-8.285157 6.714844-15 15-15h224.933594c8.28125 0 15 6.714843 15 15-.003906 8.28125-6.71875 15-15.003906 15zm0 0"/></g><path d="m383.464844 79.265625c0-8.28125-6.714844-15-15-15h-112.464844v30h112.464844c8.285156 0 15-6.714844 15-15zm0 0" fill="#c5e1e6"/><path d="m447.730469 288.132812c0-8.28125-6.714844-15-15-15h-176.730469v30h176.730469c8.285156 0 15-6.714843 15-15zm0 0" fill="#1d4659"/><path d="m432.730469 367.398438c8.285156 0 15-6.714844 15-15 0-8.285157-6.714844-15-15-15h-176.730469v30zm0 0" fill="#1d4659"/><path d="m432.730469 431.667969c8.285156 0 15-6.71875 15-15 0-8.285157-6.714844-15-15-15h-176.730469v30zm0 0" fill="#1d4659"/><path d="m447.730469 223.867188c0-8.285157-6.714844-15-15-15h-176.730469v30h176.730469c8.285156 0 15-6.71875 15-15zm0 0" fill="#1d4659"/></svg>
            <span className="text-xs text-gray-800">Home</span>
            </li>
          </NavLink>
        
        
        <NavLink activeClassName="bg-custom-theme rounded-md" exact to="/jobs" className="block md:text-gray-900 font-medium tracking-widest " href="/link">
        <li className="px-4 py-2 hover:bg-gray-100">
            <svg className="h-5 w-5 fill-current mx-auto"  id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><g><g><path d="m308.2 148.598c-8.805 0-15.968-7.163-15.968-15.968v-57.768c0-6.859-5.581-12.439-12.44-12.439h-87.944c-6.859 0-12.44 5.58-12.44 12.439v57.768c0 8.805-7.163 15.968-15.968 15.968s-15.968-7.163-15.968-15.968v-57.768c0-24.468 19.906-44.375 44.375-44.375h87.944c24.469 0 44.375 19.906 44.375 44.375v57.768c.002 8.805-7.161 15.968-15.966 15.968z" fill="#365e7d"/></g><g><path d="m0 188.24v205.425c0 25.306 20.515 45.82 45.82 45.82h326.351c25.306 0 45.82-20.515 45.82-45.82v-205.425z" fill="#ddb7a0"/><path d="m425.82 109.499h-65.238c25.306 0 45.82 20.515 45.82 45.82v238.346c0 25.306-20.515 45.82-45.82 45.82h65.238c25.306 0 45.82-20.515 45.82-45.82v-238.346c0-25.306-20.514-45.82-45.82-45.82z" fill="#d6a889"/><path d="m417.992 264.867v-109.548c0-25.306-20.515-45.82-45.82-45.82h-326.352c-25.306 0-45.82 20.515-45.82 45.82v31.867c0 45.856 37.173 83.029 83.029 83.029h305.582c10.345 0 20.247-1.892 29.381-5.348z" fill="#cc9675"/><path d="m425.82 109.499h-65.238c25.306 0 45.82 20.515 45.82 45.82v112.965c37.303-8.147 65.238-41.352 65.238-81.098v-31.867c0-25.306-20.514-45.82-45.82-45.82z" fill="#c4845c"/></g></g></g><g><path d="m105.396 327.233c-11.826 0-21.412-9.586-21.412-21.412v-49.762c0-11.826 9.586-21.412 21.412-21.412 11.826 0 21.412 9.586 21.412 21.412v49.762c0 11.825-9.587 21.412-21.412 21.412z" fill="#f4fbff"/><path d="m83.984 289.797v16.024c0 11.826 9.586 21.412 21.412 21.412 11.826 0 21.412-9.587 21.412-21.412v-16.024z" fill="#e4f6ff"/></g><g><g><g><path d="m283.466 338.442h31.08v65.101h-31.08z" fill="#f4fbff" transform="matrix(.707 .707 -.707 .707 349.908 -102.768)"/><path d="m282.198 416.384-28.584-28.584-8.909 3.181-49.114 49.114c-9.475 9.475-9.475 24.836 0 34.311s24.836 9.475 34.311 0l49.114-49.114z" fill="#407093"/><path d="m292.911 398.324-21.236-21.236c-3.61-3.611-9.464-3.611-13.075 0l-13.894 13.895 34.311 34.311 13.895-13.895c3.61-3.611 3.61-9.465-.001-13.075z" fill="#4a80aa"/><circle cx="391.687" cy="278.311" fill="#e4f6ff" r="120.313"/><circle cx="391.687" cy="278.311" fill="#cbe2ff" r="85.074"/><path d="m451.844 218.155c-25.083-25.083-61.927-31.216-92.776-18.425 10.012 4.151 19.397 10.284 27.537 18.425 33.224 33.223 33.224 87.089 0 120.313-8.141 8.141-17.525 14.274-27.537 18.425 30.849 12.791 67.693 6.658 92.776-18.425 33.223-33.224 33.223-87.09 0-120.313z" fill="#bed8fb"/></g></g></g></g></g></svg>
            <span className="text-xs text-gray-800">Jobs</span>
            </li>
          </NavLink>
        
        
        <NavLink activeClassName="bg-custom-theme rounded-md " exact to="/faq" className="block md:text-gray-900 font-medium tracking-widest "  href="/link">
        <li className="px-5 py-2 hover:bg-gray-100">
            <svg className="h-5 w-5 fill-current mx-auto" height="496pt" viewBox="0 0 496 496" width="496pt" xmlns="http://www.w3.org/2000/svg"><path d="m200 328v32l-87.175781 29.054688c-19.601563 6.539062-32.824219 24.882812-32.824219 45.546874v53.398438h336v-53.398438c0-20.664062-13.222656-39-32.824219-45.539062l-87.175781-29.0625v-32zm0 0" fill="#b4dd7f"/><path d="m200 320h96v88h-96zm0 0" fill="#f0d0b4"/><path d="m296 360-48 48 56 40 16-80zm0 0" fill="#e6e9ed"/><path d="m200 360 48 48-56 40-16-80zm0 0" fill="#e6e9ed"/><path d="m352 488v-40l16 40zm0 0" fill="#a0d468"/><path d="m144 488v-40l-16 40zm0 0" fill="#a0d468"/><path d="m200 347.015625c14.136719 8.207031 30.503906 12.984375 48 12.984375s33.863281-4.777344 48-12.984375v-27.015625h-96zm0 0" fill="#ecc19c"/><path d="m136 248v-64c0-35.28125 16.3125-66.753906 41.816406-87.289062 10.574219-8.511719 23.167969-14.160157 36.40625-17.125 22.242188-4.992188 45.3125-4.992188 67.554688 0 13.238281 2.972656 25.839844 8.613281 36.40625 17.125 25.503906 20.535156 41.816406 52.007812 41.816406 87.289062v64zm0 0" fill="#b27946"/><path d="m168 168v96c0 44.183594 35.816406 80 80 80s80-35.816406 80-80v-96zm0 0" fill="#f0d0b4"/><path d="m168 216c-17.671875 0-32 14.328125-32 32s14.328125 32 32 32h160c17.671875 0 32-14.328125 32-32s-14.328125-32-32-32zm0 0" fill="#f0d0b4"/><path d="m327.222656 223.847656c-25.824218-5.167968-50.160156-16.046875-71.222656-31.847656-5.039062 10.070312-5.039062 21.929688 0 32l-16.398438-2.34375c-25.984374-3.710938-50.609374-13.914062-71.601562-29.65625l-8-40h176zm0 0" fill="#b27946"/><path d="m216 240c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"/><path d="m296 240c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"/><path d="m248 312c17.648438 0 32-14.351562 32-32h-16c0 8.824219-7.175781 16-16 16s-16-7.175781-16-16h-16c0 17.648438 14.351562 32 32 32zm0 0"/><path d="m385.710938 381.480469-81.710938-27.25v-22.40625c13.6875-11.320313 23.824219-26.726563 28.710938-44.304688 19.816406-2.359375 35.289062-19.078125 35.289062-39.519531v-64c0-46.089844-26.910156-88.65625-68.566406-108.449219l-6.867188 14.457031c36.105469 17.152344 59.433594 54.046876 59.433594 93.992188v32.207031c-4.671875-3.535156-10.054688-6.183593-16-7.390625v-16.816406h-16v21.976562c-21.304688-5.480468-41.617188-15.199218-59.199219-28.375l-7.664062-5.753906-4.289063 8.566406c-4.023437 8.050782-5.40625 17.128907-4.144531 25.882813l-3.96875-.570313c-23.277344-3.320312-45.550781-12.285156-64.726563-25.886718v-19.839844h-16v40.808594c-5.945312 1.214844-11.328124 3.855468-16 7.390625v-32.199219c0-39.945312 23.328126-76.839844 59.433594-93.992188l-6.867187-14.457031c-41.664063 19.792969-68.574219 62.359375-68.574219 108.449219v64c0 20.441406 15.472656 37.160156 35.289062 39.519531 4.886719 17.578125 15.023438 32.984375 28.710938 44.304688v22.40625l-81.703125 27.242187c-22.914063 7.632813-38.296875 28.984375-38.296875 53.121094v61.40625h352v-61.40625c0-24.136719-15.382812-45.488281-38.289062-53.113281zm-74.941407-8.128907-12.195312 60.945313-38.246094-27.320313 37.824219-37.824218zm41.230469-125.351562c0 10.535156-6.871094 19.414062-16.335938 22.632812.167969-2.199218.335938-4.394531.335938-6.632812v-38.527344c9.289062 3.3125 16 12.113282 16 22.527344zm-208 0c0-10.414062 6.710938-19.214844 16-22.527344v38.527344c0 2.238281.167969 4.433594.335938 6.632812-9.464844-3.21875-16.335938-12.097656-16.335938-22.632812zm32 16v-57.015625c19.039062 11.648437 40.335938 19.429687 62.464844 22.589844l31.519531 4.496093-6.832031-13.65625c-2.425782-4.839843-3.335938-10.261718-2.746094-15.542968 18.128906 11.914062 38.480469 20.464844 59.585938 25.394531v33.734375c0 39.703125-32.304688 72-72 72-39.695313 0-71.992188-32.296875-71.992188-72zm72 88c14.40625 0 27.984375-3.550781 40-9.710938v14.398438l-40 40-40-40v-14.398438c12.015625 6.160157 25.59375 9.710938 40 9.710938zm-50.160156 17.152344 37.824218 37.824218-38.25 27.320313-12.191406-60.945313zm210.160156 110.847656h-48v-32h-16v32h-192v-32h-16v32h-48v-45.40625c0-17.242188 10.992188-32.496094 27.351562-37.945312l54.585938-18.191407 16.648438 83.246094 61.414062-43.871094 61.414062 43.871094 16.648438-83.246094 54.585938 18.191407c16.359374 5.457031 27.351562 20.703124 27.351562 37.945312zm0 0"/><path d="m456 0c-22.054688 0-40 17.945312-40 40v16h16v-16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40zm0 0"/><path d="m448 136h16v16h-16zm0 0"/><path d="m424 160c-22.054688 0-40 17.945312-40 40v16h16v-16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40zm0 0"/><path d="m416 296h16v16h-16zm0 0"/><path d="m224 40c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v16h16zm0 0"/><path d="m240 136h16v16h-16zm0 0"/><path d="m48 40c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187v-4.777344c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v16h16zm0 0"/><path d="m64 136h16v16h-16zm0 0"/><path d="m80 200c0-22.054688-17.945312-40-40-40s-40 17.945312-40 40v16h16v-16c0-13.230469 10.769531-24 24-24s24 10.769531 24 24v4.777344c0 5.429687-1.863281 10.757812-5.257812 14.992187l-26.742188 33.421875v26.808594h16v-21.191406l23.230469-29.039063c5.65625-7.066406 8.769531-15.9375 8.769531-24.992187zm0 0"/><path d="m32 296h16v16h-16zm0 0"/></svg>
            <span className="text-xs text-gray-800">FAQ</span>
            </li>
          </NavLink>
        
        
        <NavLink activeClassName="bg-custom-theme rounded-md " exact to="/events" className="block md:text-gray-900 font-medium tracking-widest" href="/link">
        <li className="px-3 py-2 hover:bg-gray-100">
            <svg className="h-5 w-5 fill-current mx-auto" id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m512 110v332c0 24.81-20.19 45-45 45h-422c-24.81 0-45-20.19-45-45v-332c0-24.81 20.19-45 45-45h422c24.81 0 45 20.19 45 45z" fill="#eef4ff"/><path d="m512 110v332c0 24.81-20.19 45-45 45h-211v-422h211c24.81 0 45 20.19 45 45z" fill="#d9e6fc"/><path d="m512 110v74c0 8.28-6.72 15-15 15h-482c-8.28 0-15-6.72-15-15v-74c0-24.81 20.19-45 45-45h422c24.81 0 45 20.19 45 45z" fill="#dd5958"/><path d="m512 110v74c0 8.28-6.72 15-15 15h-241v-134h211c24.81 0 45 20.19 45 45z" fill="#d8225b"/><path d="m96 135c-8.284 0-15-6.716-15-15v-80c0-8.284 6.716-15 15-15s15 6.716 15 15v80c0 8.284-6.716 15-15 15z" fill="#ffe278"/><path d="m271 40v80c0 8.28-6.72 15-15 15s-15-6.72-15-15v-80c0-8.28 6.72-15 15-15s15 6.72 15 15z" fill="#ffe278"/><path d="m271 40v80c0 8.28-6.72 15-15 15v-110c8.28 0 15 6.72 15 15z" fill="#ffb454"/><path d="m416 135c-8.284 0-15-6.716-15-15v-80c0-8.284 6.716-15 15-15s15 6.716 15 15v80c0 8.284-6.716 15-15 15z" fill="#ffb454"/><g fill="#425796"><path d="m144 279h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m144 343h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m144 407h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z"/><path d="m287 264c0 8.28-6.72 15-15 15h-32c-8.28 0-15-6.72-15-15s6.72-15 15-15h32c8.28 0 15 6.72 15 15z"/></g><path d="m287 264c0 8.28-6.72 15-15 15h-16v-30h16c8.28 0 15 6.72 15 15z" fill="#283758"/><path d="m287 328c0 8.28-6.72 15-15 15h-32c-8.28 0-15-6.72-15-15s6.72-15 15-15h32c8.28 0 15 6.72 15 15z" fill="#425796"/><path d="m272 343h-16v-30h16c8.28 0 15 6.72 15 15s-6.72 15-15 15z" fill="#283758"/><path d="m287 392c0 8.28-6.72 15-15 15h-32c-8.28 0-15-6.72-15-15s6.72-15 15-15h32c8.28 0 15 6.72 15 15z" fill="#425796"/><path d="m287 392c0 8.28-6.72 15-15 15h-16v-30h16c8.28 0 15 6.72 15 15z" fill="#283758"/><path d="m400 279h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#283758"/><path d="m400 343h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#283758"/><path d="m400 407h-32c-8.284 0-15-6.716-15-15s6.716-15 15-15h32c8.284 0 15 6.716 15 15s-6.716 15-15 15z" fill="#283758"/></g></svg>
            <span className="text-xs text-gray-800">Events</span>
            </li>
          </NavLink>
        
      </ul>
    </nav>
  </div>
</div>

    
</>
         
  );
};

export default Navbar;
