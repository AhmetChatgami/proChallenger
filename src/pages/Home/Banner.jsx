import { Link } from "react-router"; 

const Banner = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop')` 
        }}
      ></div>
      
      {/* Dark Gradient Overlay for Text Clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
          Compete. Conquer. <span className="text-amber-500">Glory Awaits.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Join thrilling sports contests, showcase your skills, and win amazing prizes on the ultimate challenger platform.
        </p>
        
        {/* Call to Action Button */}
        <div className="mt-8">
          <Link 
            to="/all-contests" 
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg shadow-orange-500/20"
          >
            EXPLORE ALL CONTESTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;