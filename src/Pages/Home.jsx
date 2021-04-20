import React from 'react';
import { CgMail } from 'react-icons/cg'
import { AiOutlineMobile } from 'react-icons/ai'
import { BsChevronDoubleDown } from 'react-icons/bs';


const Home = () => {
  return (
    <div className='home-me main-bg pb-5' id="home">
      <img src='/pic.png' alt='Manish Pic' className='myImg card-hover img-fluid' />
      <h3 className='mt-4 text-white'>Hi, I'm</h3>
      <h1 className='text-warning'>MANISH RAHUL</h1>
      <h3 className='text-white'>(MERN Stack Developer)</h3>
      <h5 className='text-white'> <span><CgMail /></span>  memanishrahul@gmail.com</h5>      
      <h5 className='text-white'> <span><AiOutlineMobile /></span> +91 8340283358</h5>                     
      <a
        className='btn btn-warning btn-lg mt-4 font-weight-bolder'
        href="/img/Manish MERN.pdf"
        target='_blank'
      >
        RESUME
			</a>
      <a href="#aboutme" className='mt-4'> <BsChevronDoubleDown /></a>
    </div>
  );
};

export default Home;
