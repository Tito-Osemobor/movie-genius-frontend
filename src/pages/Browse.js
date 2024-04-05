import React from 'react';
import Header from "../components/common/Header";
import {Link} from "react-router-dom";

const Browse = () => {
  return (
    <div>
      <nav>
        <div className={"flex"}>
          <Header />
          <ul className={"flex"}>
            <li>
              <Link to={"/browse"}>
                Home
              </Link>
            </li>
            <li>
                Genres
            </li>
          </ul>
        </div>
        <div>

        </div>
      </nav>
    </div>
  )
};

export default Browse;
