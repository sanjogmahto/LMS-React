import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { playlists, comments as initialComments } from '../data.js';

function findVideo(videoId) {
  for (const playlist of Object.values(playlists)) {
    const video = playlist.videos.find((v) => v.id === videoId);
    if (video) return { video, playlist };
  }
  return null;
}

export default function WatchVideo() {
  const { videoId } = useParams();
  const found = useMemo(() => findVideo(videoId), [videoId]);

  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(44);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLiked((l) => !l);
    setLikeCount((c) => (liked ? c - 1 : c + 1));
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    setComments((prev) => [
      { id: Date.now(), user: 'Sanjog', img: 'images/pic-1.jpg', date: '22-10-2022', text: newComment, editable: true },
      ...prev,
    ]);
    setNewComment('');
  };

  const handleDeleteComment = (id) => {
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  const video = found?.video ?? playlists.html.videos[0];
  const playlist = found?.playlist ?? playlists.html;

  return (
    <>
      <section className="watch-video">
        <div className="video-container">
          <div className="video">
            <video src={video.video} controls poster={video.thumb} id="video"></video>
          </div>
          <h3 className="title">{video.title}</h3>
          <div className="info">
            <p className="date">
              <i className="fas fa-calendar"></i>
              <span>22-10-2022</span>
            </p>
            <p className="date">
              <i className="fas fa-heart"></i>
              <span>{likeCount} likes</span>
            </p>
          </div>
          <div className="tutor">
            <img src={playlist.tutorImg} alt="" />
            <div>
              <h3>{playlist.tutor}</h3>
              <span>developer</span>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <Link to={`/playlist/${playlist.id}`} className="inline-btn">
              view playlist
            </Link>
            <button type="button" onClick={handleLike}>
              <i className={liked ? 'fas fa-heart' : 'far fa-heart'}></i>
              <span>{liked ? 'liked' : 'like'}</span>
            </button>
          </form>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque labore ratione, hic exercitationem
            mollitia obcaecati culpa dolor placeat provident porro. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Aliquid iure autem non fugit sint. A, sequi rerum architecto dolor fugiat illo, iure
            velit nihil laboriosam cupiditate voluptatum facere cumque nemo!
          </p>
        </div>
      </section>

      <section className="comments">
        <h1 className="heading">{comments.length} comments</h1>

        <form onSubmit={handleAddComment} className="add-comment">
          <h3>add comments</h3>
          <textarea
            name="comment_box"
            placeholder="enter your comment"
            required
            maxLength={1000}
            cols={30}
            rows={10}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <input type="submit" value="add comment" className="inline-btn" name="add_comment" />
        </form>

        <h1 className="heading">user comments</h1>

        <div className="box-container">
          {comments.map((c) => (
            <div className="box" key={c.id}>
              <div className="user">
                <img src={c.img} alt="" />
                <div>
                  <h3>{c.user}</h3>
                  <span>{c.date}</span>
                </div>
              </div>
              <div className="comment-box">{c.text}</div>
              {c.editable && (
                <form onSubmit={(e) => e.preventDefault()} className="flex-btn">
                  <input type="submit" value="edit comment" name="edit_comment" className="inline-option-btn" />
                  <input
                    type="button"
                    value="delete comment"
                    name="delete_comment"
                    className="inline-delete-btn"
                    onClick={() => handleDeleteComment(c.id)}
                  />
                </form>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
