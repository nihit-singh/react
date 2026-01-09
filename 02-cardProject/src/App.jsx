import React from 'react'
import Card from './components/card'

function App() {
  const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    companyName: "Microsoft",
    datePosted: "2 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Senior Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Mumbai, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    companyName: "Meta",
    datePosted: "3 weeks ago",
    post: "React Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "10 days ago",
    post: "Frontend UI Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Web UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Remote",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    companyName: "IBM",
    datePosted: "4 weeks ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
    companyName: "Oracle",
    datePosted: "6 days ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Bangalore, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    companyName: "Salesforce",
    datePosted: "10 weeks ago",
    post: "Frontend Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "React UI Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Noida, India",
  },
];

// export default jobOpenings;


  return (
    <div className='parent'>
      {jobOpenings.map(function(ele,idx){
        return <div key={idx}>
          <Card 
          brandLogo={ele.brandLogo}
          companyName={ele.companyName}
          datePosted={ele.datePosted}
          post={ele.post}
          tag1={ele.tag1}
          tag2={ele.tag2}
          salary={ele.pay}
          location={ele.location}
          />
        </div>
      })}
    </div>
  )
}

export default App
