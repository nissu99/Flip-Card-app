"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
 
 export default function Home() {
 const router = useRouter()
  return (
    <div className="flex justify-center">
      <h1>
        DashBoard
      </h1>
      <p className="mt-10 text-center text-sm text-gray-500">

</p>
<Button onClick={()=>{ router.push("/admin")}}>
hi
</Button>

 </div>
  );
}
