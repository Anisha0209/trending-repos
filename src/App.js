import React, { useState, useEffect } from "react";
import TrendingRepos from "./components/TrendingRepos";
import fetchRepositories from "./services/fetchRepositories";
import "./styles/App.css";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [cache, setCache] = useState({});

  useEffect(() => {
    if (!cache[page]) {
      fetchRepositories(page).then((newRepos) => {
        setRepos(newRepos);
        setCache({ ...cache, [page]: newRepos });
      });
    } else {
      setRepos(cache[page]);
    }
  }, [page, cache]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage !== page) {
      setPage(newPage);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Trending Repos</h1>
      <TrendingRepos repos={repos} />
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
        >
          Previous
        </button>
        <span className="count">Page {page}</span>
        <button
          disabled={!repos.length}
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>

      <div className="bottom-nav">
        <div className="nav-item">
          <span className="material-icons nav-item-icon">star</span>
          <span>Trending</span>
        </div>
        <div className="nav-item">
          <span className="material-icons nav-item-icon nav-item-disabled">
            settings
          </span>
          <span className="nav-item-disabled">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default App;
