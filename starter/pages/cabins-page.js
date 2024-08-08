import CabinCard from "@/app/_components/CabinCard";

export default function Page() {
  // CHANGE
  const cabins = [];

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Upcoming events
      </h1>
      

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  );
}
