import { IoSearch } from "react-icons/io5";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSearch();
        }}
      >
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search for a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-bar__button" type="submit">
          <IoSearch />
        </button>
      </form>
    </div>
  );
}
