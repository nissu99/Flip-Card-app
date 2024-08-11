"use client";
import { Button } from "@/components/ui/button";
import QuizCard from "@/components/flipcard";
import { flashCards } from "@/db";
import { useEffect, useState } from "react";
import { FlashcardArray, Flashcard } from "react-quizlet-flashcard";

interface resProps {
  id: number;
  problem: string;
  answer: string;
}

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [res, setRes] = useState<resProps[]>([]);
  const [totalPages, setTotalPages] = useState<number>(10);

  useEffect(() => {
    const fetchData = async () => {
      const response = await flashCards(currentPage); // Assuming flashCards fetches paginated data based on the currentPage
      setRes(response);
    };
    fetchData();
  }, [currentPage]);

  const prevHandler = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const nextHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="App">
      <h1 className="flex justify-center">Quiz App</h1>
      <ul>
        {res.map((r) => (
          <QuizCard key={r.id} question={r.problem} answer={r.answer} />
        ))}
      </ul>
      <div className="flex justify-center p-4">
        <Button onClick={prevHandler} className="p-5" disabled={currentPage === 1}>
          Prev
        </Button>
        <span className="px-4">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={nextHandler} className="p-5" disabled={currentPage === totalPages}>
          Next
        </Button>
      </div>
    </div>
  );
}
