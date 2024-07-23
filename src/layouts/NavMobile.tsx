import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Menu, X } from "lucide-react";
const NavMobile = ({links} : {links : {title : string , href : string}[] }) => {


  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-main-color" />
        </SheetTrigger>
        <SheetContent className="bg-[#000022] border-[#000022] text-white">
          <SheetHeader>
            <SheetTitle className="flex justify-between items-center">
              <a href={"/"}>
                <img src={"/logo.svg"} alt="logo" width={150} height={80} />
              </a>
              <SheetClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                <X className="h-5 w-5 text-white" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetTitle>
            <SheetDescription>
              <ul className="flex flex-col text-start width-fill-available text-white gap-5 my-5">
                {links.map((link) => (
                  <li key={link.href}>
                      <a
                        href={link.href}
                        className={`border-transparent text-xl border-b `}
                      >
                        {link.title}
                      </a>
                  </li>
                ))}
              
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
