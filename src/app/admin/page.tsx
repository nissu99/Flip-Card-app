"use client";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { delFlashCard, genFlashCard, updateCard } from "@/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Admin() {
  const [problem, setProblem] = useState("");
  const [update,getUpdate]=useState("");
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState<string>("");

  const clearInput = () => {
    setProblem("");
    setAnswer("");
    setId("");
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault(); // Prevents the form from reloading the page
    genFlashCard(problem, answer);
    clearInput();
  };

  const handleDelete = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    delFlashCard(parseInt(id));
    clearInput();
  };
  const handleUpdate=(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    updateCard(parseInt(id),problem,answer);

  }

  return (
    <div className="bg-slate-100 w-full min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Board</h1>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">




        <Card className="w-full md:w-[350px] bg-white shadow-xl rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-900">
              Create Project
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Create a new FlashCard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="question"
                    className="font-semibold text-gray-700"
                  >
                    Question
                  </Label>
                  <Input
                    id="question"
                    placeholder="Enter the question"
                    value={problem}
                    onChange={(event) => setProblem(event.target.value)}
                    className="border rounded-md p-2 text-gray-700"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="answer"
                    className="font-semibold text-gray-700"
                  >
                    Answer
                  </Label>
                  <Input
                    id="answer"
                    placeholder="Give the correct answer"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    className="border rounded-md p-2 text-gray-700"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label
                    htmlFor="framework"
                    className="font-semibold text-gray-700"
                  >
                    Framework
                  </Label>
                  {/* Add framework selection if required */}
                </div>
              </div>
              <CardFooter className="flex justify-between mt-4">
                <Button
                  variant="outline"
                  type="button"
                  onClick={clearInput}
                  className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Submit
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>






        <Card className="w-full md:w-[350px] bg-white shadow-xl rounded-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-900">
              Delete a Card
            </CardTitle>
            <CardDescription className="text-sm text-gray-600">
              You can delete a card
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleDelete}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="id" className="font-semibold text-gray-700">
                    Flip Card ID
                  </Label>
                  <Input
                    id="id"
                    placeholder="ID of your card"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="border rounded-md p-2 text-gray-700"
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between mt-4">
            <Button
              variant="outline"
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
              onClick={clearInput}
            >
              Cancel
            </Button>
            <Button
              variant="outline"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>





       
      </div>
    </div>
  );
}
