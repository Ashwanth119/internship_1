import React from 'react'
import { useNavigate } from 'react-router-dom';

 const About = () => {
    const navigate=useNavigate();
    console.log(useNavigate);
  return (
    <>
        <div>Hii...</div>
        <button onClick={()=>navigate(-1)}>Go to Home</button>
        {/* <button onClick={()=>navigate('/home')}>Go to Home</button> */}
    </>
  )
}

export default About;