"use server"
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();
export async function genFlashCard(problem:string,answer:string){
const newCard= await prisma.flashCards.create({
    data:{
        problem:problem,
        answer:answer
    },
})
return newCard
}
export async function flashCards(pagenumber:number){
const getCard= await prisma.flashCards.findMany({
    where:{
        id:pagenumber

    }
});
return getCard;
}