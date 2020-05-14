import React from "react";

const Hitman = ({ hitmans }) => {
  const hitmanList = hitmans.map((hitman) => {
    return (
      <div className="hitman" key={hitman.id}>
        <div>Name: {hitman.name}</div>
        <div>Age: {hitman.age}</div>
        <div>Alias: {hitman.alias}</div>
        <br />
      </div>
    );
  });

  return <div className="hitman-list">{hitmanList}</div>;
};

export default Hitman;
