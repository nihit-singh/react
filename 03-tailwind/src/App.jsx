import React from 'react'
import Section1 from './components/section1/Section1'

function App() {

  const user = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60",
    intro: "Builds scalable applications, writes clean code, and solves complex problems with modern technologies.",
    tag: "Satisfied",
    backgroundColor: "#1E2A38", // deep tech blue
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60",
    intro: "Designs intuitive, user-centered interfaces focused on usability, aesthetics, and seamless digital experiences.",
    tag: "UnderServed",
    backgroundColor: "#2A1F2D", // creative dark purple
  },
  {
    img: "https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.webp",
    intro: "Analyzes complex datasets to uncover insights, trends, and data-driven business decisions.",
    tag: "UnderPromised",
    backgroundColor: "#2B2B2B", // corporate charcoal
  },
  {
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60",
    intro: "Manages cross-functional teams, ensures timely delivery, and aligns projects with business objectives.",
    tag: "Satisfied",
    backgroundColor: "#1F2D26", // leadership green
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    intro: "Creates compelling visual content and brand assets for digital and print marketing campaigns.",
    tag: "UnderServed",
    backgroundColor: "#3A1E2F", // brand maroon
  },
  {
    img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=600&auto=format&fit=crop&q=60",
    intro: "Develops marketing strategies, analyzes performance metrics, and drives audience engagement growth.",
    tag: "Satisfied",
    backgroundColor: "#1C2733", // strategy navy
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=60",
    intro: "Oversees financial planning, budgeting, and reporting to support sustainable business growth.",
    tag: "UnderPromised",
    backgroundColor: "#2D241A", // finance brown
  },
  {
    img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&auto=format&fit=crop&q=60",
    intro: "Builds scalable cloud infrastructure ensuring security, reliability, and high system availability.",
    tag: "Satisfied",
    backgroundColor: "#1A2433", // cloud steel blue
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&auto=format&fit=crop&q=60",
    intro: "Creates engaging content strategies to strengthen brand voice and improve customer retention.",
    tag: "UnderServed",
    backgroundColor: "#2E1F1A", // content rust
  },
  {
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&auto=format&fit=crop&q=60",
    intro: "Leads product vision, prioritizes features, and bridges user needs with business goals.",
    tag: "Satisfied",
    backgroundColor: "#1F2330", // product slate
  },
];

// export default users;


  return (
    <div>
      <Section1 user={user} />
      
    </div>
  )
} 

export default App
