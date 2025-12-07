import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const courses = [
  {
    id: 1,
    name: "HTML",
    description:
      "Learn the basics and fundamentals of HTML and building structure web pages.",
    path: "/courses/1/detail",
  },
  {
    id: 2,
    name: "CSS",
    description:
      "Master the art of styling and designing responsive layouts with CSS and make your web pages look stunning.",
    path: "/courses/2/detail",
  },
  {
    id: 3,
    name: "React",
    description:
      "Build dynamic user interfaces and single-page applications using React library and its powerful features.",
    path: "/courses/3/detail",
  },
  {
    id: 4,
    name: "React Advanced",
    description:
      "Build advanced React concepts including hooks, context API, and performance optimization techniques.",
    path: "/courses/4/detail",
  },
  {
    id: 5,
    name: "Python",
    description:
      "Learn Python programming language from basics to intermediate concepts and its applications in web development.",
    path: "/courses/5/detail",
  },
  {
    id: 6,
    name: "Python Advanced",
    description:
      "Master advanced Python concepts such as OOP, applications and frameworks using Python programming language.",
    path: "/courses/6/detail",
  },
  {
    id: 7,
    name: "Generative AI",
    description:
      "Explore Prompt engineering, LLMs, embeddings, image generation  and the world of Generative AI and its applications in various domains.",
    path: "/courses/7/detail",
  },
  {
    id: 8,
    name: "Machine Learning",
    description:
      "Dive into the fundamentals of Machine Learning, algorithms, and practical implementations using popular libraries and frameworks.",
    path: "/courses/8/detail",
  },
  {
    id: 9,
    name: "JavaScript",
    description:
      "Learn JavaScript programming language from basics to advanced concepts and its applications in web development.",
    path: "/courses/9/detail",
  },
];

function Header() {
  return (
    <div className="p-4 max-w-7xl flex justify-between items-center w-full">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src="/logo.png" alt="Lo go" width={40} height={40} />
        <h2 className="font-bold text-3xl font-game">CodeBox</h2>
      </div>

      {/* Navbar */}

      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
            <NavigationMenuContent>
                <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                    {courses.map((course,index) => (
                        // <li key={index} >
                            <div key={index} className="p-3 hover:bg-accent/50 rounded-xl cursor-pointer">
                                <h2 className="font-bold">{course.name}</h2>
                                <p className="text-sm text-gray-500">{course.description}</p>
                            </div>
                        // </li>
                    ))}
                </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/projects"}>Projects</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/pricing"}>Pricing</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link href={"/contact-us"}>Contact Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* SignUp Button */}
      <Button variant={"pixel"} className=" text-2xl font-game">
        Sign Up
      </Button>
    </div>
  );
}

export default Header;
