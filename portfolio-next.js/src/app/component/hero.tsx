"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-purple-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col 
        items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
       md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium
          text-gray-900">
          Hi, I am
          <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: [
                    "Bakhtawar Khan",
                    "Next.js Developer",
                    "FrontEnd Developer",
                    "TypeScript",
                ],    
                autoStart: true,
                loop: true,
             }}
            />
         </h1>
         <div className="w-[100px] h-[2px] bg-blue-700"></div>
            <p className="mb-8 leading-relaxed">
            A passionate front-end web developer. I have honed my skills in a
            variety of technologies, including TypeScript, JavaScript, HTML,
            CSS and Node.js. I create efficient and responsive
            websites that provide a great user experience. Whether it is coding
            up a new feature or optimizing performance, I am always eager to take
            on new challenges and continue learning in this ever-evolving field.
            </p>
            <div className="flex justify-center">
                <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Contact
              </button>
              </Link>
             </div>
              </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              width={500}
              height={500}
              src={require('../../../publice/assets/banner_bg.png')}
            />
          </div>
        </div>
      </section>
      
    )
}

export default Hero