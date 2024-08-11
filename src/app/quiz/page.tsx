"use client";
import { Button } from "@/components/ui/button";
import QuizCard from "@/components/flipcard";
import { countCards, flashCards } from "@/db";
import { useEffect, useState } from "react";

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
        setTotalPages(tp);
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
      <h1 className="text-4xl font-extrabold text-blue-800 mb-8 animate-pulse">
        Quiz App
      </h1>
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <ul className="space-y-4">
          {res.map((r) => (
            <QuizCard
              key={r.id}
              question={r.problem}
              answer={r.answer}
              className="p-4 border border-blue-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            />
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6">
          <Button
            onClick={prevHandler}
            className="bg-blue-600 text-white rounded-lg px-6 py-2 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <span className="text-lg font-medium text-blue-700">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={nextHandler}
            className="bg-blue-600 text-white rounded-lg px-6 py-2 shadow-lg transition-transform duration-300 transform hover:scale-110 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
