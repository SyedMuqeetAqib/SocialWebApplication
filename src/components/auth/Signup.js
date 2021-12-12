import axios from 'axios';
import React, { Fragment, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { toast } from 'react-toastify';

function Signup() {

  const fullName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const studentId = useRef();

  const [errorMessage, setErrorMessage]=useState(null);

  const history = useHistory();
  const year = [
    { year: 2017},
    { year: 2018},
    { year: 2019},
    { year: 2020},
    {year:2021}
  ]
  const [selected, setSelected] = useState(year[0])
  console.log(selected.year)

  const handleClick= async (e)=>{
    e.preventDefault(); 
    if(passwordAgain.current.value !== password.current.value)
    {
      passwordAgain.current.setCustomValidity("Password don't matched!")
    }else{
      const user = {
        fullName:fullName.current.value,
        email:email.current.value,
        password:password.current.value,
        studentId:studentId.current.value,
        batch:selected.year
      }
      try{
        const res = await axios.post("/usersAuth/register",user);
        console.log(res);
        if(res.status===200){
          history.push("/login");
          
        }
      }
      catch(error)
      {
        if(error.response.status===401){

        }
        console.log(error.response.data.error.message)
        console.log(error.status)
        setErrorMessage(error.response.data.error.message);
      }
    }
  }
    return (
      <div>
        <div>
          {/* component */}
          <div>
            <section className="min-h-screen flex items-stretch text-white ">
              <div
                className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{ backgroundImage: "url(/smiu.jpg)" }}
              >
                <div className="absolute bg-black opacity-60 inset-0 z-0" />
                <div className="w-full px-24 z-10">
                  <h1 className="text-5xl font-bold text-left tracking-wide">
                    Among SMIU
                  </h1>
                  <p className="text-3xl my-4">
                    A Place for SMIU to share its Memories.
                  </p>
                </div>
              </div>
              <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-custom-theme">
                <div
                  className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
                  style={{ backgroundImage: "url(/smiu.jpg)" }}
                >
                  <div className="absolute bg-black opacity-60 inset-0 z-0" />
                </div>
                <div className="w-full py-6 z-20">
                  <p className="text-gray-100 text-4xl tracking-widest">
                    SIGN UP
                  </p>
                  <p>
                    Already have an account, <a href="/login">Log in</a>
                  </p>
                    {(errorMessage)&&
                            <p className="px-2 py-4 bg-red-500 rounded-xl mt-4">{errorMessage}</p>}                 
                  <form
                    onSubmit={handleClick}
                    className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
                  >
                    <div className="text-gray-700">
                      <div className="pb-2 pt-4">
                        <input
                          type="email"
                          required
                          ref={email}
                          name="email"
                          id="email"
                          placeholder="Email"
                          className="block w-full p-4 text-lg rounded-xl "
                        />
                      </div>
                      <div className="pb-2 pt-4">
                        <input
                          type="text"
                          minLength="3"
                          maxLength="20"
                          required
                          ref={fullName}
                          name="fullName"
                          id="fullName"
                          placeholder="Full Name"
                          className="block w-full p-4 text-lg rounded-xl "
                        />
                      </div>
                      <div className="pb-2 pt-4">
                        <input
                          className="block w-full p-4 text-lg rounded-xl "
                          minLength="5"
                          required
                          ref={studentId}
                          type="text"
                          name="StudentId"
                          id="StudentId"
                          placeholder="StudentId"
                        />
                      </div>
                   
                      <div className="pb-2 pt-4">
                        {/* <input className="block w-full p-4 text-lg rounded-xl " minLength="5" required ref={password} type="password" name="password" id="password" placeholder="Password" /> */}
                        <Listbox value={selected} onChange={setSelected}>
                          <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-4 pl-3 pr-10 text-left bg-white rounded-xl shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                              <span className="block truncate text-lg">
                                {selected.year}
                              </span>
                              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon
                                  className="w-5 h-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              </span>
                            </Listbox.Button>
                            <Transition
                              as={Fragment}
                              leave="transition ease-in duration-100"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {year.map((person, yearId) => (
                                  <Listbox.Option
                                    key={yearId}
                                    className={({ active }) =>
                                      `${
                                        active
                                          ? "text-amber-900 bg-amber-100 bg-gray-200"
                                          : "text-gray-700"
                                      }
                          cursor-default select-none relative m-2 rounded-lg text-lg py-2 pl-10 pr-4`
                                    }
                                    value={person}
                                  >
                                    {({ selected, active }) => (
                                      <>
                                        <span
                                          className={`${
                                            selected
                                              ? "font-medium "
                                              : "font-normal"
                                          } block truncate`}
                                        >
                                          {person.year}
                                        </span>
                                        {selected ? (
                                          <span
                                            className={`${
                                              active
                                                ? "text-amber-600"
                                                : "text-amber-600"
                                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                                          >
                                            <CheckIcon
                                              className="w-5 h-5"
                                              aria-hidden="true"
                                            />
                                          </span>
                                        ) : null}
                                      </>
                                    )}
                                  </Listbox.Option>
                                ))}
                              </Listbox.Options>
                            </Transition>
                          </div>
                        </Listbox>
                      </div>
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
                    </div>
                
                    <div className="px-4 pb-2 pt-4">
                      <button
                        type="submit"
                        className="uppercase block w-full p-4 text-lg rounded-full bg-gray-500 hover:bg-gray-600 focus:outline-none"
                      >
                        sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
}

export default Signup
