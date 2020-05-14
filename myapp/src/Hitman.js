import React from "react";

const Hitman = ({ hitmans }) => {
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

  const hitmanList = hitmans.map((hitman) => {
    return hitman.age > 20 ? (
      <div className="hitman" key={hitman.id}>
        <div>Name: {hitman.name}</div>
        <div>Age: {hitman.age}</div>
        <div>Alias: {hitman.alias}</div>
        <br />
      </div>
    ) : null;
  });

  return <div className="hitman-list">{hitmanList}</div>;
};

export default Hitman;
