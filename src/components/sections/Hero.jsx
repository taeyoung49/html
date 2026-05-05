import React from 'react';
import { motion } from 'framer-motion';

import heroBg from '../../assets/hero_bg.png';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-secondary/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          산업용 펌프의 <br className="md:hidden" /><span className="text-primary">새로운 혁신</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl mb-10 text-slate-200 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          안전하고 효율적인 설비 엔지니어링 솔루션을 제공합니다.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-blue-500 text-white font-semibold text-lg py-4 px-10 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          >
            프로젝트 문의하기
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="cursor-pointer">
          <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
