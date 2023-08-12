const Hero = () => {
  return (
    <div className="prose-2xl dark:prose-invert flex flex-col justify-center mt-24">
      <div className="w-auto mx-auto text-center">
        <h1 className="font-bold from-blue-400 to-red-400 bg-gradient-to-r bg-clip-text text-transparent">
          Explore the Pulse of{' '}
          <span className="from-red-400 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent">
            Cryptocurrency
          </span>
        </h1>
        <p className="font-extralight">
          From charts to news and everything in between, we got the insights you
          crave.
        </p>
      </div>
    </div>
  );
};

export default Hero;
