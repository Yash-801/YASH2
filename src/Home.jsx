import React from "react";
import grad from "./assets/images/grad.png";
import home from "./assets/images/home.png";
import job from "./assets/images/job.svg";
import list from "./assets/images/list.svg";
import message from "./assets/images/message.png";
import bell from "./assets/images/bell.svg";
import logo from "./assets/images/logo.jpg";
import downarrow from "./assets/images/downarrow.svg";
import aicover from "./assets/images/aicover.png";

const Home = ({ onLogout }) => {
  return (
    <>
      <div className="dashboard">
        <div className="dashcontaintant flex flex-col">
          <div className="pt-6 d flex items-center h-20 justify-between w-full">
            <div className="aiimg">
              <img src={grad} alt="image" className="aiimg2" />
            </div>
            <div className="options d flex items-center justify-center flex-row  ">
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={home} alt="home" class="h-5 w-5 mr-2" />
                Home
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={job} alt="job" class="h-5 w-5 mr-2" />
                Find Job
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={job} alt="job" class="h-5 w-5 mr-2" />
                Companies
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={list} alt="list" class="h-4 w-4 mr-2" />
                My Jobs
              </div>
              <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
                <img src={message} alt="message" class="h-5 w-5 mr-2" />
                Message
              </div>
            </div>
            <div className="d flex">
              <div className="d flex  mr-3">
                <img
                  src={bell}
                  alt="bell"
                  className="h-8 w-8 pt-2 hover:cursor-pointer"
                />
              </div>
              <div className="toglmenu d flex items-center justify-between hover:cursor-pointer">
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
                <img src={logo} alt="logo" className="profileimg2 h-24 w-24 " />
              </div>
              <div className="flex justify-evenly flex-col ml-4">
                <p className="profileinfop1 font-medium text-2xl">
                  Zadafiya Yash
                </p>
                <p className="p2 text-sm">student</p>
                <p className="p2 text-sm">IT Devloper</p>
              </div>
            </div>
          </div>
          <div>
            <button onClick={onLogout}>Log Out</button>
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
          <div>
            <div>
              <div>
                <p className="font-medium text-3xl">Recommended Jobs</p>
                <p>
                  Here are some jobs that are a close match with your profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
