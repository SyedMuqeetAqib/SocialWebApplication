import React from "react";



const LoadingAnimatedFeedCard = () => {
  return (


<div className="px-2">
  <div className="flex max-w-xl my-10 bg-white shadow-md rounded-xl overflow-hidden mx-auto">
    <div className="flex items-center w-full opacity-50">
      <div className="w-full">
        <div className="flex flex-row mt-2 px-2 pt-3  pb-1 mx-3">
          <div className="w-12 h-12 rounded-full border-2 bg-custom-theme animate-pulse">
          </div>
          <div className="flex flex-col mb-2 ml-4 mt-1 w-1/5">
            <div className="h-3 rounded bg-custom-theme animate-pulse"></div>
            <div className="flex w-full mt-1 h-3 rounded bg-custom-theme animate-pulse">
            </div>
          </div>
        </div>
        <div className="" /> 
        <div className="mb-1 mx-5 px-2 w-10/12 h-3 rounded bg-custom-theme animate-pulse"></div>
        <div className="mb-1 mx-5 px-2 w-10/12 h-3 rounded bg-custom-theme animate-pulse"></div>
        <div className="mb-1 mx-5 px-2 w-10/12 h-3 rounded bg-custom-theme animate-pulse"></div>
        <div className="mb-5 mx-5 px-2 w-1/3 h-3 rounded bg-custom-theme animate-pulse"></div>
        <div className="flex justify-start border-t border-gray-100">
          <div className="flex w-full mt-1 pt-2 pl-5 ">
            <span className={`flex px-2 py-0 items-center rounded border-black h-10 text-gray-100 bg-custom-theme animate-pulse`}>
            <svg className="h-6 w-6" height="512pt" viewBox="0 -19 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m364.5 0c-39.964844 0-79.421875 16.128906-108.496094 43.785156-29.078125-27.65625-68.535156-43.785156-108.503906-43.785156-82.710938 0-147.5 64.789062-147.5 147.5 0 96.671875 111.4375 203.085938 246.066406 322.136719 2.835938 2.507812 6.386719 3.761719 9.9375 3.761719 3.550782 0 7.101563-1.253907 9.9375-3.761719 134.621094-119.058594 246.058594-225.472657 246.058594-322.136719 0-82.710938-64.789062-147.5-147.5-147.5zm0 0" fill="#ff4949"/><path d="m364.5 0c-39.964844 0-79.421875 16.128906-108.496094 43.785156-.003906-.003906-.011718-.011718-.015625-.015625v429.628907h.015625c3.550782 0 7.101563-1.253907 9.9375-3.765626 134.621094-119.054687 246.058594-225.46875 246.058594-322.132812 0-82.710938-64.789062-147.5-147.5-147.5zm0 0" fill="#f30051"/></svg>
              <span className="pl-2">Like</span>
            </span>
          </div>
          <div className="flex justify-end w-full mt-1 pt-2 pr-5 animate-pulse">
            <span className="flex hover:bg-blue-50 bg-blue-100 h-10 px-2 py-2 text-center rounded-full text-blue-600  mr-2">
            <svg className="h-6 w-6" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m495.917969 217.066406-203.71875-203.714844c-8.851563-8.859374-17.902344-13.351562-26.890625-13.351562-12.472656 0-27.039063 9.347656-27.039063 35.683594v125.605468c-62.179687 4.234376-120.03125 30.65625-164.234375 75.320313-47.742187 48.238281-74.035156 112.183594-74.035156 180.054687 0 29.234376 4.90625 57.945313 14.589844 85.335938 2.121094 5.992188 7.785156 10 14.140625 10 6.359375 0 12.023437-4.007812 14.144531-10 29.78125-84.257812 107.136719-142.988281 195.394531-149.960938v124.273438c0 26.335938 14.566407 35.683594 27.039063 35.683594 8.988281 0 18.035156-4.488282 26.890625-13.34375l203.722656-203.722656c10.367187-10.371094 16.078125-24.195313 16.078125-38.933594-.003906-14.734375-5.714844-28.5625-16.082031-38.929688zm0 0" fill="#0065a3"/><path d="m56.679688 256c-36.714844 45.378906-56.679688 101.527344-56.679688 160.664062 0 29.234376 4.90625 57.945313 14.589844 85.335938 2.121094 5.992188 7.785156 10 14.140625 10 6.359375 0 12.023437-4.007812 14.144531-10 29.78125-84.257812 107.136719-142.988281 195.394531-149.960938v124.273438c0 26.335938 14.566407 35.683594 27.039063 35.683594 8.988281 0 18.035156-4.488282 26.890625-13.34375l203.722656-203.722656c10.367187-10.371094 16.074219-24.195313 16.078125-38.933594h-455.320312zm0 0" fill="#005183"/></svg>
            <span className="pl-2">Share</span>
            </span>

          </div>
        </div>
        <div className="flex w-full border-t border-gray-100">
          <div className="mt-3 mx-5 flex flex-row">
            <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center w-16 h-4 border-2 bg-custom-theme animate-pulse"></div>
          </div>
          <div className="mt-3 mx-5 w-full flex justify-end">
            <div className="flex text-gray-700 font-normal text-sm rounded-md mb-2 mr-4 items-center  w-16 h-4 border-2 bg-custom-theme animate-pulse"></div>
          </div>
        </div>
        <div className="relative flex items-center self-center w-full max-w-xl px-4 py-2 ">
          <div type="search" className="w-full pb-1 pl-4 pr-10 h-8 rounded-full bg-custom-theme animate-pulse" style={{borderRadius: 25}} >
              </div>
        </div>
           <div className="px-1 pb-1 mb-2 flex">
           <div className=" mt-1 ml-4 rounded h-3 w-28 bg-custom-theme animate-pulse">
               
             </div> 
             <div className="mt-1 ml-4 mr-5 rounded w-10/12 h-3 bg-custom-theme animate-pulse"></div>
          </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default LoadingAnimatedFeedCard;
