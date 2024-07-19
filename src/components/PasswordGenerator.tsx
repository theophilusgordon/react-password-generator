// src/PasswordGenerator.js
import { useState } from 'react';
import ArrowRight from '../../../password-generator/src/assets/icon-arrow-right.svg';
import GeneratedPassword from './GeneratedPassword.tsx';
import PasswordSettings from './PasswordSettings.tsx';
import StrengthIndicator from './StrengthIndicator.tsx';

const PasswordGenerator = () => {
    const [length, setLength] = useState(10);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(2);
    const [strengthDescription, setStrengthDescription] = useState('Medium');

  const generatePassword = () => {
    const charSets = {
        upperCaseChars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowerCaseChars: 'abcdefghijklmnopqrstuvwxyz',
        numberChars: '0123456789',
        symbolChars: '!@#$%^&*()_+[]{}|;:,.<>?'
    };
    let allChars = '';
    allChars += includeUppercase ? charSets.upperCaseChars : '';
    allChars += includeLowercase ? charSets.lowerCaseChars : '';
    allChars += includeNumbers ? charSets.numberChars : '';
    allChars += includeSymbols ? charSets.symbolChars : '';

    if(!allChars) return;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars[randomIndex];
    }
    setPassword(generatedPassword);
    calculateStrength(generatedPassword);
};

const calculateStrength = (pwd: string): void => {
    const conditions = [
        /[A-Z]/,
        /[a-z]/,
        /[0-9]/,
        /[!@#$%^&*()_+[\]{}|;:,.<>?]/
    ];
const strengthScore = conditions.reduce((acc, regex) => acc + Number(regex.test(pwd)), 0);

    setStrength(strengthScore - 1);

    const descriptions = ['Too Weak', 'Weak', 'Medium', 'Strong'];
    setStrengthDescription(descriptions[strengthScore - 1] || 'Weak');
};

    return (
        <div className="password-generator">
            <h2>Password Generator</h2>
            <GeneratedPassword password={password} />
            <div className="password-generator-body">
                <PasswordSettings
                    length={length}
                    setLength={setLength}
                    includeUppercase={includeUppercase}
                    setIncludeUppercase={setIncludeUppercase}
                    includeLowercase={includeLowercase}
                    setIncludeLowercase={setIncludeLowercase}
                    includeNumbers={includeNumbers}
                    setIncludeNumbers={setIncludeNumbers}
                    includeSymbols={includeSymbols}
                    setIncludeSymbols={setIncludeSymbols}
                />
                <StrengthIndicator strength={strength} strengthDescription={strengthDescription} />
                <button className="generate-btn" onClick={generatePassword}>
                    Generate <img className="right-arrow" src={ArrowRight} alt="right arrow" />
                </button>
            </div>
        </div>
    );
};

export default PasswordGenerator;
