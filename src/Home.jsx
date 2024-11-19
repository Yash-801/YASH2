// Home.js
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
import { useNavigate } from "react-router-dom";

// Reusable NavItem Component
const NavItem = ({ imgSrc, label }) => (
  <div className="options2 d flex items-center justify-center font-semibold p-2 text-xs">
    <img src={imgSrc} alt={label} className="h-5 w-5 mr-2" />
    {label}
  </div>
);

// Reusable JobCard Component
const JobCard = ({ imgSrc, title, company, location }) => (
  <div className="jobcards p-4">
    <div className="flex justify-between items-center">
      <img src={imgSrc} alt={title} className="h-12 w-12" />
      <p className="fulltimetxt text-base">Full Time</p>
    </div>
    <div className="mt-3">
      <p className="cardinfo1">{title}</p>
      <p className="cardinfo2">at {company}</p>
      <p className="cardinfo3">{location}</p>
    </div>
    <button className="cardinfobtn">More Details</button>
  </div>
);

const Home = ({ onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navItems = [
    { imgSrc: home, label: "Home" },
    { imgSrc: job, label: "Find Job" },
    { imgSrc: job, label: "Companies" },
    { imgSrc: list, label: "My Jobs" },
    { imgSrc: message, label: "Message" },
  ];

  const jobData = [
    {
      imgSrc: two,
      title: "Website WordPress",
      company: "Employer 2810",
      location: "test2, test 2",
    },
    {
      imgSrc: frontend,
      title: "Frontend Developer",
      company: "Polaris Software Solution",
      location: "test",
    },
    {
      imgSrc: frontend,
      title: "Android Developer",
      company: "Polaris Software Solution",
      location: "test2",
    },
    {
      imgSrc: car,
      title: "QA Tester",
      company: "2910 Company",
      location: "test2",
    },
    {
      imgSrc: compny,
      title: "WT - All candidates",
      company: "GradSearch",
      location: "Pls quick apply",
    },
    {
      imgSrc: compny,
      title: "Shortlist Test",
      company: "Aftrn Company",
      location: "job des",
    },
    {
      imgSrc: compny,
      title: "Aftyn - All Vis",
      company: "Aftrn Company",
      location: "a",
    },
    {
      imgSrc: compny,
      title: "Aftn - Close Job",
      company: "Aftrn Company",
      location: "job descript",
    },
  ];

  return (
    <>
      <div className="navbar pt-6 px-8 flex items-center h-20 justify-between w-full sticky">
        <div className="aiimg">
          <img src={grad} alt="image" className="aiimg2" />
        </div>
        <div className="options d flex items-center justify-center flex-row">
          {navItems.map((item, index) => (
            <NavItem key={index} imgSrc={item.imgSrc} label={item.label} />
          ))}
        </div>
        <div className="d flex">
          <div className="d flex mr-3">
            <img
              src={bell}
              alt="bell"
              className="h-8 w-8 pt-2 hover:cursor-pointer"
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
              style={{ right: "0", top: "100%", minWidth: "150px", zIndex: 10 }}
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

      <div className="dashboard">
        <div className="dashcontaintant flex flex-col">
          <div className="mt-4">
            <h1 className="font-medium text-3xl">Welcome Home Zadafiya Yash</h1>
            <img src={aicover} alt="aicover" className="h-72 w-full mt-9" />
            <div className="flex mt-7">
              <img
                src={logo}
                alt="logo"
                className="profileimg2 h-24 w-24 object-cover"
              />
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
          <div className="bg-white flex justify-between mt-3 items-center p-5">
            <div>
              <p className="text-3xl font-medium">Profile Complete 70%</p>
              <p className="dash2p2 text-sm">
                Your profile is incomplete. Complete your missing items to
                improve your chances of securing a dream role.
              </p>
            </div>
            <button className="dash2btn">My Profile</button>
          </div>

          <div className="bg-white mt-3 p-5">
            <p className="text-3xl font-medium">Job Application Status</p>
            <p className="dash2p2 text-sm mt-5">
              Here’s some recent jobs applied by you
            </p>
            <div className="flex justify-center items-center mt-10 mb-8">
              <span className="text-zinc-500 text-lg font-medium">
                No Data Available
              </span>
            </div>
          </div>

          <div className="bg-white mt-3 flex justify-center flex-col p-5">
            <p className="font-medium text-3xl mb-4">Recommended Jobs</p>
            <p className="mb-4">
              Here are some jobs that are a close match with your profile
            </p>
            <div className="jobcontanir grid grid-cols-1 gap-4">
              {jobData.map((job, index) => (
                <JobCard
                  key={index}
                  imgSrc={job.imgSrc}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
