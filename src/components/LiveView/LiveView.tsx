import React from 'react';
import './styles.css'

interface LiveViewProps {
    srcDoc: string
}

const LiveView: React.FC<LiveViewProps> = ({ srcDoc }) => {

    return (
        <div className="live-view">
            <div className="live-view__header">
                <span>Live Render</span>
            </div>
            <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%" frameBorder="0"></iframe>
        </div>
    );

}

export default LiveView;