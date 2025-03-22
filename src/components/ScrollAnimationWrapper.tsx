"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimationWrapper({ 
  children, 
  className = "", 
  delay = 0 
}: ScrollAnimationWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: [0.4, 0, 0.2, 1]
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}