import React, { useState } from "react";

//Axios for API calling
import axios from 'axios'

//CSS
import './styles.css'

//Interface specifying the props the component requires
interface PasteBinProps {
    codeToPaste: string
}

const PasteBin: React.FC<PasteBinProps> = ({ codeToPaste }) => {

    //State hook to update the url with the response
    const [url, setUrl] = useState('');

    //State hook to update the error with the error msg
    const [errorMsg, setErrorMsg] = useState('');

    //Function to handle API calls
    const pasteHandler = async () => {

        //Request body
        const body = {
            'api_dev_key': 'MAnLsR1xw1fXPmPKqtVTucgpDQMPQT8v',
            'api_option': 'paste',
            'api_paste_code': codeToPaste,
        }

        //URL to enable cors
        const corsUrl = 'https://cors-anywhere.herokuapp.com/'

        //POST request using axios
        await axios.post(corsUrl + 'https://pastebin.com/api/api_post.php', body).then(response => setUrl(response.data))
        .then((response) => console.log(response))
        .catch(error => {
                setErrorMsg(error.message);
                console.error('There was an error!', error);
            });
    }

    return (
        <div className="paste-bin">
            {/* Button to generate url */}
            <button onClick={pasteHandler}>Generate Link</button>
            <br />
            {/* //span tag showing URL/ERROR whichever is true */}
            <span>{url || errorMsg}</span>
        </div>
        
    )

}

export default PasteBin