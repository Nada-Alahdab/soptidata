import React from 'react'
import spotify_data from '../spotify_data.json'

const TopTracks = () => {
    const filterTracks = spotify_data.filter(track => track.master_metadata_track_name && track.ms_played);
    const sortTrack = filterTracks.sort((a, b) => b.ms_played - a.ms_played);
    const top100Tracks = sortTrack.slice(0, 100);
  return (
    <div>
          <h2>Top 100 Tracks Sorted by Time Listening</h2>
          <ul>
              {top100Tracks.map((track, index) => (
                  <li key={track._id.$oid}>
                      <p>{index + 1} . {track.master_metadata_track_name} by {track.master_metadata_album_artist_name}</p>
                      <p>Time Listened :{Math.floor(track.ms_played / 1000)} Seconds</p>
                      <hr/>
                  </li>
              ))}
          </ul>
    </div>
  )
}

export default TopTracks
