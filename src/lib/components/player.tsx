'use client'

import React, { useEffect, useRef, useState } from 'react'

import ReactPlayer from 'react-player/youtube';
import Button from '@mui/material/Button';
import { Checkbox, FormControl, FormControlLabel, Grid, Slider, TextField } from '@mui/material';
import { OnProgressProps } from 'react-player/base';
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import SectionList from './section-list';

export default function Player(props: any) {
    const firstSection = props.sections[0];
    const [shouldRenderReactPlayer, setShouldRenderReactPlayer] = useState(false)
    const inputRef = useRef<any>(null);
    const [playbackRate, setPlaybackRate] = useState(1.0);
    const [startPos, setStartPos] = useState(props.startPos);
    const [endPos, setEndPos] = useState(props.endPos);
    const [loop, setLoop] = useState(false);
    const [volume,setVolume]=useState(85)
    const [elapsedTime, setElapsedTime] = useState("0:00");
    useEffect(() => {
        setShouldRenderReactPlayer(true)
    }, [])




    const [url, setUrl] = useState("");
    const [videoId, setVideoId] = useState(props.videoId);

    useEffect(() => {
        setUrl(`https://www.youtube.com/watch?v=${videoId}`)

    }, [videoId]);

    useEffect(()=>{
       

        return ()=>{
            if(!loop){

                seekTo();
            }
            
        }
    },[loop])
    const [playing, setPlaying] = useState(false);

    const stopVideo = () => {
        setPlaying(false);
        //setUrl("");
    }

    const handleProgress = (progress: OnProgressProps) => {
        
        const { playedSeconds } = progress;
        const minutes = Math.floor(playedSeconds/60.0);
        
        const remainSeconds = Math.floor( playedSeconds % 60);
        setElapsedTime(`${minutes}:${("00" + remainSeconds).slice (-2) }`);
        if(loop){
            if (playedSeconds >= endPos) {
                inputRef.current.seekTo(startPos);
            }
        }
    }

    const makeFullScreen = () => {
        console.log(inputRef.current);
        const el: Element = inputRef.current;
        screenfull.request(el);
    }

    const seekTo = () => {
        inputRef.current?.seekTo(startPos);
    }

    const startVideo = () => {
        inputRef.current.seekTo(startPos)
        setPlaying(true);

    }
    return (
        <div>
            {shouldRenderReactPlayer ? (
                <div>
 
                    <Grid container spacing="24">
                        <Grid item>
                        <ReactPlayer
                        ref={inputRef}
                        url={url}
                        playing={playing}
                        controls={true}
                        config={{
                            playerVars: {
                                autoplay: 0,
                                controls: 1
                            }
                        }}
                        volume={volume}
                        playbackRate={playbackRate}
                        onProgress={handleProgress}
                    
                        
                    />

                        </Grid>
                      <Grid item xs={12}>
                      <SectionList videoId={videoId} items={props.sections}>

</SectionList>
                
                      </Grid>
                      
                        <Grid item xs={12}>
                        Elapsed Time: {elapsedTime}
                    </Grid>
                        <Grid item xs={4}>
                            <TextField label="Start Position" value={startPos} onChange={(event) => {
                                setStartPos(parseInt(event.target.value));

                            }}></TextField>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label="End Position" value={endPos} onChange={(event) => {
                                setEndPos(parseInt(event.target.value));

                            }}></TextField>

                        </Grid>

                        <Grid item xs={4}>
                            <FormControlLabel label="Loop" control={

                                <Checkbox value={loop} onChange={(event) => {
                                    setLoop(event.target.checked) ;
                                }} />

                            } />

                        </Grid>

                  
                    <Grid item xs={12}>
                        <FormControlLabel
                            label="Playback Speed" labelPlacement='top'
                            control={
                                <Slider value={playbackRate}

                                    onChange={((event, value) => {

                                        setPlaybackRate(parseFloat(value.toString()));

                                    })}
                                    defaultValue={1} step={.25} marks min={0} max={1} />

                            }

                        ></FormControlLabel>





                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            label="Volume" labelPlacement='top'
                            control={
                                <Slider value={volume}

                                    onChange={((event, value) => {

                                        const b:number =parseFloat(value.toString());
                                        setVolume(b);

                                    })}
                                    defaultValue={.85} step={.01} marks min={0} max={1.0} />

                            }

                        ></FormControlLabel>





                    </Grid>
                    <Grid item xs={12}>

                        <Button onClick={startVideo}>Start</Button>
                        <Button onClick={stopVideo}>Stop</Button>
                        <Button onClick={seekTo}>Seek</Button>

                        <Button onClick={makeFullScreen}>Full Screen</Button>
                    </Grid>
                    
                    </Grid>
                </div>

            ) : (<div></div>)}
           
        </div>
    )
}