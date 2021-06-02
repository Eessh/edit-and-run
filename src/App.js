import { useState } from 'react'

import Editor from "./components/editor/Editor";
import Topbar from "./components/topbar/Topbar";
import InputConsole from "./components/console/inputConsole/InputConsole";
import OutputConsole from "./components/console/outputConsole/OutputConsole";

import { editorDefaults, genFileType, supportedLanguages, supportedThemes } from "./assets/data/Data";

import './App.css';

function App() {
    const [code, setCode] = useState(editorDefaults.code)
    const [language, setLanguage] = useState(editorDefaults.mode)
    const [theme, setTheme] = useState(editorDefaults.theme)
    const [fontSize, setFontSize] = useState(editorDefaults.fontSize)

    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")

    const [IOConsoleVisible, setIOConsoleVisible] = useState(false)

    const controller = new AbortController()
    const [stillFetching, setStillFetching] = useState(false)

    const getNewCode = (newCode) => {
        setCode(newCode)
    }
    const stopExecution = () => {
        console.log("clicked stop execution button")
        controller.abort()
        setStillFetching(false)
    }
    const runCode = async () => {
        setStillFetching(true)
        fetch("https://edit-and-run.herokuapp.com/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code: code,
                language: genFileType(language),
                input: input
            }),
            signal: controller.signal
        })
            .then((response) => {
                return response.json()
            })
            .then((body) => {
                if (body.error == null) {
                    console.log("body: ", body)
                    setOutput(body.output)
                    setStillFetching(false)
                }
                else {
                    console.log("API Error: ", body.error)
                    setOutput(`API Error: ${body.error.message}`)
                    setStillFetching(false)
                }
            })
            .catch((error) => {
                if (error.name === "AbortError") {
                    setOutput(output + `\nAbortError`)
                }
                console.log("error: ", error)
                setStillFetching(false)
            })
    }
    const resetCode = () => {
        setCode(editorDefaults.code)
    }

    const getSelectedLanguage = (index) => {
        setLanguage(supportedLanguages[index])
    }
    const getSelectedTheme = (index) => {
        setTheme(supportedThemes[index])
    }

    const increaseFontSize = () => {
        setFontSize(fontSize + 1)
    }
    const decreaseFontSize = () => {
        setFontSize(fontSize - 1)
    }

    const handleInputChange = (event) => {
        setInput(event.target.value)
    }

    const toggleIOConsole = () => {
        setIOConsoleVisible(!IOConsoleVisible)
    }

    return (
        <div className="App">
            <div className="topbar-editor-container">
                <div className="topbar-div">
                    <Topbar
                        getSelectedLanguage={getSelectedLanguage}
                        getSelectedTheme={getSelectedTheme}
                        increaseFontSize={increaseFontSize}
                        decreaseFontSize={decreaseFontSize}
                        runCode={runCode}
                        resetCode={resetCode}
                        stillFetching={stillFetching}
                        stopExecution={stopExecution}
                    />
                </div>
                <div className="editor-div">
                    <Editor
                        code={code}
                        getNewCode={getNewCode}
                        language={language}
                        theme={theme}
                        fontSize={fontSize}
                    />
                </div>
            </div>
            <div className="input-output-consoles-container" id={IOConsoleVisible ? "showIOConsole" : ""}>
                <div className="input-console-div">
                    <InputConsole
                        input={input}
                        handleInputChange={handleInputChange}
                    />
                </div>
                <div className="output-console-div">
                    <OutputConsole
                        output={output}
                    />
                </div>
            </div>
            <div className="toggle-input-output-console-button-wrapper" onClick={toggleIOConsole} id={IOConsoleVisible ? "increaseToggleBtnZIndex" : ""}>
                <span className="toggle-input-output-console-button">I / O</span>
            </div>
        </div>
    );
}

export default App;
