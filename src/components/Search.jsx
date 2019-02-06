import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Search = props => {
  return (
    <div className="Search">
      <label>Search</label>
      <input />
      <button>Q</button>
      <SearchResults />
    </div>
  );
};

const SearchResults = props => {
  return (
    <table>
      <tr>
        <td>
          <Link to="/grouping/BASFIG">BASFIG</Link>
        </td>
      </tr>
      <tr>
        <td>
          <Link to="/grouping/MBAM30">MBAM30</Link>
        </td>
      </tr>
    </table>
  );
};

export default Search;
