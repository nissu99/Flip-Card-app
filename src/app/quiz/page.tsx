"use client";
import { Button } from "@/components/ui/button";
import QuizCard from "@/components/flipcard";
import { countCards, findLastId, flashCards } from "@/db";
import { useEffect, useState } from "react";
import ProgressBar from "@/components/progress-bar";

interface resProps {
  id: number;
  problem: string;
  answer: string;
}

export default function Quiz() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [res, setRes] = useState<resProps[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await flashCards(currentPage);
        const tp = await countCards();
        const meet = await findLastId();
        setTotalPages(meet);
        setRes(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
    <div className="bg-gradient-to-br from-blue-100 to-blue-300 min-h-screen flex flex-col items-center p-6">
      <h1 className="text-5xl font-extrabold text-blue-800 mb-12 animate-pulse">
        Quiz App
      </h1>
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 border border-gray-200 mb-8">
        <ul className="space-y-8">
          {res.map((r) => (
            <QuizCard
              key={r.id}
              question={r.problem}
              answer={r.answer}
              className="p-8 border-2 border-blue-300 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl w-full h-full text-lg"
            />
          ))}
        </ul>
        <div className="flex justify-between items-center mt-12">
          <Button
            onClick={prevHandler}
            className="bg-blue-600 text-white rounded-xl px-10 py-4 text-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <span className="text-2xl font-medium text-blue-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={nextHandler}
            className="bg-blue-600 text-white rounded-xl px-10 py-4 text-lg shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <ProgressBar  currentAmount={currentPage} maxAmount={totalPages} streak={0} />
      </div>
    </div>
  );
}