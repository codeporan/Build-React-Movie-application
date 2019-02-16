import React from "react";
const Sidebar = ({ genres }) => {
  const genrelist = () => {
    return (
      genres &&
      genres.map(movie => (
        <div key={movie.id}>
          {movie.name}
          )}
        </div>
      ))
    );
  };

  return <div>{genrelist()}</div>;
};

export default Sidebar;
