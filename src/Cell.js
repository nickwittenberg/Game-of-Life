import React from "react";

// CLASS SYNTAX

// class Cell extends React.Component {
//   selectCell = () => {
//     this.props.selectCell(this.props.row, this.props.col);
//   };
//   render() {
//     return (
//       <div
//         className={this.props.cellClass}
//         id={this.props.cellId}
//         onClick={this.selectCell}
//       ></div>
//     );
//   }
// }
// export default Cell;

const Cell = (props) => {
  const selectCell = () => {
    props.selectCell(props.row, props.col);
  };

  return (
    <div
      className={props.cellClass}
      id={props.cellId}
      onClick={selectCell}
    ></div>
  );
};
export default Cell;
