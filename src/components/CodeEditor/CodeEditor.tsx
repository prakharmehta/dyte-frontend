import React from 'react';

//CSS for Codemirror
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

//Codemirror modules for html(xml), css and js
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

//Controlled editor environment from Codemirror
import { Controlled as CodeMirror } from 'react-codemirror2'

//CSS
import './styles.css'

//Interface specifying the props the component requires
interface CodeEditorProps {
    editorTitle: string,
    language: string,
    value: any,
    onChange: any,
    status: any
}

const CodeEditor: React.FC<CodeEditorProps> = ({ editorTitle, language, value, status, onChange }) => {

    //Options specifying the configuration of the code editor
    const CodeEditorOptions = {
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: 'material',
    }

    //Function that handles dynamic input change
    const handleChange = (editor: any, data: any, value: any) => {
        onChange(value)
    }


    return (
        <div className={`code-editor ${status ? 'flex' : 'hidden'} `} >
            <div className="code-editor__header">
                <span>{editorTitle}</span>
            </div>
            {/* text editor from codemirror */}
            <CodeMirror onBeforeChange={handleChange} value={value} className="code-editor__content code-mirror--wrapper" options={CodeEditorOptions}></CodeMirror>
        </div>
    );

}

export default CodeEditor;