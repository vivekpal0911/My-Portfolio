import React from 'react';
import './GitHubStats.css';

function GitHubStats() {
  return (
    <section className="github-stats-section">
      <div className="container">
        <h2>GitHub Activity</h2>
        <div className="github-grid">
          <div className="github-card">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=vivekpal0911&show_icons=true&theme=radical" 
              alt="GitHub Stats" 
              className="github-img"
            />
          </div>
          <div className="github-card">
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=vivekpal0911&layout=compact&theme=radical" 
              alt="Top Languages" 
              className="github-img"
            />
          </div>
        </div>
        <div className="github-calendar">
           <img 
             src="https://ghchart.rshah.org/vivekpal0911" 
             alt="GitHub Contribution Graph" 
             className="github-calendar-img"
           />
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;
