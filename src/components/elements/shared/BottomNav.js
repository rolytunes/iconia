import React from "react";
const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 block w-screen">
      <ul className="flex justify-evenly align-baseline p-2 bg-gray-800 text-white">
        <li>Home</li>
        <li>About</li>
        <li>Link</li>
        <li>Link2</li>
      </ul>
    </nav>
  );
};

export default BottomNav;
