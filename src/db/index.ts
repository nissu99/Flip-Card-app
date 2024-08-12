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
export async function countCards(){
    const count= await prisma.flashCards.count();
return count;
}
export async function delFlashCard(id:number){
const delCard= await prisma.flashCards.delete({

        where:{
            id:id
        }
    });
    return delCard;
}

export async function delAll(){
    const delCard=await prisma.flashCards.deleteMany();
    return delCard;
}
export async function updateCard(id:number,problem:string,answer:string){
const updateUser = await prisma.flashCards.update({
  where: {
    id:id
  },
  data: {
    problem:problem,
    answer:answer
  },
})
}