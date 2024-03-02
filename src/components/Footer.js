import React, { useState, useEffect } from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
  });

  useEffect(() => {
    fetch('https://api.github.com/repos/Tito-Osemobor/MovieGenius')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
        });
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <div className={"flex flex-col justify-center items-center text-center mb-3 z-50"}>
      <a href="https://github.com/Tito-Osemobor/MovieGenius"
         target={"_blank"}
         rel="noreferrer" >
        <div className={"text-white"}>Designed &amp; Built by Tito Osemobor</div>
        <div className={"flex justify-center items-center text-white"}>
          <StarOutlineIcon />
          {
            (githubInfo.stars) ? (
              <p>{githubInfo.stars.toLocaleString()}</p>
            ) : (<p>Error Occurred</p>)
          }
        </div>
      </a>
    </div>
  );
};

export default Footer;
