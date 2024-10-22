import { Outlet } from "react-router-dom";

function Body() {
  return (
    <main className="h-full w-full bg-stone-950/80">
      <Outlet />
    </main>
  );
}

export default Body;
