import React from "react";
class Cell extends React.Component {
  selectCell = () => {
    this.props.selectCell(this.props.row, this.props.col);
  };
  render() {
    return (
      <div
        className={this.props.cellClass}
        id={this.props.cellId}
        onClick={this.selectCell}
      ></div>
    );
  }
}
export default Cell;
