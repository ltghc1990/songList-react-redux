import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  if (selectedSong === null) {
    return <div> </div>;
  } else {
    return (
      <div>
        <div>Title: {selectedSong.title}</div>
        <div>Duration: {selectedSong.duration}</div>
      </div>
    );
  }
};

const mapToStateProp = (state) => {
  console.log(state);
  return {
    selectedSong: state.selectedSong,
  };
};

export default connect(mapToStateProp)(SongDetail);
