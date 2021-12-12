import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthContext';
import { logoutCall } from '../../logoutApiCall';
import {Link, useHistory} from "react-router-dom";
import {leftSideBarData, pages} from "./leftSideBarContent";


const LeftSidebar = () => {
  const {user, isFetching,payload, error, dispatch} = useContext(AuthContext);
const history = useHistory();
  const handleLogout=(e)=>{
    e.preventDefault();
    logoutCall(dispatch);
    history.push("/");
  }
  console.log(user)
    return (
        <>
<div className="min-h-full bg-white shadow-lg rounded-xl fixed w-sidebar">
   
  <nav className="h-full flex flex-col bg-gray-50 w-full rounded-t-xl" >
    
    <ul className="p-2 space-y-2 w-full" style={{scrollbarWidth: 'thin'}}>
    <li>
        <a href={"/user/"+user.data.user.userId} className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg">
        <div className="w-auto h-auto rounded-full border-2 border-custom-theme">
            <img
              className="w-8 h-8 object-cover rounded-full shadow cursor-pointer"
              alt="User avatar"
              // src={item.postedByProfilePicture}
              src={(user.data.user.profilePicture)?""+user.data.user.profilePicture:"/profileReplace.png"}
            />
          </div>
          <span className="text-gray-900 pl-2">{user.data.user.fullname}</span>
        </a>
      </li>
{leftSideBarData.map((sideBarData)=>
      <li>
        <Link to={sideBarData.link} className="flex space-x-2 items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg">
          <svg className="h-6 w-6 fill-current"  height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"  dangerouslySetInnerHTML={{__html: sideBarData.svgIconPath}}></svg>
          <span className="text-gray-900 pl-2">{sideBarData.label}</span>
        </Link>
      </li>
)
}
  {user&&
  <form onSubmit={handleLogout}>
  <li> <button type="submit" className="flex space-x-2 w-full  items-center text-gray-600 p-2 hover:bg-gray-200 rounded-lg">
        
          <svg className="h-6 w-6 fill-current" height="511pt" viewBox="-15 0 511 511.99988" width="511pt" xmlns="http://www.w3.org/2000/svg"><path d="m330.5 15.007812v422c0 8.398438-6.597656 15-15 15h-120c-8.402344 0-15-6.601562-15-15l-180-422c0-8.402343 6.597656-14.9999995 15-14.9999995h300c8.402344 0 15 6.5976565 15 14.9999995zm0 0" fill="#07485e"/><path d="m330.5 15.007812v422c0 8.398438-6.597656 15-15 15h-120c-8.402344 0-15-6.601562-15-15l-45-105v-331.9999995h180c8.402344 0 15 6.5976565 15 14.9999995zm0 0" fill="#03232e"/><path d="m202.097656 91.507812-180-90c-4.496094-2.101562-10.199218-2.101562-14.398437.601563-4.5 2.996094-7.199219 7.796875-7.199219 12.898437v422c0 6.597657 4.199219 12.300782 10.199219 14.097657l124.800781 41.703125 55.199219 18.296875c4.417969 1.769531 10.078125.769531 13.5-1.796875 3.902343-3 6.300781-7.5 6.300781-12.300782v-392c0-5.699218-3.300781-10.800781-8.402344-13.5zm0 0" fill="#ff8859"/><path d="m210.5 105.007812v392c0 4.800782-2.402344 9.300782-6.300781 12.300782-3.390625 2.542968-9.039063 3.585937-13.5 1.796875l-55.199219-18.296875v-434.601563l66.597656 33.300781c5.101563 2.699219 8.402344 7.800782 8.402344 13.5zm0 0" fill="#ff3939"/><path d="m368.425781 330.234375c-4.878906-2.605469-7.925781-7.6875-7.925781-13.226563v-15h-105c-8.292969 0-15-6.710937-15-15v-60c0-8.292968 6.707031-15 15-15h105v-15c0-5.539062 3.046875-10.621093 7.925781-13.230468 4.863281-2.589844 10.796875-2.296875 15.394531.75l90 60c4.175782 2.78125 6.679688 7.46875 6.679688 12.480468 0 5.007813-2.503906 9.695313-6.679688 12.476563l-90 60c-4.652343 3.105469-10.585937 3.332031-15.394531.75zm0 0" fill="#ff3939"/><path d="m150.5 227.007812v60c0 8.398438-6.597656 15-15 15s-15-6.601562-15-15v-60c0-8.402343 6.597656-15 15-15s15 6.597657 15 15zm0 0" fill="#fff5f5"/><path d="m150.5 227.007812v60c0 8.398438-6.597656 15-15 15v-90c8.402344 0 15 6.597657 15 15zm0 0" fill="#efe2dd"/></svg>
          <span className="text-gray-900 pl-2">Logout</span>
        </button></li>
    </form>}
</ul>
      {/* {
        pages.length>0?
      <ul className="bg-custom-theme rounded-xl shadow-lg p-4 m-3 ">
          {
            pages.map((pageName)=>
          <li>
            <a href="#" title={pageName.pageName} className="flex space-x-2 items-center text-white p-2 hover:bg-gray-200 rounded-lg hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-5 fill-current" width={24} height={24} viewBox="0 0 24 24"><path d="M17.997 18h-.998c0-1.552.06-1.775-.88-1.993-1.438-.332-2.797-.645-3.293-1.729-.18-.396-.301-1.048.155-1.907 1.021-1.929 1.277-3.583.702-4.538-.672-1.115-2.707-1.12-3.385.017-.576.968-.316 2.613.713 4.512.465.856.348 1.51.168 1.908-.49 1.089-1.836 1.4-3.262 1.728-.982.227-.92.435-.92 2.002h-.995l-.002-.623c0-1.259.1-1.985 1.588-2.329 1.682-.389 3.344-.736 2.545-2.209-2.366-4.365-.676-6.839 1.865-6.839 2.492 0 4.227 2.383 1.867 6.839-.775 1.464.824 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.81-2.214c-1.289-.298-2.489-.559-1.908-1.657 1.77-3.342.47-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.325 0 1.269.574 2.175.904 2.925h1.048c-.17-.75-1.466-2.562-.766-3.736.412-.692 1.704-.693 2.114-.012.38.631.181 1.812-.534 3.161-.388.733-.28 1.301-.121 1.648.305.666.977.987 1.737 1.208 1.507.441 1.368.042 1.368 1.48h.997l.002-.463c0-.945-.074-1.492-1.193-1.75zm-22.805 2.214h.997c0-1.438-.139-1.039 1.368-1.48.761-.221 1.433-.542 1.737-1.208.159-.348.267-.915-.121-1.648-.715-1.349-.914-2.53-.534-3.161.41-.682 1.702-.681 2.114.012.7 1.175-.596 2.986-.766 3.736h1.048c.33-.75.904-1.656.904-2.925.001-1.509-.982-2.326-2.247-2.326-1.87 0-3.17 1.787-1.4 5.129.581 1.099-.619 1.359-1.908 1.657-1.12.258-1.194.805-1.194 1.751l.002.463z" /></svg>
              <span className="truncate">{pageName.pageName}</span>
            </a>
          </li>
            )}
        </ul>
        :
        null
} */}
    
    {/* <div className="p-2 flex items-center border-t-2 border-gray-300 space-x-4">
      <div className="relative inline-flex">
        <span className="inline-flex bg-red-500 w-2 h-2 absolute right-0 bottom-0 rounded-full ring-2 ring-white transform translate-x-1/3 translate-y-1/3" />
        <img className="w-8 h-8 object-cover rounded-full" alt="User avatar" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" />
      </div>
      <div>
        <h3 className="font-semibold tracking-wide text-gray-800">
          Danimai
        </h3>
        <p className="text-sm text-gray-700">
          view profile
        </p>
      </div>
    </div> */}
  </nav>

</div>

     </>
    )
}

export default LeftSidebar
