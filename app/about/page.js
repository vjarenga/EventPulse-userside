import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import { getCabins } from "../_lib/data-service";

export const revalidate = 86400;

export const metadata = {
  title: "About",
};

export default async function Page() {
  const cabins = await getCabins();

  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to EventPulse
        </h1>

        <div className="space-y-8">
          <p>
          Discover a world of entertainment and activities at your fingertips with 
          EventPulse, your go-to platform for finding and booking tickets to the 
          best upcoming events. Whether you&apos;re a fan of live music, theater,
          sports, festivals, or any other type of gathering, EventPulse makes it 
          easy to stay in the loop and secure your spot at the hottest happenings around.
          </p>
         
        </div>
      </div>

      
      
         

          <div>
            <a
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              View upcoming events
            </a>
          </div>
        </div>
      
  );
}
