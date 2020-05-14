import React from "react";
import './Hitman.css';

const Hitman = ({ hitmans, deleteHitman }) => {
  // TODO done: Conditional logic using if else
  // const hitmanList = hitmans.map((hitman) => {
  //   if (hitman.age > 20) {
  //     return (
  //       <div className="hitman" key={hitman.id}>
  //         <div>Name: {hitman.name}</div>
  //         <div>Age: {hitman.age}</div>
  //         <div>Alias: {hitman.alias}</div>
  //         <br />
  //       </div>
  //     );
  //   } else return null;
  // });

  // TODO done: Conditional logic using ternary operator
  const hitmanList = hitmans.map((hitman) => {
    return hitman.age > 10 ? (
      <div className="hitman" key={hitman.id}>
        <div>Name: {hitman.name}</div>
        <div>Age: {hitman.age}</div>
        <div>Alias: {hitman.alias}</div>
        <button onClick={() => { deleteHitman(hitman.id) }}>Terminate Hitman</button>
        <br /><br />
      </div>
    ) : null;
  });

  return <div className="hitman-list">{hitmanList}</div>;
};

export default Hitman;
