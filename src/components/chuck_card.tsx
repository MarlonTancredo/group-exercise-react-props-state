import ChuckImage from "../assets/chuck_norris.jpg";

interface ChuckCardProps {
  greetings: string;
}

const ChuckCard: React.FC<ChuckCardProps> = ({ greetings }) => {
  return (
    <>
      <h2>{greetings}</h2>

      <img src={ChuckImage} alt="A handsome man" />
    </>
  );
};

export default ChuckCard;
