import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../store/slices/songsSlice";
import { createRandomSong } from "../data";

function SongPlaylist() {
  // To Do:
  // Get list of songs
  // const songPlaylist = [];
  const songPlaylist = useSelector((state)=>state.songs);
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    dispatch(addSong(song));
    // To Do:
    // Add song to list of songs

  };
  const handleSongRemove = (song) => {
    dispatch(removeSong(song));
    // To Do:
    // Remove song from list of songs
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
