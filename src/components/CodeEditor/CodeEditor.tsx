import React from 'react';

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { Controlled as CodeMirror } from 'react-codemirror2'

import './styles.css'

interface CodeEditorProps {
    editorTitle: string,
    language: string,
    value: any,
    onChange: any,
    status: any,
    isVisible: any
}

const CodeEditor: React.FC<CodeEditorProps> = ({ editorTitle, language, value, status, onChange, isVisible }) => {
    const CodeEditorOptions = {
        lineWrapping: true,
        lint: true,
        mode: language,
        theme: 'material',
    }

    const handleChange = (editor: any, data: any, value: any) => {
        onChange(value)
    }


    return (
        <div className={`code-editor ${status ? 'flex' : 'hidden'} `} >
            <div className="code-editor__header">
                <span>{editorTitle}</span>
            </div>
            <CodeMirror onBeforeChange={handleChange} value={value} className="code-editor__content code-mirror--wrapper" options={CodeEditorOptions}></CodeMirror>
        </div>
    );

}

export default CodeEditor;