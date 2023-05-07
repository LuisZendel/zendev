import Link from "next/link";
import { navLinks } from "../assets/constants";
import { useState } from "react";
export default function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white dark:bg-black dark:text-white text-black text-xl p-5 grid grid-cols-2 fixed top-0 w-full">
      <Link href={"/"} className="flex items-center cursor-pointer">
        <p className="font-bold cursor-pointer flex">ZenDev | Portafolio</p>
      </Link>
      <div className="flex justify-end text-base items-center">
        <ul className="flex gap-2">
          {navLinks.map((e, index) => {
            return (
              <li
                key={e.id}
                onClick={() => {
                  setActive(e.id);
                }}
                className={`${
                  active === e.id
                    ? "font-bold text-sky-600	dark:text-sky-300	 "
                    : ""
                } cursor-pointer`}
              >
                {e.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
