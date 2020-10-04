import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchForm = () => {
  return (
    <div className="w-full bg-white shadow my-4 p-6">
      <form action="/posts" method="get">
        <input type="text" className="w-full h-16 px-3 rounded focus:shadow-outline px-8 bg-gray-200" aria-label="検索フォーム" placeholder="search ..." name="q" />
        <button type="submit" className="absolute mt-4 -ml-10" aria-label="検索ボタン">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400" size="2x" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
