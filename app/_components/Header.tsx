"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const courses = [
  { id: 1, name: "HTML", description: "Learn HTML basics.", path: "#" },
  { id: 2, name: "CSS", description: "Master CSS styling.", path: "#" },
  { id: 3, name: "React", description: "Build SPAs with React.", path: "#" },
  { id: 4, name: "React Advanced", description: "Advanced React concepts.", path: "#" },
  { id: 5, name: "Python", description: "Learn Python end-to-end.", path: "#" },
  { id: 6, name: "Python Advanced", description: "Advanced Python.", path: "#" },
  { id: 7, name: "Generative AI", description: "Learn AI & LLMs.", path: "#" },
  { id: 8, name: "Machine Learning", description: "ML algorithms.", path: "#" },
  { id: 9, name: "JavaScript", description: "JS complete course.", path: "#" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  return (
    <header className="p-4 max-w-7xl mx-auto flex justify-between items-center w-full relative">
      {/* LOGO */}
      <div className="flex gap-2 items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h2 className="font-bold text-2xl md:text-3xl font-game">CodeBox</h2>
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="hidden md:flex items-center gap-6">
        <NavigationMenu>
          <NavigationMenuList className="gap-8">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-2 p-4">
                  {courses.map((course) => (
                    <li key={course.id}>
                      <Link href={course.path}>
                        <div className="p-3 hover:bg-accent/50 rounded-xl cursor-pointer">
                          <h2 className="font-bold">{course.name}</h2>
                          <p className="text-sm text-gray-500">{course.description}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink>
                <Link href="/contact-us">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="pixel" className="text-xl font-game">
          Sign Up
        </Button>
      </div>

      {/* MOBILE MENU TOGGLE */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 bg-black shadow-xl transform transition-transform duration-300 z-50 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex flex-col gap-6">
          {/* CLOSE BUTTON */}
          <button
            className="text-3xl self-end"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>

          {/* COURSES DROPDOWN */}
          <div>
            <button
              onClick={() => setShowCourses(!showCourses)}
              className="flex justify-between w-full text-lg font-semibold"
            >
              Courses <ChevronDown className={`transition ${showCourses ? "rotate-180" : ""}`} />
            </button>

            {showCourses && (
              <ul className="mt-3 flex flex-col gap-3">
                {courses.map((course) => (
                  <li key={course.id}>
                    <Link href={course.path}>
                      <div className="p-3 hover:bg-accent/50 rounded-xl cursor-pointer bg-gray-50">
                        <h2 className="font-bold">{course.name}</h2>
                        <p className="text-sm text-gray-500">{course.description}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* OTHER LINKS */}
          <Link href="/projects" className="text-lg font-medium">Projects</Link>
          <Link href="/pricing" className="text-lg font-medium">Pricing</Link>
          <Link href="/contact-us" className="text-lg font-medium">Contact Us</Link>

          {/* SIGNUP BUTTON */}
          <Button variant="pixel" className="text-xl font-game mt-4">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
