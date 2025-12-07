import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px] 2xl:h-[850px] overflow-hidden">

      {/* Optimized responsive image */}
      <Image
        src="/hero.gif"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-10 md:mt-0 ">
        <h2 className="font-bold font-game text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Start Your
        </h2>

        <h2
          className="font-bold font-game text-yellow-400 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2"
          style={{
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
          }}
        >
          Coding Adventure
        </h2>

        <h3 className="mt-4 font-game text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-2xl">
          Beginner friendly coding challenges to level up your skills!
        </h3>

        <Button
          className="font-game text-xl sm:text-2xl md:text-3xl px-6 md:px-10 py-3 md:py-4 mt-6"
          variant="pixel"
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default Hero;
