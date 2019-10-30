import React, { Component } from "react";
import { SortableContainer } from "react-sortable-hoc";
import Dragbox from "../Draggable boxes/Dragbox";
class DraggableList extends Component {
  render() {
    return (
      <div>
        {this.props.colors.map((color, i) => (
          <Dragbox
            color={color.color}
            name={color.name}
            key={color.name}
            index={i}
            handleDelete={() => this.props.handleDelete(color.name)}
          ></Dragbox>
        ))}
      </div>
    );
  }
}

export default SortableContainer(DraggableList);
