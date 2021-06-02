export const editorDefaults = {
    mode: "c_cpp",
    code: '#include <iostream>\n\nusing namespace std;\n\nint main() {\n\tcout << "Hi, I\'m Eessh" << endl;\n\treturn 0;\n}',
    theme: "dracula",
    fontSize: 20
}

export const genFileType = (str) => {
    switch (str) {
        case "c_cpp":
            return "cpp"
        case "csharp":
            return "cs"
        case "java":
            return "java"
        case "kotlin":
            return "kt"
        case "python":
            return "py"
        case "ruby":
            return "rb"
        case "swift":
            return "swift"
        default:
            return null
    }
}

export const dropdownDefaultsGen = (str) => {
    if (str === "c_cpp") {
        return "C / C++"
    }
    else if (str === "csharp") {
        return "C#"
    }
    else {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
}

export const supportedLanguages = ["c_cpp", "csharp", "java", "kotlin", "python", "ruby", "swift"]
export const supportedThemes = ["ambiance", "cobalt", "dracula", "gruvbox", "merbivore", "monokai"]

export const languagesDropdownList = [
    {
        name: "C / C++",
        index: 0,
        selected: false
    },
    {
        name: "C#",
        index: 1,
        selected: false
    },
    {
        name: "Java",
        index: 2,
        selected: false
    },
    {
        name: "Kotlin",
        index: 3,
        selected: false
    },
    {
        name: "Python",
        index: 4,
        selected: false
    },
    {
        name: "Ruby",
        index: 5,
        selected: false
    },
    {
        name: "Swift",
        index: 6,
        selected: false
    }
]

export const themesDropdownList = [
    {
        name: "Ambiance",
        index: 0,
        selected: false
    },
    {
        name: "Cobalt",
        index: 1,
        selected: false
    },
    {
        name: "Dracula",
        index: 2,
        selected: false
    },
    {
        name: "Gruvbox",
        index: 3,
        selected: false
    },
    {
        name: "Merbivore",
        index: 4,
        selected: false
    },
    {
        name: "Monokai",
        index: 5,
        selected: false,
    }
]