import React from 'react';
import './styles.css';

interface FileExplorerProps {
    files: any,
    func: any
}

const FileExplorer: React.FC<FileExplorerProps> = ({ files, func }) => {

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
        </div>
    );
}

export default FileExplorer;
