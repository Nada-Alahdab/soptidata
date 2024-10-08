import React from 'react'
import spotify_data from '../spotify_data.json'
const DisplayRecord = () => {
  const trackNames = spotify_data.map(track => track.master_metadata_track_name);
  const uniqueTrackName = [...new Set(trackNames)]
  return (
    <div>  
      <h3>Number of Unique Tracks :{uniqueTrackName.length}</h3>
      <br />
      <hr/>
      {uniqueTrackName.map((trackName, index) => (
        <div key={index}>
          <h3>Track Name</h3>
          <p>{trackName}</p>
          <hr />
        </div>
      ))}
  </div>
  )
}

export default DisplayRecord;


