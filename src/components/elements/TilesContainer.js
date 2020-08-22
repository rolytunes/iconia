import React from "react";
import Icon from "../base/Icon";
import { Link } from "react-router-dom";

const TilesContainer = () => {
  return (
    <section className="grid grid-cols-4 grid-rows-6 gap-2 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 text-white">
      <Link
        to="/cv"
        className="shadow bg-red-500 hover:bg-red-400 h-full p-3 flex flex-row justify-between items-center"
      >
        <span className="text-lg">CV</span>
        <Icon faIcon="id-card" faSize="lg"></Icon>
      </Link>
      <Link
        to="/vr"
        className="shadow bg-red-500 hover:bg-red-400 h-full p-3 flex flex-row justify-between items-center"
      >
        <span className="text-lg">VR</span>
        <Icon faIcon="vr-cardboard" faSize="lg"></Icon>
      </Link>
      <Link
        to="/blog"
        className="shadow bg-red-500 hover:bg-red-400 h-full p-3 flex flex-row justify-between items-center row-start-2 col-start-2 md:row-start-2 md:col-start-1 md:col-span-2"
      >
        <span className="text-lg">Blog</span>
        <Icon faIcon="newspaper" faSize="lg"></Icon>
      </Link>
      <Link
        to="/travel"
        className="shadow bg-red-500 hover:bg-red-400 h-full col-span-2 row-span-2 p-3 flex flex-row justify-between items-end"
      >
        <span className="text-lg">Travelr</span>
        <Icon faIcon="map-marked-alt" faSize="lg"></Icon>
      </Link>
      <Link
        to="/erp"
        className="shadow bg-red-500 hover:bg-red-400 h-full col-span-2 row-span-2 md:row-start-1 p-3 flex flex-row justify-between items-end"
      >
        <span className="text-lg">ERP</span>
        <Icon faIcon="database" faSize="lg"></Icon>
      </Link>
      <Link
        to="/ecommerce"
        className="shadow bg-red-500 hover:bg-red-400 h-full col-span-2 row-span-2 p-3 flex flex-row justify-between items-end"
      >
        <span className="text-lg">eCommerce</span>
        <Icon faIcon="shopping-cart" faSize="lg"></Icon>
      </Link>
      <Link
        to="/stream"
        className="shadow bg-red-500 hover:bg-red-400 h-full row-span-2 md:col-span-2 p-3 flex flex-row justify-between items-end"
      >
        <span className="text-lg">Stream</span>
        <Icon faIcon="play-circle" faSize="lg"></Icon>
      </Link>
    </section>
  );
};

export default TilesContainer;
