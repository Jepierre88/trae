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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}