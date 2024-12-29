import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between bg-nav-dark min-h-[75px]">
        <div className="flex flex-row items-center">
          <Image 
            src="/SynthLauncherLabel.png" width={70} height={70} alt="logo"
          />
          
          <Image 
            src="/Label.png" width={170} height={170} alt="label"
          />
        </div>

        <div className="flex gap-2 mr-2">
          <Image 
              src="/github.svg"
              width={35}
              height={35}
              alt="Github icon"
            />

          <Image 
            src="/discord.svg"
            width={38}
            height={38}
            alt="Disocrd icon"
          />

          <Image 
            src="/insta.svg"
            width={35}
            height={35}
            alt="Insta icon"
          />
        </div>
      </div>

      {/* Hero */}
      <div>
        
      </div>
    </div>
  );
}
