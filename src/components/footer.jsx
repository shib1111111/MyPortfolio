"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 transition-opacity duration-500 ease-in-out opacity-100 animate-fadeIn text-sm md:text-base">
          &copy; {new Date().getFullYear()} Shib Kumar Saraf. All Copyrights reserved.
        </p>
      </div>

      {/* Tailwind CSS animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
