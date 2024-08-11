"use client";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useState } from "react";
import { genFlashCard } from "@/db";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Admin() {
  const [problem, setProblem] = useState("");
  const [answer, setAnswer] = useState("");

  const clearInput = () => {
    setProblem("");
    setAnswer("");
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevents the form from reloading the page
    genFlashCard(problem, answer);
    clearInput();
  };

  return (
    <div>
      <div className="flex justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Create a new FlashCard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="question">Question</Label>
                  <Input
                    id="question"
                    placeholder="Enter the question"
                    value={problem}
                    onChange={(event) => setProblem(event.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="answer">Answer</Label>
                  <Input
                    id="answer"
                    placeholder="Give the correct answer"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                </div>
              </div>
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={clearInput}>
                  Cancel
                </Button>
                <Button type="submit">
                  Submit
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

