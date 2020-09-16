import React from "react";
import TilesContainer from "components/elements/TilesContainer";
import { Button, Icon } from "components/base/index";
import { Title } from "components/base/Typography/index";

const Home = () => {
  return (
    <>
      <main className="container px-3 mt-3 md:px-0 flex-grow">
        <section className="tile__container">
          <header className="flex items-center mb-2">
            <Title className="flex-grow text-2xl" level="2">
              Apps
            </Title>
            <ul className="flex items-center">
              <li>
                <a href="." className="py-1 pl-1">
                  <Icon faIcon="question-circle"></Icon>
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
