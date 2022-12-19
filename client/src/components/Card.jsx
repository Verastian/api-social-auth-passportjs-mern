import { Link } from "react-router-dom";

const Card = ({ user }) => {
  return (
    <div className="card">
      {/* <Link className="link" to={`/post/${post.id}`}> */}
      <span className="text-xl text-blue-900 font-bold">{user.name}</span>
      <img src={user.picture} alt="avatar" />
      <p className="desc">Email: {user.email}</p>
      <button className="cardButton">Read More</button>
      {/* </Link> */}
    </div>
  );
};

export default Card;
