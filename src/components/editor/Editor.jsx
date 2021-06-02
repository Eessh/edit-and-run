import React from 'react';
import './Editor.css'

// Ace Editor
import AceEditor from "react-ace";

// Ace Webpack Resolver
import 'ace-builds/webpack-resolver'

// Language support
import 'ace-builds/src-noconflict/mode-c_cpp'
import 'ace-builds/src-noconflict/mode-csharp'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-kotlin'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-ruby'
import 'ace-builds/src-noconflict/mode-swift'

// Language Tools
import 'ace-builds/src-noconflict/ext-language_tools'

// Theme Support
import 'ace-builds/src-noconflict/theme-ambiance'
import 'ace-builds/src-noconflict/theme-cobalt'
import 'ace-builds/src-noconflict/theme-dracula'
import 'ace-builds/src-noconflict/theme-gruvbox'
import 'ace-builds/src-noconflict/theme-merbivore'
import 'ace-builds/src-noconflict/theme-monokai'

function Editor(props) {
    return (
        <div className="editor">
            <div className="editor-wrapper">
                <AceEditor
                    className="ace-editor"
                    mode={props.language}
                    theme={props.theme}
                    fontSize={props.fontSize}
                    value={props.code}
                    onChange={(newCode) => props.getNewCode(newCode)}
                    showPrintMargin={false}
                    enableBasicAutocompletion={true}
                    enableLiveAutocompletion={true}
                    enableSnippets={true}
                />
            </div>
        </div>
    );
}

export default Editor;