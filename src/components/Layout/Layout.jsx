import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { Loader } from "../Loader/Loader";


export const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog">Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Favorites</NavLink>
        </li>
      </ul>
      <div>
        <Suspense fallback={<Loader />}>
          <main>
            <Outlet />
          </main>
        </Suspense>
      </div>
    </>
  );
};
