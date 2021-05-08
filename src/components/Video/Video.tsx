import React, { ReactElement } from 'react';
import {VideoData} from '../../interfaces';

interface Props {
    data: VideoData
}

const Video: React.FC<Props> = (props: Props): ReactElement => {

    return (
        <div>
            {JSON.stringify(props.data)}
        </div>
    );
};

export default Video;