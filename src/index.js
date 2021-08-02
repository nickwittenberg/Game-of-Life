import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Grid from "./Grid.js";
import "./index.css";

// This is how I had React set up with a class component. Below is how it looks as a function.
// class Main extends React.Component {
//   constructor() {
//     super();
//     this.speed = 100;
//     this.rows = 30;
//     this.cols = 50;

//     this.state = {
//       generation: 0,
//       gridFull: Array(this.rows)
//         .fill()
//         .map(() => Array(this.cols).fill(false)),
//     };

//     this.selectCell = (row, col) => {
//       let gridCopy = this.arrayClone(this.state.gridFull);
//       gridCopy[row][col] = !gridCopy[row][col];
//       this.setState({
//         gridFull: gridCopy,
//       });
//     };

//     this.arrayClone = (array) => {
//       return JSON.parse(JSON.stringify(array));
//     };

//     this.germinate = () => {
//       let gridCopy = this.arrayClone(this.state.gridFull);
//       for (let i = 0; i < this.rows; i++) {
//         for (let j = 0; j < this.cols; j++) {
//           if (Math.floor(Math.random() * 4) === 1) {
//             gridCopy[i][j] = true;
//           }
//         }
//       }
//       this.setState({
//         gridFull: gridCopy,
//       });
//     };

//     this.cycle = () => {
//       let gridCopy = this.arrayClone(this.state.gridFull);

//       for (let i = 0; i < this.rows; i++) {
//         for (let j = 0; j < this.cols; j++) {
//           // this was the line which I initially had assigned to = instead of ===, it yielded some interesting results
//           if (gridCopy[i][j] === true) {
//             if (this.neighbours(i, j) < 2 || this.neighbours(i, j) > 3) {
//               gridCopy[i][j] = false;
//             }
//           } else if (this.neighbours(i, j) === 3) {
//             gridCopy[i][j] = true;
//           }
//         }
//       }
//       this.setState({
//         gridFull: gridCopy,
//         generation: this.state.generation + 1,
//       });
//     };

//     this.neighbours = (i, j) => {
//       let neighbourCount = 0;
//       if (i > 0 && j > 0) {
//         if (this.state.gridFull[i - 1][j - 1]) {
//           neighbourCount++;
//         }
//       }
//       if (i > 0) {
//         if (this.state.gridFull[i - 1][j]) {
//           neighbourCount++;
//         }
//       }
//       if (i > 0 && j < this.cols - 1) {
//         if (this.state.gridFull[i - 1][j + 1]) {
//           neighbourCount++;
//         }
//       }

//       if (j > 0) {
//         if (this.state.gridFull[i][j - 1]) {
//           neighbourCount++;
//         }
//       }
//       if (j < this.rows - 1) {
//         if (this.state.gridFull[i][j + 1]) {
//           neighbourCount++;
//         }
//       }
//       if (i < this.rows - 1 && j > 0) {
//         if (this.state.gridFull[i + 1][j - 1]) {
//           neighbourCount++;
//         }
//       }
//       if (i < this.rows - 1) {
//         if (this.state.gridFull[i + 1][j]) {
//           neighbourCount++;
//         }
//       }
//       if (i < this.rows - 1 && j < this.cols - 1) {
//         if (this.state.gridFull[i + 1][j + 1]) {
//           neighbourCount++;
//         }
//       }
//       if (neighbourCount === 9) {
//         console.log("HELP");
//       }
//       return neighbourCount;
//     };
//   }
//   componentDidMount() {
//     this.germinate();
//     setInterval(this.cycle, 100);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Game of Life</h1>
//         <Grid
//           gridFull={this.state.gridFull}
//           rows={this.rows}
//           cols={this.cols}
//           selectCell={this.selectCell}
//         />
//         <h2>Generations: {this.state.generation}</h2>
//       </div>
//     );
//   }
// }

// ********************************************************

const Main = () => {
  let speed = 100;
  let rows = 30;
  let cols = 50;

  const [go, setGo] = useState(true);
  const [generation, setGeneration] = useState(0);
  const [gridFull, setGridFull] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill(false))
  );

  const selectCell = (row, col) => {
    let gridCopy = arrayClone(gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    setGridFull(gridCopy);
  };

  // ********************************************************************************
  // CHECK THIS
  // eslint-disable-next-line
  useEffect(() => germinate(), []);

  const arrayClone = (array) => {
    return JSON.parse(JSON.stringify(array));
  };

  const germinate = () => {
    let gridCopy = arrayClone(gridFull);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    // *****
    // Unsure
    setGridFull(gridCopy);
  };

  // Cycle effect

  const cycle = () => {
    let gridCopy = arrayClone(gridFull);

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        // this was the line which I initially had assigned to = instead of ===, it yielded some interesting results
        if (gridCopy[i][j] === true) {
          if (neighbours(i, j) < 2 || neighbours(i, j) > 3) {
            gridCopy[i][j] = false;
          }
        } else if (neighbours(i, j) === 3) {
          gridCopy[i][j] = true;
        }
      }
    }
    setGridFull(gridCopy);
    setGeneration(generation + 1);
  };

  // CALC NEIGHBOURS  *******************
  const neighbours = (i, j) => {
    let neighbourCount = 0;
    if (i > 0 && j > 0) {
      if (gridFull[i - 1][j - 1]) {
        neighbourCount++;
      }
    }
    if (i > 0) {
      if (gridFull[i - 1][j]) {
        neighbourCount++;
      }
    }
    if (i > 0 && j < cols - 1) {
      if (gridFull[i - 1][j + 1]) {
        neighbourCount++;
      }
    }

    if (j > 0) {
      if (gridFull[i][j - 1]) {
        neighbourCount++;
      }
    }
    if (j < rows - 1) {
      if (gridFull[i][j + 1]) {
        neighbourCount++;
      }
    }
    if (i < rows - 1 && j > 0) {
      if (gridFull[i + 1][j - 1]) {
        neighbourCount++;
      }
    }
    if (i < rows - 1) {
      if (gridFull[i + 1][j]) {
        neighbourCount++;
      }
    }
    if (i < rows - 1 && j < cols - 1) {
      if (gridFull[i + 1][j + 1]) {
        neighbourCount++;
      }
    }

    return neighbourCount;
  };

  // *********************************************************************************

  const savedCallBack = useRef();

  const callback = () => cycle();

  useEffect(() => {
    if (go) {
      savedCallBack.current = callback;
    } else {
      savedCallBack.current = () => {
        return;
      };
    }
  });

  useEffect(() => {
    const tick = () => {
      savedCallBack.current();
    };

    let cycleInterval = setInterval(tick, speed);
    return () => clearInterval(cycleInterval);
    // eslint-disable-next-line
  }, []);

  const stop = () => {
    setGo(false);
  };
  const start = () => {
    setGo(true);
  };

  return (
    <div>
      <h1>Game of Life</h1>
      <button onClick={cycle}>Cycle</button>
      <button onClick={stop}>Stop</button>
      <button onClick={start}>Start</button>
      <Grid
        gridFull={gridFull}
        rows={rows}
        cols={cols}
        selectCell={selectCell}
      />
      <h2>Generations: {generation}</h2>
    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
