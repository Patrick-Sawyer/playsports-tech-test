import YouTube from 'react-youtube';
import {useParams, useHistory} from "react-router-dom";
import './videoplayer.css'; 

const VideoPlayer = (props) => {

    const {id} = useParams();
    const history = useHistory();

    const opts = {
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const onReady = (event) => {
        event.target.playVideo();   
    }

    const onLoad = () => {
        document.getElementsByClassName('video-player')[0].style.opacity = 1;
    }

    const handleBack = () => {
        history.push('/');
    }

    return (
        <div className="video-player-page">
            <YouTube 
                containerClassName="video-player-container"
                className="video-player"
                videoId={id} 
                opts={opts} 
                onReady={onReady}
                onPlay={onLoad}
            />
            <div className="back-button" onClick={handleBack}>
                <div className="back-button-inner">back</div>
            </div>
        </div>
    );
};

export default VideoPlayer;