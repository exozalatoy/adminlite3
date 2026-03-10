import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import { Pagination } from 'swiper/modules';
export default function App() {
  
  return (
    <>
    <div className='w-[100%] h-[100vh] flex'>
      <div className='w-[250px] bg-[#343a40] h-[100vh] overflow-x-hidden'>
    <div className='flex gap-[10px] p-[13px] items-center'>
      <img className='w-[34px] h-[34px] rounded-full' src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png" alt="" />
      <h1 className='text-[#fff] text-[18px]'>AdminLTE 3</h1>
    </div>
    <hr />
    <div className='flex gap-[10px] p-[13px] items-center mb-[16px]'>
      <img  className='w-[34px] h-[34px] rounded-full' src="https://adminlte.io/themes/v3/dist/img/user2-160x160.jpg" alt="" />
      <h1 className='text-[#fff] text-[18px]'>Alexabder pirsce</h1>
    </div>
    <hr className='w-[234px] m-[auto]' />
    <div>
       <div className='flex w-[234px] m-[auto] mt-[20px] mb-`[20px] bg-[#3F474E] items-center justify-center'>
         <input className='w-[220px] p-[10px] h-[38px] bg-[#343a40] border border-gray-300' type="search" placeholder='saerch' />
        <div className='w-[45px] h-[38px] flex items-center justify-center bg-[#343a40]'>
          <h1 className='text-[#fff]'><i class='fa-solid fa-search'></i></h1>
        </div>
       </div>
       <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] bg-blue-600 p-[13px] items-center mb-[16px]'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-gauge-high"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Dashboard</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] bg-gray-200 p-[13px] items-center mb-[16px]'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-circle"></i></h1>
      <h1 className='text-[#111] text-[18px]'>Dashboard v1</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Dashboard v2</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Dashboard v3</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-th"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Widgates</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-copy"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Layout Options</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-chart-pie"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Charts</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-pen-to-square"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Forms</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-table"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Tables</h1>
    </div>
   
    <h1 className='ml-[10px] text-[16px] text-[#fff]'>Eaxmples</h1>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class='fa-solid fa-calendar'></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Calendars</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-image"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Galery</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-columns"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>kandan board</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-envelope"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Mailbox</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-file"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Pages</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-square-plus"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>exstrax</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-magnifying-glass"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Search</h1>
    </div>
      <h1 className='ml-[10px] text-[16px] text-[#fff]'>MISCELLANEOUS</h1>
      <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-solid fa-ellipsis"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Tabbed Ifarne Plugin</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa-regular fa-file"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Documetaion</h1>
    </div>
    <h1 className='ml-[10px] text-[16px] text-[#fff]'>MULTI LEVEL EXAMPLA</h1>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[16px]'>Level 1</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[16px]'>Level 1</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-[#fff]'><i class="fa fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[16px]'>Level 1</h1>
    </div>
     
        <h1 className='ml-[10px] text-[16px] text-[#fff]'>labels</h1>

    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-red-600'><i class="fa-regular fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Important</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-yellow-600'><i class="fa-regular fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Warning</h1>
    </div>
    <div className='flex gap-[10px] h-[40px] m-[auto] rounded-[10px] w-[234px] p-[13px] items-center mb-[16px] hover:bg-[#8B8B8B] cursor-pointer'>
      <h1 className='text-blue-600'><i class="fa-regular fa-circle"></i></h1>
      <h1 className='text-[#fff] text-[18px]'>Informational</h1>
    </div>
      </div>
      </div>
      
      <div className='w-[1290px] bg-[#F4F6F9] h-[100Vh] overflow-x-hidden'>
      <nav className='w-[1270px] flex items-center bg-[#fff] justify-between p-[20px]'>
        <ul className='flex items-center gap-[15px]'>
          <i class='fa-solid fa-bars'></i>
          <h1 className='text-[#ccc]'>Home</h1>
          <h1 className='text-[#ccc]'>Contact</h1>
        </ul>
        <div className='text-[#ccc] gap-[15px] flex'>
          <i class='fa-solid fa-search'></i>
          <i class='fa-solid fa-comment'></i>
          <i class='fa-solid fa-bell'></i>
          <i class='fa-solid fa-search'></i>
          <i class='fa-solid fa-search'></i>
        </div>
      </nav>
      <h1 className='text-[28px] ml-[20px]'>Dashboard</h1>
      <div  className='w-[1270px] flex'>
        <div className='w-[313px] h-[112px] bg-[#17A2B8] p-[0px] ml-[20px] rounded-[7px]'>
        <h1  className='text-[35px] text-[#fff] pl-[10px] font-bold'>150</h1>
        <h1  className='text-[16px] text-[#fff] pl-[10px] -[20px]'>New orders</h1>
        <h1 className='w-[300px] pt-[5px] mt-[6px] text-[#fff] text-center h-[30px] bg-[#1591A5]'>More info</h1>
      </div>
      <div className='w-[313px] h-[112px] bg-green-600 p-[] ml-[20px] rounded-[7px]'>
        <h1  className='text-[35px] text-[#fff] pl-[10px] font-bold'>53%</h1>
        <h1  className='text-[16px] text-[#fff] pl-[10px] -[20px]'>Bounce rate</h1>
        <h1 className='w-[300px] mt-[6px] pt-[5px] text-[#fff] text-center h-[30px] bg-[#24963E]'>More info</h1>
      </div>

      <div className='w-[313px] h-[112px] bg-yellow-500 p-[] ml-[20px] rounded-[7px]'>
        <h1  className='text-[35px] text-[#111] pl-[10px] font-bold'>44</h1>
        <h1  className='text-[16px] text-[#111] pl-[10px] -[20px]'>New orders</h1>
        <h1 className='w-[300px] pt-[5px] mt-[6px] text-[#fff] text-center h-[30px] bg-[#E5AD06]'>More info</h1>
      </div>
      <div className='w-[313px] h-[112px] bg-red-600 p-[] ml-[20px] rounded-[7px]'>
        <h1  className='text-[35px] text-[#fff] pl-[10px] font-bold'>65</h1>
        <h1  className='text-[16px] text-[#fff] pl-[10px] -[20px]'>Unqe visitor</h1>
        <h1 className='w-[300px] pt-[5px] mt-[6px] text-[#fff] text-center h-[30px] bg-[#C6303E]'>More info</h1>
      </div>
      </div>
      <div className='flex gap-[10px] ml-[20px]'>
        <img className='w-[716px] h-[340px]  mt-[30px]' src="./public/SBD.png" alt="" />
        <img className='w-[550px] h-[447px]  mt-[30px]' src="/public/xaerita.png" alt="" />
      </div>
     <div className='flex gap-[10px]'>
       <div className='w-[716px] bg--200 h-[375px]'>
        <div className='w-[716px] flex items-center justify-between mt-[-100px] p-[10px]'>
      <h1>Direct Chat</h1>
      <div className='flex items-center gap-[15px]'>
        <h1 className='w-[16px] h-[18px] bg-blue-600 text-[#fff] flex items-center justify-center rounded-[2px]'>3</h1>
        <h1 className='text-[#ccc]'><i class="fa-solid fa-minus"></i></h1>
        <h1 className='text-[#ccc]'><i class="fa-solid fa-comment"></i></h1>
        <h1 className='text-[#ccc]'><i class="fa-solid fa-xmark"></i></h1>
      </div>
        </div>
        <div className='flex w-[681px] items-center justify-between p-[10px]'>
          <h1 className='font-bold '>Alexander Pierce</h1>
        <h1>23 Jan 2:00 pm</h1>
        </div>
        <div className='flex items-center gap-[10px] ml-[10px]'>
          <img className='w-[40px] h-[40px] rounded-full' src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" alt="" />
          <div className='w-[631px] h-[35px] bg-gray-400 rounded-[10px] p-[5px]'>
            <p>Is this template really for free? That's unbelievable!</p>
          </div>  
        </div>
         <div className='flex w-[681px] items-center justify-between p-[10px]'>
           <h1>23 Jan 2:00 pm</h1>
          <h1 className='font-bold '>Alexander Pierce</h1>
       
        </div>
        <div className='flex items-center gap-[10px] ml-[10px]'>
          <div className='w-[631px] h-[35px] bg-blue-400 rounded-[10px] p-[5px]'>
            <p>Is this template really for free? That's unbelievable!</p>
          </div>  
          <img className='w-[40px] h-[40px] rounded-full' src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" alt="" />
          
        </div>
         <div className='flex w-[681px] items-center justify-between p-[10px]'>
          <h1 className='font-bold '>Alexander Pierce</h1>
        <h1>23 Jan 2:00 pm</h1>
        </div>
        <div className='flex items-center gap-[10px] ml-[10px]'>
          <img className='w-[40px] h-[40px] rounded-full' src="https://adminlte.io/themes/v3/dist/img/user1-128x128.jpg" alt="" />
          <div className='w-[631px] h-[35px] bg-gray-400 rounded-[10px] p-[5px]'>
            <p>Is this template really for free? That's unbelievable!</p>
          </div>  
        </div>
        <div className='w-[716px] bg-gray-300 h-[63px] mt-[20px] flex justify-center pt-[12px]'>
      <input className='p-[10px] w-[618px] h-[38px] rounded-[10px]' type="search" placeholder='ttype Message....'/>
      <div className='w-[59px] h-[38px] bg-blue-600  flex items-center justify-center rounded-[10px]'>
        <h1 className='text-[#fff] font-bold'>send</h1>
      </div>
        </div>
         
      </div>
       <img className='w-[550px] h-[496px]  mt-[30px]' src="./public/KOK.png" alt="" />
     </div>
     <div className='flex gap-[10px] ml-[]'>
      <img className='w-[716px] h-[528px]  mt-[-300px]' src="./public/faxa.png" alt="" />
      <img className='w-[550px] h-[307px]  mt-[30px]' src="./public/ya.png" alt="" />
     </div>
      </div>
    </div>

    </>
    
  );
}