import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative bg-hero-bg bg-cover w-screen h-screen">
      <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] ">
        <Image
          src="/c_logo_label.svg"
          width={430}
          height={430}
          alt="logo"
        />
        
        <p className="text-white mt-[-10px]">
          Open-source, free Minecraft launcher
        </p>
      </div>
    </div>
  );
}
