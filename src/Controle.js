import React from 'react';
import './App.css';

function Plateau(props) {
  return (

          <div className="Controle">
            <div className="test">
            <div className="combination">
              <div className="color red" onClick={() => props.colorize('red')}></div>
              <div className="color orange" onClick={() => props.colorize('orange')}></div>
              <div className="color yellow" onClick={() => props.colorize('yellow')}></div>
              <div className="color green" onClick={() => props.colorize('green')}></div>
              <div className="color blue" onClick={() => props.colorize('blue')}></div>
              <div className="color purple" onClick={() => props.colorize('purple')}></div>
            </div>
            <div className="actions">
              <button onClick={props.undo} type="button" class="btn btn-primary" >Undo</button>
              <button onClick={props.submit} type="button" class="btn btn-primary">Submit</button>

            </div>
            </div>
          </div>
  
  );
}

export default Plateau;
