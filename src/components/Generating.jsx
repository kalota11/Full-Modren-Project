import { loading } from "../assets";

 const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center gap-3 h-[3.75rem] px-6
      bg-n-8/70 backdrop-blur-md
      border border-n-1/10
      rounded-2xl
      text-sm font-medium text-n-1
      shadow-[0_0_30px_rgba(124,58,237,0.15)]
      ${className || ""}`}
    >
      <img
        className="w-5 h-5 animate-spin"
        src={loading}
        alt="Loading"
      />
      <span className="tracking-wide">
        AI is generating<span className="animate-pulse">...</span>
      </span>
    </div>
  );
};

export default Generating;
