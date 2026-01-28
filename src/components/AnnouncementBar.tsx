export default function AnnouncementBar() {
  return (
    <div className="w-full bg-orange-600 text-white py-4 px-4 overflow-hidden relative z-50">
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
      <div className="announcement-scroll font-semibold text-sm md:text-base">
        Enjoy up to 50% off on selected items – Limited time offer! • Enjoy up to 50% off on selected items – Limited time offer! •
      </div>
    </div>
  );
}
