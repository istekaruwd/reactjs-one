export default function CommentList({ comment }) {
  return (
    <li>
      <div className="single_comment">
        <img src={comment.proPic} alt={comment.name} loading="lazy" />
        <div className="single_comment_content">
          <div className="single_comment_content_header">
            <span>{comment.name}</span>
            <span>{comment.date}</span>
          </div>
          <div className="single_comment_content_text">{comment.text}</div>
        </div>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <ul>
          {comment.replies.map((reply) => (
            <CommentList key={reply.id} comment={reply} />
          ))}
        </ul>
      )}
    </li>
  );
}
