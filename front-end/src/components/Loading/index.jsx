import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
    return <CircularProgress
        style={{
            display: 'block',
            margin: `${window.innerHeight / 2 - 94}px auto`
        }}
    />
};

export default Loading;
