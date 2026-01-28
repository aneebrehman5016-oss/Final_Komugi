export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-orange-600 text-white py-3 px-4 overflow-hidden z-50">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .announcement-scroll {
          animation: scroll-left 20s linear infinite;
          display: inline-block;
          white-space: nowrap;
        }
      `}</style>
      <div className="announcement-scroll font-semibold text-xs sm:text-sm">
        Enjoy up to 50% off on selected items – Limited time offer! • Enjoy up to 50% off on selected items – Limited time offer! •
      </div>
    </div>
  );
}
