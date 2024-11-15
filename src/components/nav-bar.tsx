"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-medium">
          Home
        </Link>
        {!session ? (
          <Button asChild variant="outline">
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        ) : (
          <Button variant="outline" onClick={() => signOut()}>
            Sign Out
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavBar;