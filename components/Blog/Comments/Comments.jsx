import { Comment } from './Comment';
import { CommentBox } from './CommentBox';

export const Comments = ({ comments, page }) => {
    const { records } = comments;

    return (
        <>
            <CommentBox page={page} />
            {records.map((record) => {
                return <Comment name={record.fields.name} comment={record.fields.comment} />;
            })}
        </>
    );
};
