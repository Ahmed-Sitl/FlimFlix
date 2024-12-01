interface Trending {
  id: string;
  name: string;
  value: string;
}

interface Props {
  title: string;
  categories: Trending[];
  Category: string;
  setCategory: (Category: Trending) => void;
}

const MediaSectionHead = ({
  title,
  categories,
  Category,
  setCategory,
}: Props) => {
  return (
    <div className="flex gap-5 overflow-x-auto">
      <div className="font-bold text-2xl">{title}</div>
      <ul className="flex gap-5 justify-center items-center rounded-full bg-slate-300 text-black">
        {categories.map((li, index) => (
          <li
            onClick={() => setCategory(li)}
            key={index}
            className={`cursor-pointer p-2 rounded-full ${
              li.name === Category
                ? "bg-primary-dark text-white"
                : "bg-transparent text-black" // Added a fallback class for non-selected items
            }`}
          >
            {li.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediaSectionHead;
