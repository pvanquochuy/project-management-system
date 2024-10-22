import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IssueCard from "./IssueCard";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

const IssueList = ({ title, status }) => {
  return (
    <div>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <IssueCard />
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
              <Button
                variant="outline"
                className="w-full border flex items-center gap-2"
              >
                <PlusIcon />
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
