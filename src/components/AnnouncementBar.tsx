export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 overflow-hidden">
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .scrolling-text {
          animation: scroll 12s linear infinite;
          white-space: nowrap;
          display: inline-block;
        }
      `}</style>
      <div className="flex items-center justify-center">
        <span className="scrolling-text font-semibold text-sm md:text-base">
          Enjoy up to 50% off on selected items – Limited time offer!
        </span>
      </div>
    </div>
  );
}
