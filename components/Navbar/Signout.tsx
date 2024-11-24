"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";


const Signout = () => {

  const { toast } = useToast();

  const handleLogout = () => {
    toast({ description: "👋 Logout Successfully! 👋" });
  };

  return (
    <SignOutButton redirectUrl="/">
      <button  className="w-full text-left mx-4 py-4 text-1xl"  onClick={handleLogout}>Logout</button>
    </SignOutButton>
  );
};

export default Signout;
