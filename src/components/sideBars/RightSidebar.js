import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import {useHistory, Link} from "react-router-dom"


const RightSidebar = () => {

  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
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
        history.push("/search/"+searchValue)
      }
   
  }
 
  return (
    <>
      <div className="min-h-full bg-gray-50 shadow-lg rounded-xl fixed w-sidebar">
      
        <div className="flex justify-center px-3 py-3">
          <div className="w-full max-w-md">
            <div className="flex items-center shadow-xl rounded-full bg-gray-200">
              <div className="pl-2">
                <svg
                  className="fill-current text-gray-500 w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
          <form onSubmit={handleSearchSubmit}>

              <input
                type="search"
                onChange={handleSearchInput}
                value={searchValue}
                className=" w-11/12  ml-4 pr-2 text-sm order bg-gray-200 border-transparent appearance-none rounded-tg placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue rounded-xl text-gray-700 leading-tight focus:outline-none py-2 px-2"
                style={{ borderRadius: 25 }}
                placeholder="Search..."
                autoComplete="off"
                /> 
            </form>
            </div>
            <div className="text-gray-700  border-gray-700 font-medium text-lg px-3 mt-4 h-96 overflow-y-auto bg-gray-200 rounded-xl">
              <div className="sticky top-0 bg-gray-200 px-4">Frequently Searches</div>
              <div className="py-1 text-sm border-gray-200 rounded-xl h-full">
                <Link to="/search/Muqeet">

                
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                  <div className="flex-grow text-xs font-medium px-2">
                    Syed Muqeet Aqib
                  </div>
                </div>
                  </Link>  
                  <Link to="/search/Mahad">
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                  <div className="flex-grow text-xs font-medium px-2">
                    Syed Mahad
                  </div>
                  
                </div>
                </Link>
                <Link to="/search/Maroof">
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                  <div className="flex-grow text-xs font-medium px-2">
                    Maroof Ahmed
                  </div>
                  
                </div>
                </Link>
                <Link to="/search/Kashif">
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                  <div className="flex-grow text-xs font-medium px-2">
                    Kashif
                  </div>
                  
                </div>
                </Link>
                <Link to="/search/Ahmed">
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <span className="bg-gray-400 h-2 w-2 m-2 rounded-full" />
                  <div className="flex-grow font-medium text-xs px-2">
                    Ahmed
                  </div>
                </div>
                  </Link>
                  <Link to="/search/Taha">
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <span className="bg-green-400 h-2 w-2 m-2 rounded-full" />
                  <div className="flex-grow text-xs font-medium px-2">
                    Taha
                  </div>
                  
                </div>
                </Link>
              </div>
            </div>

            {/* <div className="text-gray-700  border-gray-700 font-medium text-lg px-3 mt-4 h-1/3 overflow-y-auto bg-gray-200 rounded-xl">
              <div className="sticky top-0 bg-gray-200 px-4">Events</div>
              <div className="py-1 text-sm border-gray-200 rounded-xl h-full">
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
                    <div
                      className="w-full h-24 bg-top bg-cover rounded-t-xl"
                      style={{
                        backgroundImage:
                          "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
                      }}
                    />
                    <div className="flex flex-col w-full md:flex-row h-auto">
                      <div className=" rounded-b-xl flex items-center flex-row justify-around px-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 md:flex-col md:items-center md:justify-center ">
                        <div className="md:text-xl">Jan</div>
                        <div className="md:text-lg">13</div>
                        <div className="md:text-md">7 pm</div>
                      </div>
                      <div className="p-2 font-normal text-gray-800 md:w-3/4">
                        <h1
                          className="text-md font-bold leading-none tracking-tight text-gray-800 truncate"
                          title="2020 National Championship"
                        >
                          2020 National Championship
                        </h1>
                        <p
                          className="text-xs truncate"
                          title="The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season."
                        >
                          The College Football Playoff (CFP) determines the
                          national champion of the top division of college
                          football. The format fits within the academic calendar
                          and preserves the sport’s unique and compelling
                          regular season.
                        </p>
                        <div className="flex flex-row items-center text-gray-700">
                          <div>By Mercedes-Benz Superdome</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
                    <div
                      className="w-full h-24 bg-top bg-cover rounded-t-xl"
                      style={{
                        backgroundImage:
                          "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
                      }}
                    />
                    <div className="flex flex-col w-full md:flex-row h-auto">
                      <div className=" rounded-b-xl flex items-center flex-row justify-around px-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 md:flex-col md:items-center md:justify-center ">
                        <div className="md:text-xl">Jan</div>
                        <div className="md:text-lg">13</div>
                        <div className="md:text-md">7 pm</div>
                      </div>
                      <div className="p-2 font-normal text-gray-800 md:w-3/4">
                        <h1
                          className="text-md font-bold leading-none tracking-tight text-gray-800 truncate"
                          title="2020 National Championship"
                        >
                          2020 National Championship
                        </h1>
                        <p
                          className="text-xs truncate"
                          title="The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season."
                        >
                          The College Football Playoff (CFP) determines the
                          national champion of the top division of college
                          football. The format fits within the academic calendar
                          and preserves the sport’s unique and compelling
                          regular season.
                        </p>
                        <div className="flex flex-row items-center text-gray-700">
                          <div>By Mercedes-Benz Superdome</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 items-center hover:bg-gray-300 rounded-xl px-1 py-1 my-2">
                  <div className="flex flex-col w-full bg-white rounded-xl shadow-lg">
                    <div
                      className="w-full h-24 bg-top bg-cover rounded-t-xl"
                      style={{
                        backgroundImage:
                          "url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)",
                      }}
                    />
                    <div className="flex flex-col w-full md:flex-row h-auto">
                      <div className=" rounded-b-xl flex items-center flex-row justify-around px-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 md:flex-col md:items-center md:justify-center ">
                        <div className="md:text-xl">Jan</div>
                        <div className="md:text-lg">13</div>
                        <div className="md:text-md">7 pm</div>
                      </div>
                      <div className="p-2 font-normal text-gray-800 md:w-3/4">
                        <h1
                          className="text-md font-bold leading-none tracking-tight text-gray-800 truncate"
                          title="2020 National Championship"
                        >
                          2020 National Championship
                        </h1>
                        <p
                          className="text-xs truncate"
                          title="The College Football Playoff (CFP) determines the national champion of the top division of college football. The format fits within the academic calendar and preserves the sport’s unique and compelling regular season."
                        >
                          The College Football Playoff (CFP) determines the
                          national champion of the top division of college
                          football. The format fits within the academic calendar
                          and preserves the sport’s unique and compelling
                          regular season.
                        </p>
                        <div className="flex flex-row items-center text-gray-700">
                          <div>By Mercedes-Benz Superdome</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div> */}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
