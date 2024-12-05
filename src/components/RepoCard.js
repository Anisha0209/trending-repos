import React from "react";

const RepoCard = ({ repo }) => {
  const formatStars = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    } else if (count >= 1000) {
      return (count / 1000).toFixed(1) + "k";
    }
    return count;
  };

  return (
    <div className="repo-card">
      <div className="repo-header">
        <h2 className="repo-name">{repo.name}</h2>
      </div>
      <p className="repo-description">
        {repo.description || "No description available"}
      </p>
      <div className="repo-details">
        <div className="repo-owner">
          <a href={repo.clone_url} className="repo-link">
            <img
              className="repo-avatar"
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
            />
            <span className="repo-username">{repo.owner.login}</span>
          </a>
        </div>
        <div className="repo-stars">
          <span className="material-icons">star</span>
          {formatStars(repo.stargazers_count)}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
