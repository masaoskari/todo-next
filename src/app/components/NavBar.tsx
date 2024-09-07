"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
function NavBar() {
  const { data: session, status } = useSession();

  return (
    <div className="flex justify-between m-4">
      {status !== "authenticated" ? (
        <button onClick={() => signIn()}>Sign in</button>
      ) : (
        <button onClick={() => signOut()}>Sign out</button>
      )}

      <Image
        src={session?.user?.image ?? "/user.png"}
        alt="user image"
        width={25}
        height={25}
      />
    </div>
  );
}

export default NavBar;
