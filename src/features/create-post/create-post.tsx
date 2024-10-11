import "./create-post.scss";
import { FC } from "react";
import { Undo } from "lucide-react";

type Props = {
  onClose: VoidFunction;
};

export const CreatePostModal: FC<Props> = ({ onClose }) => {
  return (
    <div className={"create_post_modal"}>
      <div className={"create_post_modal__header"}>
        <h2>Создать пост</h2>
        <Undo size={24} onClick={onClose} />
      </div>
    </div>
  );
};
