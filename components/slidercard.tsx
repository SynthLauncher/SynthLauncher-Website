import { useState } from "react";
import { Card } from "./ui/card";
import { LucideProps } from "lucide-react";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";

interface Props {
  icon: React.ComponentType<LucideProps>;
  iconX: React.ComponentType<LucideProps>;
  count: number;
  maxCount: number;
  stepCount: number;
  name: string;

  cardClassName?: string;
  nameClassName?: string;
  iconClassName?: string;
  sliderClassName?: string;
}

const SliderCard = ({
  icon: Icon,
  iconX: IconX,
  count,
  maxCount,
  stepCount,
  name,
  cardClassName,
  nameClassName,
  iconClassName,
  sliderClassName,
}: Props) => {
  const [progress, setProgress] = useState(0);

  return (
    <Card
      className={cn("p-6 bg-purple-900/30 border-purple-500/30", cardClassName)}
    >
      <h3
        className={cn("text-xl font-semibold text-white mb-4", nameClassName)}
      >
        {name}
      </h3>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setProgress(count)}
          className="text-purple-200 hover:text-white transition-colors"
        >
          {progress === 0 ? (
            <IconX className={cn("w-5 h-5", iconClassName)} />
          ) : (
            <Icon className={cn("w-5 h-5", iconClassName)} />
          )}
        </button>
        <Slider
          value={[progress]}
          max={maxCount}
          step={stepCount}
          className={cn("flex-1", sliderClassName)}
          onValueChange={(value) => setProgress(value[0])}
          color="bg-green-500"
        />
        <span className="text-purple-200 min-w-[3ch]">{progress}</span>
      </div>
    </Card>
  );
};

export default SliderCard;
