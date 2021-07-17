import React, { useState, useEffect } from "react";

//Import required components
import FileExplorer from "./components/FileExplorer/FileExplorer";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import LiveView from "./components/LiveView/LiveView";

//CSS
import "./App.css";

const App = () => {

  //Object specifying initital state of the file editors
  const fileStatus = {
    html: false,
    css: false,
    js: false,
  };

  //Array containing meta-info on files
  const files = [
    {
      fileName: "index.html",
      filePath: "",
      extension: "html",
      language: "xml",
      status: fileStatus.html,
    },
    {
      fileName: "index.css",
      filePath: "",
      extension: "css",
      language: "css",
      status: fileStatus.css,
    },
    {
      fileName: "index.js",
      filePath: "",
      extension: "js",
      language: "javascript",
      status: fileStatus.js,
    },
  ];

  //State hook used to update the html, css and js code dynamically
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  //Statehook used to update the code to be rendered
  const [srcDoc, setSrcDoc] = useState("");

  //Effect hook used to add a delay between the render and the code typed
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>`
      );
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  //State hook used to update the status of the file editors
  const [status, setStatus] = useState({ ...fileStatus });

  //Function that handles the open/close of file editors
  const handleVisible = (type: string) => {
    if (type === "html") {
      setStatus({
        html: true,
        css: false,
        js: false,
      });
    } else if (type === "css") {
      setStatus({
        html: false,
        css: true,
        js: false,
      });
    } else {
      setStatus({
        html: false,
        css: false,
        js: true,
      });
    }
  };

  return (
    <div className="App">
      <div className="App__container">
        {/* File Explorer Component */}
        <FileExplorer files={files} func={handleVisible} codeToPaste={srcDoc} />
        {/* HTML Editor */}
        <CodeEditor
          editorTitle={files[0].fileName}
          language={files[0].language}
          value={html}
          onChange={setHtml}
          status={status.html}
        />
        {/* CSS Editor */}
        <CodeEditor
          editorTitle={files[1].fileName}
          language={files[1].language}
          value={css}
          onChange={setCss}
          status={status.css}
        />
        {/* JS Editor */}
        <CodeEditor
          editorTitle={files[2].fileName}
          language={files[2].language}
          value={js}
          onChange={setJs}
          status={status.js}
        />
        {/* Live View Renderer */}
        <LiveView srcDoc={srcDoc} />
      </div>
    </div>
  );
};

export default App;
