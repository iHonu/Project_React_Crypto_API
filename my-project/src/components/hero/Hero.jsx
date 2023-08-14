const Hero = () => {
  return (
    <div className="flex flex-col justify-center p-6 my-8 md:my-16">
      <div className="mx-auto text-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl from-blue-600 to-red-400 bg-gradient-to-r bg-clip-text text-transparent">
          Explore the Pulse of
          <div className="from-red-400 to-blue-400 bg-gradient-to-r bg-clip-text text-transparent">
            Cryptocurrency
          </div>
        </h1>
        <p className="mt-4 font-light text-sm md:text-base md:mt-8 lg:text-lg">
          From charts to news and everything in between, we got the insights you
          crave.
        </p>
      </div>
    </div>
  );
};

export default Hero;
