import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";

interface Props {
  count: number;
  speed: number;
  name: string;
  color: string;

  cardClassName: string;
  nameClassName: string;
  progressClassName: string;
}

const ProgressBar = ({
  speed = 100,
  count = 0,
  name,
  cardClassName,
  nameClassName,
  progressClassName,
  color,
}: Props) => {
  const [progress, setProgress] = useState(count);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, speed);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card
      className={cn("p-6 bg-purple-900/30 border-purple-500/30", cardClassName)}
    >
      <h3
        className={cn("text-xl font-semibold text-white mb-4", nameClassName)}
      >
        {name}
      </h3>
      <Progress
        value={progress}
        className={cn("bg-purple-950 h-2", progressClassName)}
        color={color}
      />
      <p className="text-purple-200 mt-2 text-sm">{progress}% Complete</p>
    </Card>
  );
};

export default ProgressBar;
