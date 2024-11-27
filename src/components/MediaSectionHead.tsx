interface MediaSectionProps {
  title: string;
  liElements: string[];
}

const MediaSectionHead = ({ title, liElements }: MediaSectionProps) => {
  return (
    <div className="flex gap-5">
      <div className="font-bold text-2xl">{title}</div>
      <ul className="flex gap-5 justify-center items-center rounded-full bg-slate-300 text-black">
        {liElements.map((li, index) => (
          <li
            key={index}
            className="cursor-pointer p-2 border-[1px] rounded-full bg-primary-dark text-white"
          >
            {li}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaSectionHead;
