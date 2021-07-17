import React from 'react';

//Import PasteBin Component
import PasteBin from '../PasteBin/PasteBin';

//CSS
import './styles.css';

//Interface specifying the props the component requires
interface FileExplorerProps {
    files: any,
    func: any,
    codeToPaste: any
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, func, codeToPaste }) => {

    // List of the files
    const listFiles = files.map((file: any, key: number) =>
        <li key={key} value={file.status} className={`item-${file.status}`} onClick={() => func(file.extension)} >{file.fileName}</li>
    )

    return (
        <div className="file-explorer">
            <div className="file-explorer__header">
                <span>Files</span>
            </div>
            {/* render files */}
            <ul>
                {listFiles}
            </ul>
            {/* Button to call pastebin api */}
            <PasteBin codeToPaste={codeToPaste} />
        </div>
    );
}

export default FileExplorer;
