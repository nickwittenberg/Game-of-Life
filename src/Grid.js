import React from "react";
import Cell from "./Cell";

// CLASS SYNTAX

// class Grid extends React.Component {
//   render() {
//     const width = this.props.cols * 16;
//     let rowsArr = [];
//     let cellClass = "";
//     for (let i = 0; i < this.props.rows; i++) {
//       for (let j = 0; j < this.props.cols; j++) {
//         let cellId = i + "_" + j;
//         cellClass = this.props.gridFull[i][j] ? "cell live" : "cell dead";
//         rowsArr.push(
//           <Cell
//             cellClass={cellClass}
//             key={cellId}
//             cellId={cellId}
//             row={i}
//             col={j}
//             selectCell={this.props.selectCell}
//           />
//         );
//       }
//     }
//     return (
//       <div className="grid" style={{ width: width }}>
//         {rowsArr}
//       </div>
//     );
//   }
// }

const Grid = (props) => {
  const width = props.cols * 16;
  let rowsArr = [];
  let cellClass = "";
  for (let i = 0; i < props.rows; i++) {
    for (let j = 0; j < props.cols; j++) {
      let cellId = i + "_" + j;
      cellClass = props.gridFull[i][j] ? "cell live" : "cell dead";
      rowsArr.push(
        <Cell
          cellClass={cellClass}
          key={cellId}
          cellId={cellId}
          row={i}
          col={j}
          selectCell={props.selectCell}
        />
      );
    }
  }
  return (
    <div className="grid" style={{ width: width }}>
      {rowsArr}
    </div>
  );
};

export default Grid;
