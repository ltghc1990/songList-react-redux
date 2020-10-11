import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Creep", duration: "4:90" },
    { title: "Soda", duration: "3:40" },
    { title: "All Stars", duration: "5:63" },
    { title: "Last Christmas", duration: "3:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
