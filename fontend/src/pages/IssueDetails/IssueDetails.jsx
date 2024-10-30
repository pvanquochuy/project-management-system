import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useParams } from "react-router-dom";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIssueById, updateIssuesStatus } from "@/redux/Issue/Action";
import { fetchComments } from "@/redux/Comment/Action";

const IssueDetails = () => {
  const { projectId, issueId } = useParams();
  const dispatch = useDispatch();
  const { issue, comment } = useSelector((store) => store);

  const handleUpdateIssueStatus = (status) => {
    dispatch(updateIssuesStatus({ status, id: issueId }));
    console.log(status);
  };

  useEffect(() => {
    dispatch(fetchIssueById(issueId));
    dispatch(fetchComments(issueId));
  }, [issueId]);
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg">
        <ScrollArea>
          <div className="h-80vh w-[60%]">
            <h1 className="text-lg font-semibold text-gray-400">
              {issue.issueDetails?.title}
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Description</h2>
              <p className="text-gray-400 text-sm mt-3">
                {issue.issueDetails?.description}
              </p>
            </div>
            <div className="mt-5">
              <h1 className="pb-3">Activity</h1>
              <Tabs defaultValue="comments" className="w-[400px]">
                <TabsList className="mb-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  All make changes to your account here
                </TabsContent>
                <TabsContent value="comments">
                  <CreateCommentForm issueId={issueId} />
                  <div className="mt-8 space-y-6">
                    {comment.comments.map((item) => (
                      <CommentCard item={item} key={item} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">
                  History change your passowrd here
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>

        <div className="w-full lg:w-[30%] space-y-2">
          <Select onValueChange={handleUpdateIssueStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progess">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>

            <div className="p-5">
              <div className="space-y-7">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee</p>
                  {issue.issueDetails?.assignee?.fullName ? (
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 text-xs">
                        <AvatarFallback>
                          {issue.issueDetails?.assignee?.fullName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <p>{issue.issueDetails?.assignee?.fullName}</p>
                    </div>
                  ) : (
                    <p>unassigned</p>
                  )}
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Labels</p>
                  <p>None</p>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Status</p>
                  <Badge>{issue.issueDetails?.status}</Badge>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Realese</p>
                  <p>19-04-2024</p>
                </div>

                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Repoter</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 text-xs">
                      <AvatarFallback>R</AvatarFallback>
                    </Avatar>
                    <p>Ram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
