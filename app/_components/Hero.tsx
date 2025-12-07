import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full relative h-96 md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] overflow-hidden">
      <Image
        src="/hero.gif"
        alt="Hero Image"
        layout="responsive"
        width={1000}
        height={1000}
        className="w-full h-full object-cover absolute inset-0 "
      />

      <div className="absolute w-full flex flex-col items-center justify-center mt-32 ">
        <h2 className="font-bold text-7xl font-game">Start Your</h2>
        <h2
          className="font-bold text-8xl font-game text-yellow-400"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }} 
        >
          Coding Adventure
        </h2>

        <h2 className="mt-5 font-game text-3xl">
          Beginner friendly coding challenges to level up your skills!
        </h2>

        <Button className="font-game text-3xl p-5 mt-7" variant={"pixel"}>
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;
