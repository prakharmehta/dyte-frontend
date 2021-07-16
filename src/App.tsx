import React, { useState, useEffect } from "react";

import FileExplorer from "./components/FileExplorer/FileExplorer";
import CodeEditor from "./components/CodeEditor/CodeEditor";
import LiveView from "./components/LiveView/LiveView";

import "./App.css";
import "prismjs";

const App = () => {
  const fileStatus = {
    html: false,
    css: false,
    js: false,
  };

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

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

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

  const [status, setStatus] = useState({ ...fileStatus });

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
        <FileExplorer files={files} func={handleVisible} />
        <CodeEditor
          editorTitle={files[0].fileName}
          language={files[0].language}
          value={html}
          onChange={setHtml}
          status={status.html}
          isVisible={handleVisible}
        />
        <CodeEditor
          editorTitle={files[1].fileName}
          language={files[1].language}
          value={css}
          onChange={setCss}
          status={status.css}
          isVisible={handleVisible}
        />
        <CodeEditor
          editorTitle={files[2].fileName}
          language={files[2].language}
          value={js}
          onChange={setJs}
          status={status.js}
          isVisible={handleVisible}
        />
        <LiveView srcDoc={srcDoc} />
      </div>
    </div>
  );
};

export default App;
