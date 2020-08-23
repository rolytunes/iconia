import React from "react";
import Icon from "../../base/Icon";
import TilesContainer from "./../../elements/TilesContainer";

const Home = () => {
  return (
    <>
      <main className="container px-3 mt-3 md:px-0 flex-grow">
        <section className="tile__container">
          <header className="flex items-center mb-2">
            <h2 className="flex-grow text-2xl">Apps</h2>
            <ul>
              <li>
                <a href="." className="py-1 pl-1">
                  <Icon faIcon="question-circle" faSize="md"></Icon>
                </a>
              </li>
            </ul>
          </header>
          <TilesContainer></TilesContainer>
        </section>
      </main>
    </>
  );
};

export default Home;
