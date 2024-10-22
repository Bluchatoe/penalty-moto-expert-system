import { NavLink } from "react-router-dom";
import Body from "./Body";

export default function Root() {
  return (
    <div className="w-full h-full bg-stone-900 text-white flex flex-col">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-amber-400/10 p-4 relative bg-stone-950/65">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Img */}
          <div className="max-h-10 max-w-10">
            <img
              src="/src/assets/helmet_amber.png"
              alt=""
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-bold text-lg">PenaltyMoto PH</h2>
            <p className="text-sm text-amber-400/70 font-poppins">
              RA 11235 Expert System
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="absolute inset-0 w-full ">
          <ul className="h-full flex justify-center items-center gap-6">
            <li>
              <NavLink
                to="/expert-system"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 font-medium hover:text-amber-700 flex items-center gap-2"
                    : "text-stone-400 hover:text-stone-200 flex items-center gap-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                Expert System
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/law"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-500 font-medium hover:text-amber-700 flex items-center gap-2"
                    : "text-stone-400 hover:text-stone-200 flex items-center gap-2"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  className="size-5"
                >
                  <path d="M384 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L398.4 96c-5.2 25.8-22.9 47.1-46.4 57.3L352 448l160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 0-294.7c-23.5-10.3-41.2-31.6-46.4-57.3L128 96c-17.7 0-32-14.3-32-32s14.3-32 32-32l128 0c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288l144.9 0L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320l144.9 0L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z" />
                </svg>
                Law | RA 11235
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* RIGHT */}
        <div>Profile</div>
      </div>
    </header>
  );
}
