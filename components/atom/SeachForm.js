const SearchForm = () => {
  return (
    <div className="w-full bg-white shadow my-4 p-6">
      <form action="/posts" method="get">
        <input type="text" className="w-full h-16 px-3 rounded focus:shadow-outline px-8 bg-gray-200" placeholder="search ..." name="q" />
      </form>
    </div>
  );
};

export default SearchForm;
