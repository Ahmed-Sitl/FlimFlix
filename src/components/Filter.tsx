import sort_by from "@/data/filters/sort_by.json";
import genres from "@/data/filters/genres.json";
import langs from "@/data/filters/lang.json";

interface Props {
  setFilters: any;
  lang?: string;
}

const Filter = ({ setFilters, lang = "en" }: Props) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 7 }, (_, index) => currentYear - index);

  let Filters = {
    sort_by: "popularity.desc",
    include_adult: false,
    primary_release_year: "",
    with_genres: "",
    with_original_language: "",
  };

  const handleFilterChange = (e: any) => {
    Filters = { ...Filters, [e.target.name]: e.target.value };
  };
  const applyFilters = () => {
    setFilters(Filters);
  };

  return (
    <div className="flex justify-center mb-6 md:mb-0 md:max-w-xs w-full md:mr-4">
      <div className="dark:bg-gray-800 bg-gray-200 text-white p-6 rounded-lg shadow-lg w-full">
        <h2 className="text-center text-2xl font-bold mb-4 dark:text-white text-black ">
          {lang === "ar" ? "خيارات الفلترة" : "Filter Options"}
        </h2>
        <div className="flex flex-col">
          {/* Sort By */}
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            {lang === "ar" ? "ترتيب حسب" : "Sort By"}
          </label>
          <select
            className="w-full p-2 border rounded mb-4 dark:bg-gray-700 bg-gray-100 dark:text-white text-black"
            name="sort_by"
            // value={tempFilters.sort_by}
            onChange={handleFilterChange}
          >
            {sort_by.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>

          {/* Release Year */}
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            {lang === "ar" ? "سنة الإصدار" : "Release Year"}
          </label>
          <select
            className="w-full p-2 border rounded mb-4 dark:bg-gray-700 bg-gray-100 dark:text-white text-black"
            name="primary_release_year"
            // value={tempFilters.primary_release_year}
            onChange={handleFilterChange}
          >
            <option value="">All Years</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>

          {/* Genres */}
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            {lang === "ar" ? "النوع" : "Genres"}
          </label>
          <select
            className="w-full p-2 border rounded mb-4 dark:bg-gray-700 bg-gray-100 dark:text-white text-black"
            name="with_genres"
            // value={tempFilters.with_genres}
            onChange={handleFilterChange}
          >
            {genres.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>

          {/* Language */}
          <label className="block text-sm font-medium mb-1 text-black dark:text-white">
            {lang === "ar" ? "اللغة" : "Language"}
          </label>
          <select
            className="w-full p-2 border rounded mb-4 dark:bg-gray-700 bg-gray-100 dark:text-white text-black"
            name="with_original_language"
            // value={tempFilters.with_original_language}
            onChange={handleFilterChange}
          >
            {langs.map((option) => (
              <option key={option.id} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Apply Filters Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={applyFilters}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {lang === "ar" ? "تطبيق الفلاتر" : "Apply Filters"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
