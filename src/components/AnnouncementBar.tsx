export default function AnnouncementBar() {
  return (
    <div className="bg-amber-600 text-white py-3 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .announcement-scroll {
          animation: scroll-left 15s linear infinite;
          display: flex;
          width: max-content;
        }
        .announcement-scroll span {
          flex-shrink: 0;
          padding-right: 50px;
        }
      `}</style>
      <div className="announcement-scroll">
        <span className="font-semibold text-sm md:text-base">
          Enjoy up to 50% off on selected items – Limited time offer!
        </span>
        <span className="font-semibold text-sm md:text-base">
          Enjoy up to 50% off on selected items – Limited time offer!
        </span>
      </div>
    </div>
  );
}
