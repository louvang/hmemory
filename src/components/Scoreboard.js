const Scoreboard = (props) => {
  return (
    <div>
      <div>Current streak: {props.streak}</div>
      <div>Highest streak: {props.highestStreak}</div>
    </div>
  );
};

export default Scoreboard;
