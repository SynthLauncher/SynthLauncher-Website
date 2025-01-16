import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-[90rem]">
      {/* Sector 1 */}
      <div className="bg-hero bg-cover bg-center w-full h-[829px] flex justify-center">
        <div className="flex flex-col gap-2 justify-center items-center mb-[250px]">
          {/* Logo and Label */}
          <Image 
            src="/herologo.svg"
            width={450}
            height={450}
            alt="Logo and Label"
          />

          {
            /* 
              For testing!
            */
          }
          {/* Button */}
          <Button className="w-[220px] h-[50px] rounded-lg bg-cyan-500">
            <div className="flex items-center gap-2">
              {/* Download Icon */}
              <Image 
                src="/download.svg"
                width={25}
                height={25}
                alt="Download Icon"
              />

              <p className="font-lato font-lato-700 text-xl">Download</p>
            </div>
          </Button>
        </div>
      </div>

      {/* Sector 2 */}
      <div>
        
      </div>

      {/* Sector 3 */}    
      <div>

      </div>

      {/* Sector 4 */}
      <div>

      </div>
    </main>
  );
}
