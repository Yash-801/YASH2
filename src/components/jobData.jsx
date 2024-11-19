import React from "react";

// Sample job data for demonstration
const jobData = [
  {
    id: 1,
    title: "Website Wordpress",
    company: "Employer 2810",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 200000 - 250000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50", // Replace with actual image URL if available
    description: "test2, test 2",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 20000 - 30000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 3,
    title: "Android Developer",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 20000 - 30000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 4,
    title: "QA Tester",
    company: "2910 Company",
    location: "Songadh",
    type: "Part Time",
    salary: "BGN 20000 - 25600",
    posted: "18 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "Tech Corp",
    location: "Surat",
    type: "Full Time",
    salary: "Rs 300000 - 400000",
    posted: "5 days ago",
    logo: "https://via.placeholder.com/50",
    description: "backend development tasks",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "Surat",
    type: "Contract",
    salary: "Rs 25000 - 35000",
    posted: "12 days ago",
    logo: "https://via.placeholder.com/50",
    description: "UI/UX design",
  },
  {
    id: 7,
    title: "Project Manager",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 50000 - 70000",
    posted: "15 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Managing projects",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataCorp",
    location: "Surat",
    type: "Full Time",
    salary: "Rs 600000 - 700000",
    posted: "20 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Analyzing data",
  },
  {
    id: 9,
    title: "Customer Support",
    company: "Support Solutions",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 15000 - 20000",
    posted: "10 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Customer support tasks",
  },
  {
    id: 10,
    title: "Marketing Specialist",
    company: "Marketing Pros",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 40000 - 50000",
    posted: "25 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Marketing strategies",
  },
];

const JobList = () => {
  return (
    <div className="p-6 bg-gray-100">
      {jobData.map((job) => (
        <div key={job.id} className="border p-4 rounded-lg shadow-md flex items-start space-x-4 mb-4 bg-white">
          <img src={job.logo} alt={`${job.title} logo`} className="w-12 h-12 object-cover rounded-full" />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{job.title}</h2>
            <p className="text-sm text-gray-500">{job.company}</p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm my-2">
              <span>📍 {job.location}</span>
              <span>⏳ {job.type}</span>
              <span>💰 {job.salary}</span>
              <span>📅 {job.posted}</span>
            </div>
            <p className="text-gray-600 text-sm">{job.description}</p>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            ⭐
          </button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
