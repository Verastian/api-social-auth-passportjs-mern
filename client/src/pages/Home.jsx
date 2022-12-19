import Card from "../components/Card";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Card user={user} />
    </>
  );
};

export default Home;
