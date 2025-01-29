import React from 'react'
import Image from './assets/instagram.png'
import Icon from './assets/icon.svg'
import Google from './assets/google.png'
import Microsoft from './assets/microsoft.png'

const Login = () => {

    let submit=(event)=>{
        event.preventDefault();
        let username= event.target.elements[0].value;
        let password= event.target.elements[1].value;
        console.log("Username: ", username);
        console.log("Password: ", password);
        
        
      }
      return (
        < div className='bg-black w-[100%] h-[100vh]'>
        <div className='flex justify-center'>
    
          <div className='w-[350px] h-[410px] flex flex-col justify-center border-1 text-center border-[#444444] mt-4'>
            <div className='mx-15 mb-9'><img src={Image} alt="" className='w-[200px] h-auto'/></div>
    
            <form action="https://www.instagram.com/" onSubmit={submit}>
              <input type="text" placeholder='Phone number, username, or email' className='w-[268px] h-[38px] border-[0.5px] outline-none px-1 text-[14px] text-[white] rounded-[3px] border-[#5f5d5d]'/>
    
              <input type="password" placeholder='Password' className='w-[268px] h-[38px] border-1 outline-none mt-2 px-1 text-[14px] text-gray-200 rounded-[3px] border-[#5f5d5d]'/>
    
              <button className='w-[268px] h-[32px] bg-blue-500 mt-1.5 rounded-[5px] text-white font-medium cursor-pointer outline-none'>Log in</button>
    
            </form>
            <div className='mt-6'><p className='text-[white] text-[13px]'>OR</p></div>
    
            <div className=' mt-8 flex mx-[90px] gap-1 justify-center cursor-pointer'><img src={Icon} alt="" /><span className='font-sans text-[14px] font-medium text-[#0095F6] hover:text-[white]'>Log in with Facebook</span></div>
    
            <p className='font-sans text-[14px] font-normal text-white mt-4 cursor-pointer'>Forgot password?</p>
          </div>
        </div>
    
        <div className='flex justify-around'>
        <div className='w-[350px] h-[70px] flex flex-col justify-center border-1 text-center border-[#444444] mt-4'>
        <p className='font-sans text-[14px] font-normal text-white'>Don't have an account? <span className='font-medium text-[#0095F6] cursor-pointer'>Sign up</span> </p>
        </div>
        </div>
        <div className='text-[white] flex justify-around mt-3'>Get the app.</div>
    
        <div className='flex justify-center gap-2.5 mt-3'>
          <div className='w-[135px] h-[40px]'><a href="https://play.google.com/store/apps/details?id=com.instagram.android"><img src= {Google} alt="" /></a></div>
          <div className='w-[111px] h-[40px]'><a href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl"><img src= {Microsoft} alt="" /></a></div>
        </div>
    
        <div className='flex justify-center text-[#868686] mt-17 w-[100vw]'>
            <ul className='flex gap-5 text-[13px] cursor-pointer no-underline'>
              <li className='hover:underline'>Meta</li>
              <li className='hover:underline'>About</li>
              <li className='hover:underline'>Blog</li>
              <li className='hover:underline'>Jobs</li>
              <li className='hover:underline'>Help</li>
              <li className='hover:underline'>Api</li>
              <li className='hover:underline'>Privacy</li>
              <li className='hover:underline'>Terms</li>
              <li className='hover:underline'>Location</li>
              <li className='hover:underline'>Instagram Lite</li>
              <li className='hover:underline'>Threads</li>
              <li className='hover:underline'>Contact Uploading & Non-Users</li>
              <li className='hover:underline'>Meta Verified</li>
            </ul>
        </div>
    
        <div className='flex justify-center text-[#868686] mt-5'>
            <ul className='flex gap-5 text-[13px] underline-none'>
              <li>English <i class="ri-arrow-down-s-line"></i></li>
              <li>© 2025 Instagram from Meta</li>
            </ul>
        </div>
        </div>
      )
}

export default Login