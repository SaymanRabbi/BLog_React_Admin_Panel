import React from 'react';
import { Editor } from "@tinymce/tinymce-react";

const EditorTiny = () => {
    return (
        <Editor
        apiKey= {process.env.REACT_APP_TINYMCE_API_KEY}
        plugins="wordcount"
      />
    );
};

export default EditorTiny;