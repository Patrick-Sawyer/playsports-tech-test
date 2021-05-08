import React, { ReactElement, useEffect, useState } from 'react';
import './videos.css';
import Video from '../../components/Video/Video';

import {VideoData} from '../../interfaces';

interface Props {

}

const Videos: React.FC<Props> = (props: Props): ReactElement => {

    const [videoData, setVideoData] = useState<VideoData[]>([]);

    useEffect(() => {
        fetch('./data.json', {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(async (response) => {
            let responseObject = await response.json();
            setVideoData(responseObject);
        }).catch(error => console.log(error))
    }, [])

    const renderVideos = (): JSX.Element[] => {
        return videoData.map((video: VideoData, index: number): JSX.Element => {
            return <Video data={video} key={index} />;
        })
    }

    return (
        <div className="videos-container">
            {renderVideos()}
        </div>
    );
};

export default Videos;