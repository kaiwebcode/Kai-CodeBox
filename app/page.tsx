import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1 className="font-game text-5xl">Welcome to Kai-CodeBox</h1>
    <p>Your coding platform.</p>
    <Button>
      Get Started
    </Button>
   </div>
  );
}
