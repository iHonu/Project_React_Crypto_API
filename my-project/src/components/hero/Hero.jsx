import { motion } from 'framer-motion';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 0.5 },
        opacity: { duration: 0.3 },
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center p-6 my-8 md:my-16"
    >
      <div className="mx-auto text-center">
        <motion.h1
          variants={item}
          className="font-bold text-4xl md:text-5xl lg:text-7xl from-blue-600 to-red-400 bg-gradient-to-r bg-clip-text text-transparent"
        >
          Explore the Pulse of
          <div className="from-red-400 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent">
            Cryptocurrency
          </div>
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-4 font-light text-sm md:text-base md:mt-8 lg:text-lg"
        >
          From charts to news and everything in between, we got the insights you
          crave.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Hero;
