import React from 'react';
import { motion } from 'framer-motion';
export default function transition(TopComponent) {
  return () => (
    <>
      <TopComponent />
      <motion.div
        className="slide-in"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, easeOut: [1, 0.22, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [1, 0.22, 0.36, 1] }}
      />
    </>
  );
}
