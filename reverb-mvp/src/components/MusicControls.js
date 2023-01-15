import React from "react";
import {
  MusicNav,
  ControlsContainer,
  TimeControlContainer,
  Track,
  P,
} from "./MusicControlsElements";
import * as BiIcons from "react-icons/bi";
import { useState, useEffect } from "react";

const pointer = { cursor: "pointer" };

const MusicControls = ({

}) => {
  //isactive determines pause & play icon, isplaying determines commence of music playing
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [audioDuration, setAudioDuration] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);

  const audio = document.getElementById("audio-element");


  useEffect(() => {
    //checkAudio();
  });

  //function that determines song has been started
  function checkAudio() {
    if (document.getElementById("audio-element") == null) {
      console.log("No music playing");
      setIsPlaying(false);
      setAudioDuration(0);
      setAudioCurrentTime(0);
    } else {
      setIsPlaying(true);
      console.log("Music playing");
      setAudioDuration(audio.duration);
      setAudioCurrentTime(audio.currentTime);
    }
  }

  // //function that handles skipping a song
  // const handleSkipClick = () => {
  //   if (currentSongIndex === songHashes.length - 1) {
  //     setCurrentSongIndex(0);
  //   } else {
  //     setCurrentSongIndex(currentSongIndex + 1);
  //   }
  //   //Load(songHashes[currentSongIndex]);
  // };

  //function that pauses or plays the audio
  function handlePlayback() {
    if (isActive) {
      console.log("pause");
      setIsActive(false);
      audio.pause();
    } else {
      console.log("play");
      setIsActive(true);
      audio.play();
    }
  }

  // //function that sets current song index and then loads that index. handles the end of a song, skipping to next
  // const handleSongEnd = () => {
  //   if (currentSongIndex === songHashes.length - 1) {
  //     setCurrentSongIndex(0);
  //   } else {
  //     setCurrentSongIndex(currentSongIndex + 1);
  //   }
  // };

  //Turn audio duration and current time into seconds and minutes
  const getTime = (time) => {
    let minute = Math.floor(time / 60);
    let second = ("0" + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
  };

  const pauseIcon = (
    <>
      <BiIcons.BiPause
        onClick={() => handlePlayback()}
        className="pause"
        style={pointer}
        size={36}
      />
    </>
  );

  const playIcon = (
    <>
      <BiIcons.BiPlay
        onClick={() => handlePlayback()}
        className="play"
        style={pointer}
        size={36}
      />
    </>
  );

  return (
    <>
      <MusicNav>
        <ControlsContainer>
          <BiIcons.BiRewind
            onClick={null}
            className="skip-back"
            style={pointer}
            size={30}
          />
          {isActive ? pauseIcon : playIcon}
          <BiIcons.BiFastForward
            onClick={null}
            className="skip-forward"
            style={pointer}
            icon={BiIcons.BiPlanet}
            size={30}
          />
        </ControlsContainer>
        <TimeControlContainer>
          <P>{getTime(audioCurrentTime)}</P>
          <Track></Track>
          <P>{getTime(audioDuration)}</P>
        </TimeControlContainer>
      </MusicNav>
    </>
  );
};

export default MusicControls;
