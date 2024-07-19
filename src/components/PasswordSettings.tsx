interface PasswordSettingsProps {
    length: number;
    setLength: (length: number) => void;
    includeUppercase: boolean;
    setIncludeUppercase: (includeUppercase: boolean) => void;
    includeLowercase: boolean;
    setIncludeLowercase: (includeLowercase: boolean) => void;
    includeNumbers: boolean;
    setIncludeNumbers: (includeNumbers: boolean) => void;
    includeSymbols: boolean;
    setIncludeSymbols: (includeSymbols: boolean) => void;

}
const PasswordSettings = ({
                              length,
                              setLength,
                              includeUppercase,
                              setIncludeUppercase,
                              includeLowercase,
                              setIncludeLowercase,
                              includeNumbers,
                              setIncludeNumbers,
                              includeSymbols,
                              setIncludeSymbols,
                          }: PasswordSettingsProps) => {
    return (
        <div className="settings">
            <div className="password-length">
                <p>Character Length</p> <p className="length">{length}</p>
            </div>
            <input
                type="range"
                min="1"
                max="20"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>
                <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={() => setIncludeUppercase(!includeUppercase)}
                />
                Include Uppercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={() => setIncludeLowercase(!includeLowercase)}
                />
                Include Lowercase Letters
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                />
                Include Numbers
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                />
                Include Symbols
            </label>
        </div>
    );
};

export default PasswordSettings;
