import React from "react";
import Link from "next/link";
import { useCategories } from "entities/category";
// TODO: can ui import from an entity?

export const Navigation = () => {
  return (
    <div className="navbar rounded-lg bg-base-100 mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {burgerIcon}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Menu />
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Application Tracker
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Menu />
        </ul>
      </div>
    </div>
  );
};

const burgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);

const Menu = () => {
  const { categories } = useCategories();

  return (
    <>
      <li>
        <Link href="/">Dashboard</Link>
      </li>
      {categories?.map(({ id, title }) => {
        return (
          <li key={id}>
            <Link href={`/category/${id}`}>{title}</Link>
          </li>
        );
      })}
    </>
  );
};
