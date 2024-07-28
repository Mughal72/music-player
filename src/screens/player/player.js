import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import apiClient from "../../spotify";
import SongCard from "../../components/songCard";
import Queue from "../../components/queue";

export default function Player() {
  const location = useLocation();
  const [track, setTrack] = React.useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [curentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTrack(res.data.items);
          setCurrentTrack(res.data.items[0].track);
        });
    }
  }, [location.state]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body"></div>
      <div className="right-player-body">
        <SongCard album={currentTrack.album} />
        <Queue />
      </div>
    </div>
  );
}
