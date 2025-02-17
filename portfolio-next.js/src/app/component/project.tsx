import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My Projects 
      </h1>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[5rem]">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../publice/assets/country2.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              country project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Country listing
            </h1>
            <p className="leading-relaxed">
              This is the project which I've created for users.
            </p>
            <Link target="_blank" href={"https://assigment-taupe.vercel.app"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../publice/assets/calculator.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Simple Calculator Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Simple Calculator
            </h1>
            <p className="leading-relaxed">
              this is a project which I've created for users.
            </p>
            <Link target="_blank" href={"https://github.com/baki1996/simple_calculator.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../publice/assets/atm.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Atm Machine Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Atm Machine
            </h1>
            <p className="leading-relaxed">
              This is project which I've create for users.
            </p>
            <Link target="_blank" href={"https://github.com/baki1996/-ATM-.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../publice/assets/guessing game.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Number Guessing Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Number Guessing
            </h1>
            <p className="leading-relaxed">
              This a project which I've create for users.
            </p>
            <Link target="_blank" href={"https://github.com/baki1996/CLI-Number-Guessing.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../publice/assets/todolist.jpg')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              ToDo App Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              ToDo App
            </h1>
            <p className="leading-relaxed">
              This is the project which I've create for users.
            </p>
            <Link target="_blank" href={"https://github.com/baki1996/to-do-list.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require('../../../publice/assets/cc.png')}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Currency Converter Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Currency Converter
            </h1>
            <p className="leading-relaxed">
              This is a project which I've create for users.
            </p>
            <Link target="_blank" href={"https://github.com/baki1996/currency-convertor.git"}>
            <p className="leading-relaxed text-blue-500 hover:underline">
              View Project
            </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Project