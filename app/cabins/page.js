import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Counter from "../_components/Counter";
//import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;
// export const revalidate = 15;

export const metadata = {
  title: "Events",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Events
      </h1>
    

      <div className="flex justify-end mb-8">
       {/*<Filter />*/}
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
