"use server"
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

async function checkUserExistsByName(iden:number) {
  try {
    const user = await prisma.flashCards.findFirstOrThrow({
      where: { id: iden },
    });
    if (user) {
      console.log('User exists:', user);
      return true;
    } else {
      console.log('User does not exist');
      return false;
    }
  } catch (error) {
    console.error('Error checking user existence:', error);
    throw error;
  }
}
export async function flashCards(pagenumber:number){
const getCard= await prisma.flashCards.findMany({
    where:{
        id:pagenumber
    }
});
return getCard;
}

export async function delFlashCard(identity:number){
    if(!checkUserExistsByName(identity)){
        alert("user not present");
    }
    else{ 
const delCard= await prisma.flashCards.delete({

        where:{
            id:identity
        }
    });
    return delCard;
}
}