import React from 'react'
import spotify_data from '../spotify_data.json'

const ArtistPlayPercentage = () => {
    const ArtistPlayPercentage = ({ artistName }) => {
        const totalPlayer = spotify_data.reduce((acc, track) => acc + track.ms_played, 0)
        const artistPlays = spotify_data.filter(track => track.master_metadata_track_name === artistName).reduce((acc, track) => acc + track.ms_played, 0)
        const artistPlayPercentage = ((artistPlays / totalPlayer * 100).toFixed(2));
    }
    return (
      
    <div>
            <h3>{artistName} Play Percentage</h3>
            <p>{artistName} represents {artistPlayPercentage} % of all plays </p>
    </div>
  )
} 

export default ArtistPlayPercentage
