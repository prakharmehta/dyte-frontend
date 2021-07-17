import React from 'react';

//CSS
import './styles.css'

//Interface specifying the props the component requires
interface LiveViewProps {
    srcDoc: string
}

const LiveView: React.FC<LiveViewProps> = ({ srcDoc }) => {

    return (
        <div className="live-view">
            <div className="live-view__header">
                <span>Live Render</span>
            </div>
            {/* iframe that renders the typed code  */}
            {/* The source of the iframe comes from the srcDoc prop */}
            <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%" frameBorder="0"></iframe>
        </div>
    );

}

export default LiveView;