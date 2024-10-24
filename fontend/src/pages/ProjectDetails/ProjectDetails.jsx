import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "@radix-ui/react-icons";
import InviteUserForm from "./InviteUserForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetails = () => {
  const handleProjectInvitaion = () => {
    // 8:31
  };

  return (
    <>
      <div className="mt-5 lg:px-10">
        <div className="lg:flex gap-5 justify-between pb-4">
          <ScrollArea className="h-screen lg:w-[69%] pr-2">
            <div className="text-gray-400 pb-10 w-full space-y-4">
              {" "}
              {/* Applied space-y-4 for consistent spacing */}
              <h1 className="text-lg font-semibold">
                Create Ecommerce Website Using React
              </h1>
              <div className="space-y-5 text-sm">
                <p className="w-full md:max-w-lg lg:max-w-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex">
                <p className="w-36">Project Lead :</p>
                <p>Zosh</p>
              </div>
              <div className="flex items-center">
                <p className="w-36">Members:</p>
                <div className="flex items-center gap-2">
                  {[1, 1, 1, 1].map((item, index) => (
                    <Avatar key={index} className="cursor-pointer">
                      <AvatarFallback>Z</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger>
                    <DialogClose>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleProjectInvitaion}
                        className="ml-2"
                      >
                        <span>Invite</span>
                        <PlusIcon className="w-3 h-3" />
                      </Button>
                    </DialogClose>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Invite User</DialogTitle>
                    </DialogHeader>
                    <InviteUserForm />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex">
                <p className="w-36">Category:</p>
                <p>Fullstack</p>
              </div>
              <div className="flex">
                <p className="w-36">Project Lead:</p>
                <Badge>Zosh</Badge>
              </div>
              <section>
                <p className="py-5 border-b text-lg -tracking-wider">Tasks</p>
                <div className="lg:flex md:flex gap-3 justify-between py-5">
                  <IssueList status="pending" title="Todo List" />
                  <IssueList status="in_progress" title="In Progress" />
                  <IssueList status="done" title="Done" />
                </div>
              </section>
            </div>
          </ScrollArea>

          <div className="lg:w-[30%] rounded-md sticky right-5 top-10">
            <ChatBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
