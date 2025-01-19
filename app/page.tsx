import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="h-[90rem]">
      {/* Sector 1 */}
      <div className="bg-hero bg-cover bg-center w-full h-[740px] flex justify-center">
        <div className="flex flex-col my-auto gap-2 justify-center items-center mb-[250px]">
          {/* Logo and Label */}
          <Image
            src="/herologo.svg"
            width={550}
            height={550}
            alt="Logo and Label"
          />

          {/*
              TODO: Add hover animation!
            */}
          {/* Button */}
          <Button variant="download" size="nm">
            <div className="flex items-center justify-center gap-2">
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
      <div className="bg-black h-[601px] flex flex-col gap-[50px] pt-[100px]">
        {/* Intro */}
        <div className="flex flex-col items-center gap-3 text-white">
          {/* Header */}
          <h1 className="font-nunito font-nunito-700">
            Revolutionize your Minecraft journey
          </h1>

          {/* Paragraph */}
          <h5 className="font-nunito font-nunito-500 w-[1100px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </h5>
        </div>

        {/* Cards Container */}
        <div className="w-screen flex justify-center">
          <div className="grid gap-[50px] xl:grid-cols-3 lg:grid-cols-2 lg:gap-[75px] md:grid-cols-2 sm:grid-cols-1 sm:gap-[50px]">
            {/* Card Container */}  
            <div className="">
              <Card className="hover:bg-orange-purple-gradient hover:text-white transition-all duration-300 hover:translate-y-[-10px] w-[350px] h-[140px] overflow-hidden bg-steel-gradient text-card-gray">
                <CardHeader>
                  <CardTitle>
                    <div className="flex flex-row items-center gap-2">
                      <Image
                        src="/airphones.svg"
                        width={25}
                        height={25}
                        alt="Airphones"
                      />
                      Lorem Ipsum
                    </div>
                  </CardTitle>
                  <CardDescription>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, consectetur. Inventore veritatis ipsum nesciunt nobis iure minima expedita esse.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Sector 3 */}
      <div></div>

      {/* Sector 4 */}
      <div></div>
    </main>
  );
}
