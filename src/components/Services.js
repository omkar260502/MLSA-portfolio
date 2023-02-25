import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services =[
  {
    name:'UI/UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia distinctio ratione iusto officiis quaerat magni.',
    link: 'Learn More',
  },
  {
    name:'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia distinctio ratione iusto officiis quaerat magni.',
    link: 'https://www.google.com',
  },
  {
    name:'XYZ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quia distinctio ratione iusto officiis quaerat magni.',
    link: 'Learn More',
  },
  
]

const Services = () => {
  return (
    <section className="section"  id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1 mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>What I do.</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, labore.</h3>
            <button className='btn btn-sm'>See my work</button>
          </div>
          <div>
            <div className='flex-1'>
              {services.map((service,index)=>{
                const{name,description,link}=service;
                return(<div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowUpRight/>
                    </a>
                    <a href={link} className='text-gradient text-sm'>Learn More</a>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
