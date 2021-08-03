import React from "react";

const Instructions = () => {
  return (
    <div className={"instructions"}>
      <h3>Instructions:</h3>
      <p>
        Start: run game
        <br />
        Stop: stop game <br />
        Clear: wipe board <br />
        Seed: randomly seed board <br />
        Cycle: cyle one generation <br />
        Slow: slow speed <br />
        Medium: medium speed <br />
        Fast: fast speed
      </p>
    </div>
  );
};

export default Instructions;
