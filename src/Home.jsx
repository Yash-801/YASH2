import React, { useState } from "react";
import grad from "./assets/images/grad.png";
import home from "./assets/images/home.png";
import job from "./assets/images/job.svg";
import list from "./assets/images/list.svg";
import message from "./assets/images/message.png";
import bell from "./assets/images/bell.svg";
import logo from "./assets/images/logo.jpg";
import downarrow from "./assets/images/downarrow.svg";
import aicover from "./assets/images/aicover.png";
import two from "./assets/images/two.png";
import frontend from "./assets/images/frontend.png";
import car from "./assets/images/car.jpeg";
import compny from "./assets/images/compny.jpg";

const Home = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="dashboard">
        <div className="dashcontaintant flex flex-col">
          <div className="navbar pt-6 d flex items-center h-20 justify-between w-full sticky">
            <div className="aiimg">
              <img src={grad} alt="image" className="aiimg2" />
            </div>
            <div className="options d flex items-center justify-center flex-row">
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={home} alt="home" className="h-5 w-5 mr-2" />
                Home
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={job} alt="job" className="h-5 w-5 mr-2" />
                Find Job
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={job} alt="job" className="h-5 w-5 mr-2" />
                Companies
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={list} alt="list" className="h-4 w-4 mr-2" />
                My Jobs
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={message} alt="message" className="h-5 w-5 mr-2" />
                Message
              </div>
            </div>
            <div className="d flex">
              <div className="d flex mr-3">
                <img
                  src={bell}
                  alt="bell"
                  className="h-8  w-8 pt-2 hover:cursor-pointer"
                />
              </div>
              <div
                onClick={toggleDropdown}
                className="toglmenu d flex items-center justify-between hover:cursor-pointer"
              >
                <div className="h-9 w-9 overflow-auto d flex items-center mr-2">
                  <img src={logo} alt="logo" className="proimg h-7 w-7 ms-1" />
                </div>
                <div>
                  <p className="font-semibold text-xs">Zadafiya</p>
                </div>
                <div className="mx-1">
                  <img src={downarrow} alt="downarrow" />
                </div>
              </div>
              {isOpen && (
                <div
                  className="absolute bg-white shadow-md rounded mt-2"
                  style={{
                    right: "0",
                    top: "100%",
                    minWidth: "150px",
                    zIndex: 10,
                  }}
                >
                  <ul className="text-gray-700 text-sm p-3">
                    <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                      Profile
                    </li>
                    <li className="py-1 px-2 hover:bg-gray-200 cursor-pointer">
                      Settings
                    </li>
                    <li
                      className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                      onClick={onLogout}
                    >
                      Log Out
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4">
            <div>
              <h1 className="font-medium text-3xl">
                Welcome Home Zadafiya Yash
              </h1>
            </div>
            <div className="mt-9">
              <img src={aicover} alt="aicover" className="h-72 w-full" />
            </div>
            <div className="flex mt-7">
              <div className="object-cover">
                <img src={logo} alt="logo" className="profileimg2 h-24 w-24" />
              </div>
              <div className="flex justify-evenly flex-col ml-4">
                <p className="profileinfop1 font-medium text-2xl">
                  Zadafiya Yash
                </p>
                <p className="p2 text-sm">student</p>
                <p className="p2 text-sm">IT Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-50 flex justify-center">
        <div className="desh2">
          <div className="bg-white flex justify-between mt-3 items-center">
            <div className="mt-4 mb-4 ml-5 mr-5">
              <p className="text-3xl font-medium mb-5">Profile Complete 70%</p>
              <p className="dash2p2 text-sm mb-5">
                Your profile is incomplete. Complete your missing items to
                improve your chances of securing a dream role.
              </p>
            </div>
            <button className="dash2btn mr-4">My Profile</button>
          </div>
          <div className="bg-white mt-3">
            <div className="px-5 py-3">
              <p className="text-3xl font-medium">Job Application Status</p>
              <p className="dash2p2 text-sm mt-5">
                Here’s some recent jobs applied by you
              </p>
            </div>
            <div className="flex justify-center items-center">
              <span className="text-zinc-500 text-lg font-medium mb-8 mt-10">
                No Data Available
              </span>
            </div>
          </div>
          <div className="bg-white mt-3 flex justify-center flex-col">
            <div className="w-full">
              <div className="ml-5 pt-3">
                <p className="font-medium text-3xl mb-4">Recommended Jobs</p>
                <p className="mb-4">
                  Here are some jobs that are a close match with your profile
                </p>
              </div>
            </div>
            <div>
              <div className="jobcontanir">
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={two} alt="two" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1">website wordpress</p>
                    <p className="cardinfo2">at Employer 2810</p>
                    <p className="cardinfo3">test2 ,test 2</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={frontend} alt="frontend" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1">Frontend Developer</p>
                    <p className="cardinfo2">at Polaris Software Solution</p>
                    <p className="cardinfo3">test</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={frontend} alt="frontend" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1">Android Developer</p>
                    <p className="cardinfo2">at Polaris Software Solution</p>
                    <p className="cardinfo3">test2</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={car} alt="car" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1">qa tester</p>
                    <p className="cardinfo2">at 2910 Compamy</p>
                    <p className="cardinfo3">test2</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={compny} alt="compny" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1 p1">WT - All candidates</p>
                    <p className="cardinfo2">at GradSearch</p>
                    <p className="cardinfo3">Pls quick apply</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={compny} alt="compny" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1">shortlist test</p>
                    <p className="cardinfo2">at Aftrn Company</p>
                    <p className="cardinfo3">job des</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={compny} alt="compny" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1 p2">Aftyn - all vis</p>
                    <p className="cardinfo2">at Aftrn Company</p>
                    <p className="cardinfo3">a</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
                <div className="jobcards p-4">
                  <div className="flex justify-between items-center">
                    <img src={compny} alt="compny" className="h-12 w-12" />
                    <p className="fulltimetxt text-base">Full Time</p>
                  </div>
                  <div className="mt-3">
                    <p className="cardinfo1">aftn - close job</p>
                    <p className="cardinfo2">at Aftrn Company</p>
                    <p className="cardinfo3">job descript</p>
                  </div>
                  <div>
                    <button className="cardinfobtn">More Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
