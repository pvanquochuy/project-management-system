import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { deleteComment } from "@/redux/Comment/Action";
import { TrashIcon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";

const CommentCard = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteComment(item.id));
  };
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>{item.user.email[0]}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <p>{item.user.email}</p>
          <p>{item.content}</p>
        </div>
        <Button
          onClick={handleDelete}
          className="rounded-full"
          variant="ghost"
          size="icon"
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CommentCard;
