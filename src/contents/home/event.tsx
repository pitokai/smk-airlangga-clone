import { dataevent } from "../../data";
import { Link } from "react-router-dom";

export function HomeEvent() {
  return (
    <div id="events">
      <h1 className="mt-10 text-center text-5xl font-black uppercase text-slate-900 dark:text-slate-200">
        Event
      </h1>

      <div className="flex w-screen flex-wrap justify-center">
        {dataevent.map((devent) => {
          return (
            <Link
              to={`event/${devent.slug}`}
              className="group relative m-10 block h-72 w-full w-screen overflow-hidden rounded-lg shadow-md duration-300 lg:h-96 lg:w-1/2"
              key={devent.slug}
            >
              <div
                id="home"
                className="flex h-full w-full items-center justify-center bg-black bg-opacity-50 p-3 duration-500 hover:bg-opacity-30 hover:font-black hover:uppercase"
              >
                <img
                  src={devent.heroImgUrl + ".jpg"}
                  alt={devent.name}
                  className="absolute bottom-0 z-[-1] h-full w-full"
                />
                <div>
                  <h5 className="mb-2 text-xl font-bold uppercase lg:text-4xl">
                    {devent.name}
                  </h5>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
