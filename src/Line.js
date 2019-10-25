import React from 'react';
import './App.css';

function Line(props) {
  return (
          <div className="line">
          <div className={"conbination "+(props.selected ? 'bg' : "")}>
                <div className={"case-combination " + (props.line[0][0] ? props.line[0][0] : "")}></div>
                <div className={"case-combination " + (props.line[0][1] ? props.line[0][1] : "")}></div>
                <div className={"case-combination " + (props.line[0][2] ? props.line[0][2] : "")}></div>
                <div className={"case-combination " + (props.line[0][3] ? props.line[0][3] : "")}></div>
          </div>
            <div className={"result "+(props.selected ? 'bg2' : "")}>
            <div className="devis">
            <div className={"case-result " + (props.line[1][0] ? props.line[1][0] : "")}></div>
            <div className={"case-result " + (props.line[1][1] ? props.line[1][1] : "")}></div>
            </div>
            <div className="dev">
            <div className={"case-result " + (props.line[1][2] ? props.line[1][2] : "")}></div>
            <div className={"case-result " + (props.line[1][3] ? props.line[1][3] : "")}></div>
            </div>
            </div>
          </div>
  );
}

export default Line;
