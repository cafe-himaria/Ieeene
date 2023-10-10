import React from "react";
import qiita from "../assets/qiita.png";
import instagram from "../assets/instagram.png";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const menuItems = [
    {
      name: "Qiita",
      icon: qiita,
      url: "/qiita",
    },
    {
      name: "Insta",
      icon: instagram,
      url: "/instagram",
    },
  ];

  return (
    <>
      <div className="bg-neutral-900 h-full text-white pt-4">
        {menuItems.map((item) => {
          return (
            <Link
              to={item.url}
              className="flex flex-col justify-center w-full hover:bg-neutral-700 py-2 cursor-pointer"
            >
              <div className="mb-1 flex justify-center">
                <img src={item.icon} alt={item.name} className="w-8" />
              </div>
              <div className="text-center">{item.name}</div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
