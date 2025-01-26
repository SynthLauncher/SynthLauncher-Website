import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  trigger: string;
  dialogTitle: string;
  dialogDescription: string;
  children: React.ReactNode;

  cardClassName?: string;
  titleClassName?: string;
  dialogTriggerClassName?: string;
  dialogTriggerButtonClassName?: string;
  dialogContentClassName?: string;
  dialogHeaderClassName?: string;
  dialogTitleClassName?: string;
  dialogDescriptionClassName?: string;
}

const DialogCard = ({
  title,
  trigger,
  dialogTitle,
  dialogDescription,
  children,
  cardClassName,
  dialogTriggerClassName,
  dialogContentClassName,
  dialogTriggerButtonClassName,
  dialogHeaderClassName,
  dialogTitleClassName,
  dialogDescriptionClassName,
  titleClassName,
}: Props) => {
  return (
    <Card
      className={cn("p-6 bg-purple-900/30 border-purple-500/30", cardClassName)}
    >
      <h3
        className={cn("text-xl font-semibold text-white mb-4", titleClassName)}
      >
        {title}
      </h3>

      <Dialog>
        <DialogTrigger asChild className={dialogTriggerClassName}>
          <Button
            className={cn(
              "w-full bg-purple-600 hover:bg-purple-700",
              dialogTriggerButtonClassName
            )}
          >
            {trigger}
          </Button>
        </DialogTrigger>

        <DialogContent
          className={cn(
            "bg-purple-900/95 border-purple-500/30 text-white",
            dialogContentClassName
          )}
        >
          <DialogHeader className={dialogHeaderClassName}>
            <DialogTitle className={dialogTitleClassName}>
              {dialogTitle}
            </DialogTitle>
            <DialogDescription
              className={cn("text-purple-200", dialogDescriptionClassName)}
            >
              {dialogDescription}
            </DialogDescription>
          </DialogHeader>

          {children}
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default DialogCard;
