import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Image from './components/Image';
import Button from './components/Button';
import Footer from './components/Footer';

const images = '77JACslA8G0,7tFlUFGa7Dk,sdRZrK4lVCk,JIUjvqe2ZHg,dO3qTKxwik0,2_BZuGgkP4k'.split(',')

// https://unsplash.com/photos/

// 

// 

//
function App() {
  return (
    <div className="py-8 text-darkGrey">
      <div className="max-w-[1200px] mx-auto my-0">
      <Header />
      <div className="flex flex-col items-center justify-center mt-[97px] mb-[50px] px-1">
        <h3 className="font-bold text-[56px] text-center mb-[40px]">
        Minimalist Room 
        </h3>
        <p className="text-center max-w-[520px]">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
      </div>
      <div className='w-100 px-4'>
        <Image className="max-w-100 aspect-video	" src={ `/${images[0]}-unsplash.jpg`} alt={images[0]} />
      </div>
      <div className="block md:flex justify-between mt-[100px] px-4">
        <div className="flex flex-col  flex-1 mr-2 max-w-[500px]">
          <h3 className="text-[24px] font-semibold mb-4">
          Project Overview
          </h3>
          <p className="flex-1 text-lightGrey">
          Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. 
          </p>
          <div className="flex flex-row justify-between">
            <p className="mr-8 text-lightGrey">July 22 - 2022</p>
            <p className="flex-1 text-lightGrey">Interior Design - Furniture</p>
          </div>
        </div>

        <div className="block flex-1 max-w-[500px]">
          <h3 className="text-[24px] font-semibold mb-4">
          Project Overview
          </h3>
          <p className="mb-4 text-lightGrey">
          Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
          </p>
          <p className="text-lightGrey">
          Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
          </p>
        </div>
      </div>
      <div className="flex mt-[80px]">
        <div className="pr-[2px] md:pr-[4px] lg:pr-[8px]">
        <Image className='h-full' src={`/${images[1]}-unsplash.jpg`}  alt={images[1]} />
        </div>
        <div className="pl-[2px] md:pl-[4px] lg:pl-[8px]">
        <Image className='h-full' src={`/${images[2]}-unsplash.jpg`}  alt={images[2]} />
        </div>
      </div>

      <div className="mt-[32px]">
     
        <Image className='h-[100%]' src={`/${images[3]}-unsplash.jpg`}  alt={images[3]} />
      
      </div>

      <div className="flex mt-[32px]">
        <div className="pr-[2px] md:pr-[4px] lg:pr-[8px] flex-1">
        <Image className='h-[100%] ' src={`/${images[4]}-unsplash.jpg`}  alt={images[4]} />
        </div>
        <div className="pl-[2px] md:pl-[4px] lg:pl-[8px] flex-1">
        <Image className='h-[100%]' src={`/${images[5]}-unsplash.jpg`}  alt={images[5]} />
        </div>
      </div>
      </div>

      <div className="bg-primary text-white mt-[100px] py-[38px]">
      <div className="max-w-[1200px] mx-auto my-0">
          <div className="md:flex justify-between items-center">
            <div className="px-4 flex-1 mb-4 md:mb-0"> 
              <p className='max-w-[632px] font-semibold text-[36px] leading-[61px]'>
              let's discuss making your interior like a dream place!
              </p>
            </div>

            <div className="px-8 flex-col flex">
              <p className="flex-1 font-light text-[18px] max-w-[420px] mb-[20px]">
              Contact us below to work together to build your amazing interior              </p>
            <div>
            <Button variant="secondary">
                Contact us
              </Button>
            </div>
            </div>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
