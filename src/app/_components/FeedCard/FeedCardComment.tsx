import { Avatar } from "@/ui/Avatar";
import { publicSans } from "@/assets/fonts/fonts";
import { Comments } from "@/domains/Post";

import { formatDate } from "@/helpers/formatDate";

export const FeedCardComment = (comment: Comments) => {
  return (
    <div className="flex justify-between gap-3 w-full p-5 rounded-lg min-h-11 h-full bg-slate-75">
      <Avatar name={comment.author} />

      <div className="flex flex-1 flex-col gap-1">
        <div className="flex justify-between">
          <h3 className={`${publicSans.className} text-sm font-semibold text-white`}>
            {comment.author}
          </h3>
          <span className={`${publicSans.className} text-xs font-normal text-slate-300`}>
            {formatDate(comment.createdAt)}
          </span>
        </div>

        <p className={`${publicSans.className} text-sm font-semibold text-slate-200`}>
          {comment.comment}
        </p>
      </div>
    </div>
  )
}