"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image'
import { Menu } from 'lucide-react'

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import logo from '../images/spiraxystudio.svg' // Adjust the path as necessary

const navItems = [
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/contact" },
  { title: "About", href: "/about" },
]

function Navbar() {
  return (
    <div className="flex justify-between items-center mt-5">
      <Link href="/" className="flex items-center gap-2">
        <div className="rounded-xl w-10 h-10 overflow-hidden">
          <Image 
            src={logo} 
            width={50}
            height={50}
            alt="Spiraxy Studio" 
          />
        </div>
        <span className="text-lg font-semibold hidden md:flex">
          SPIRAXY STUDIOS
        </span>  
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button>Book a Call</Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button
             variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[380px] m-4 border-none">
            <nav className="flex flex-col space-y-2 bg-[--background] w-full h-auto p-4 rounded-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                >
                  {item.title}
                </Link>
              ))}
              <Button className="mt-4">Book a Call</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default Navbar;