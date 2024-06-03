import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
      
        <div className='px-4 py-32 bg-black mx-auto'>


            <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welcome to our Blog !</h1>
                <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary'>Start your blog today and join a community of writers and reader
                    who are passionate to share their thoughts and ideas with others.We are offering everything you need to get started !</p>
                <div>
                    <Link to="/" className='text-white bg-orange-500 py-4 px-6 rounded text-center inline-flex'>
                        Learn More <FaArrowRight className='mt-1 ml-2' /></Link>
                </div>
            </div>

          
        </div>
  )
}

export default Banner