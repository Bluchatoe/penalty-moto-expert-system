export default function Law() {
  return (
    <div className="w-full h-screen max-h-screen overflow-y-auto relative">
      <div className="max-w-7xl  mx-auto flex flex-col py-8 gap-4">
        <HeroSection />
        <Sections />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between ">
        {/* Republic of the Philippines */}

        <div className="flex items-center gap-4">
          <div className="max-h-20 max-w-20">
            <img
              src="/src/assets/house_of_representitive.png"
              alt="logo of congress"
            />
          </div>

          <div>
            <h3 className="uppercase text-amber-100 font-thin">
              Republic of the Philippines
            </h3>
            <h2 className="uppercase font-bold text-xl">
              Congress of the Philippines
            </h2>
            <p className="text-stone-400">Metro Manila</p>
          </div>
        </div>

        {/* Seventeeth Congress */}
        <div className="flex flex-col items-end">
          <h4>Seventeenth Congress</h4>
          <h4 className="text-stone-400">Third Regular Session</h4>
        </div>
      </div>

      {/* Name of RA */}
      <div className="mt-10 flex flex-col gap-3">
        <h6 className="flex justify-between items-center">
          Begun and held in Metro Manila, on Monday, the twenty-third day of
          July, two thousand eighteen.
          <span className="text-sm text-stone-300 flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            23rd July, 2018 Mon
          </span>
        </h6>

        {/* The image */}
        <div className="bg-stone-800 flex flex-col justify-between p-8 min-h-80 relative border border-amber-200/10">
          {/* The background image */}
          <img
            src="/src/assets/motocycles.jpg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-75"></div>

          <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-100/30 opacity-10"></div>

          {/* Content */}
          <h3 className="text-2xl text-amber-400 z-20">
            REPUBLIC ACT No. 11235
          </h3>

          <h2 className="text-4xl z-20">
            An Act Preventing and Penalizing the Use of Motorcycles in the
            Commission of Crimes By Requiring Bigger, Readable and Color-Coded
            Number Plates and Identification Marks, and for Other Purposes
          </h2>
        </div>

        {/* The three something */}
        <div className="grid grid-cols-3 min-h-40 gap-4 mt-1">
          {/* Sections */}
          <div className="bg-stone-700 px-4 py-3 flex flex-col justify-between">
            <div>
              <p className="text-sm text-stone-200">Section Overview</p>
            </div>

            <div className="flex gap-3 items-end">
              <span className="font-bold text-6xl">21</span>

              <div className="flex flex-col">
                <p className="text-xs mb-[-2px] text-stone-400">
                  Total Number of{" "}
                </p>
                <p className="text-2xl">Sections</p>
              </div>
            </div>
          </div>

          {/* Approval Timeline */}
          <div className="bg-stone-700 px-4 py-3 flex flex-col ">
            <div>
              <p className="text-sm text-stone-200">Approval Timeline</p>
            </div>

            <div className="mt-auto flex gap-3 items-center">
              <div className="flex flex-col">
                <p className="text-xs mb-[-2px] text-stone-400">
                  Passed by Senate
                </p>
                <p className="text-lg">December 13, 2018</p>
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <div className="flex flex-col">
                <p className="text-xs mb-[-2px] text-stone-400">
                  Passed by House:
                </p>
                <p className="text-lg">January 14, 2019</p>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex flex-col">
                <p className="text-sm mb-[-2px] text-stone-400">Approved</p>
                <p className="text-xl">March 8, 2019</p>
              </div>
            </div>
          </div>

          {/* Key Person */}

          <div className="bg-stone-800 px-4 py-3 flex flex-col ">
            <div>
              <p className="text-sm text-stone-200">Key Signatories</p>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex flex-col">
                <p className="text-xs mb-[-2px] text-stone-400">
                  Speaker of the House
                </p>
                <p className="text-lg">Gloria Macapagal-Arroyo</p>
              </div>

              <div className="flex flex-col">
                <p className="text-xs mb-[-2px] text-stone-400">
                  President of the Senate
                </p>
                <p className="text-lg">Vicente C. Sotto III</p>
              </div>

              <div className="flex flex-col">
                <p className="text-sm mb-[-2px] text-stone-400">
                  President of the Philippines
                </p>
                <p className="text-xl">Rodrigo Roa Duterte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sections() {
  return (
    <div className="flex flex-col pb-36">
      {/* Line */}
      <div className="w-full max-h-1 my-10">
        <img
          src="/src/assets/royal-line-gold.png"
          alt=""
          className="mx-auto h-16 opacity-40"
        />
      </div>

      <h2 className="text-center mt-10 text-5xl">Sections</h2>
      <p className="text-center mt-2 text-lg text-stone-400">
        Be it enacted by the Senate and House of Representatives of the
        Philippine Congress Assembled:
      </p>

      <div className="flex items-start p-8">
        {/* Section List container */}
        <aside className="w-full max-w-64 sticky top-9">
          <p className="mb-4">Section list</p>
          <nav className="flex flex-col gap-2">
            <ul
              onClick={(e) => {
                e.preventDefault();
                const target = e.target;
                const id = target.getAttribute("href").replace("#", "");
                const element = document.getElementById(id);
                element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <li>
                <a href="#section1">Section 1</a>
              </li>
              <li>
                <a href="#section2">Section 2</a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Sections */}
        <div className="w-full flex flex-col">
          {/* Section 1 */}
          <div
            id="section1"
            className="element"
            style={{ height: "100vh", backgroundColor: "transparent" }}
          >
            <h2>Section 1</h2>
            <p>Content of Section 1</p>
          </div>

          {/* Section 2 */}
          <div
            id="section2"
            className="element"
            style={{ height: "100vh", backgroundColor: "transparent" }}
          >
            <h2>Section 2</h2>
            <p>Content of Section 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
