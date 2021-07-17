import React, { useState } from "react";
import axios from 'axios'
import './styles.css'

interface PasteBinProps {
    codeToPaste: string
}

const PasteBin: React.FC<PasteBinProps> = ({ codeToPaste }) => {
    const [url, setUrl] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const pasteHandler = async () => {

        const body = {
            'api_dev_key': 'MAnLsR1xw1fXPmPKqtVTucgpDQMPQT8v',
            'api_option': 'paste',
            'api_paste_code': codeToPaste,
        }

        const corsUrl = 'https://cors-anywhere.herokuapp.com/'

        await axios.post(corsUrl + 'https://pastebin.com/api/api_post.php', body).then(response => setUrl(response.data))
        .then((response) => console.log(response))
        .catch(error => {
                setErrorMsg(error.message);
                console.error('There was an error!', error);
            });
    }

    return (
        <div className="paste-bin">
            <button onClick={pasteHandler}>Generate Link</button>
            <span>{url || errorMsg}</span>
        </div>
        
    )

}

export default PasteBin