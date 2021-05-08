import React, {ReactElement} from 'react';
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';

import {VideoData} from '../../interfaces';
import './video.css';

interface Props {
    data: VideoData
}

const Video: React.FC<Props> = (props: Props): ReactElement => {

    const date = new Date(props.data.publishDate);
    const dateFormatted: string = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
    const history = useHistory();
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const openModal = ():void => {
      setIsOpen(true);
    }

    const closeModal = ():void => {
        setIsOpen(false);
    }

    Modal.setAppElement('#videos');

    const openVideo = ():void => {
        history.push('/video/' + props.data._id);
    }

    return (
        <div className="video-container">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="More Info..."
            >
                <div className="gcn-logo">
                    <div className="gcn-logo-inner">
                        <img alt='logo' style={{ width: '100%'}} src={'./assets/gcn.png'} />
                    </div>
                </div>
                <div className="back" onClick={closeModal}>
                    back
                </div>
                <div className="modal-title">
                {props.data.title}
                </div>
                {props.data.description}
            </Modal>
            <div className="image-container" onClick={openVideo}>
                <img
                    src={`https://img.youtube.com/vi/${props.data._id}/mqdefault.jpg`}
                    alt="fdf"
                    className="thumbnail"
                />
            </div>
            <div className="info-container">
                <div className="title-container">
                   <div className="title-inner">
                        {props.data.title}
                   </div>
                </div>
                <div className="bottom-text-container">
                    <div className="date">
                        <div className="date-inner">
                            {dateFormatted}
                        </div>
                    </div>
                    <div className="info-button" onClick={openModal}>
                        ...
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Video;


