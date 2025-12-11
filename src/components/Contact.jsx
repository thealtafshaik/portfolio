import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../index.css'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '+966',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e?.target) {
      const { name, value } = e?.target;
      setForm({ ...form, [name]: value });
    } else {
      setForm({ ...form, ['phone']: e });
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_wdeiohj',
      'template_ro7wdot',
      {
        name: form.name,
        to_name: 'Altaf Shaik',
        email: form.email,
        to_email: 'thealtafshaik@gmail.com',
        title: form.phone,
        message: form.message,
      },
      'b3fiX9qSpVQzLWNu7'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible.');

      setForm({
        name: '',
        email: '',
        phone: '+966',
        message: '',
      })
    }).error((error) => {
      setLoading(false);
      alert('Something went wrong.', error);
    });
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-[#100d25] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name <span className='text-red-500'>*</span></span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email <span className='text-red-500'>*</span></span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          
          <label>
            <span className='text-white font-medium mb-4'>Your Phone Number</span>
            <PhoneInput
              name="phone"
              placeholder="What's your phone number?"
              value={form.phone}
              onChange={handleChange}
              defaultCountry="SA"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message <span className='text-red-500'>*</span></span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className='bg-[#151030] py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <button className='bg-[#151030] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#050816] rounded-xl cursor-pointer' type='submit'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')