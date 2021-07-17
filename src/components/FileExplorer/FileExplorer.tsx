import React from 'react';
import PasteBin from '../PasteBin/PasteBin';

import './styles.css';

interface FileExplorerProps {
    files: any,
    func: any,
    codeToPaste: any
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, func, codeToPaste }) => {

    const listFiles = files.map((file: any, key: number) =>
        <li key={key} value={file.status} className={`item-${file.status}`} onClick={() => func(file.extension)} >{file.fileName}</li>
    )

    return (
        <div className="file-explorer">
            <div className="file-explorer__header">
                <span>Files</span>
            </div>
            <ul>
                {listFiles}
            </ul>
            <PasteBin codeToPaste={codeToPaste} />
        </div>
    );
}

export default FileExplorer;
