import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

const CommentCard = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>Z</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p>Code with Huy</p>
          <p>How much work is pending</p>
        </div>
        <Button className="rounded-full" variant="ghost" size="icon">
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CommentCard;
