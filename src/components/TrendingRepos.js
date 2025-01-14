import React from "react";
import RepoCard from "./RepoCard";

const TrendingRepos = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default TrendingRepos;
