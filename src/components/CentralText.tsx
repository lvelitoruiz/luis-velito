import React, { useEffect, useState } from 'react';

interface CentralTextProps {
    originalText: string;
    endText: string;
    showPoint: boolean;
}

export const CentralText: React.FC<CentralTextProps> = ({ originalText, endText, showPoint }) => {
    const [text, setText] = useState<string>(originalText);

    useEffect(() => {
        const totalChanges = 12;
        const intervalDuration = 1000 / (originalText.length * totalChanges);
        let currentIndex = 0;
        let changesCount = 0;
        let interval: NodeJS.Timeout;

        const startTransition = () => {
            interval = setInterval(() => {
                const newText = text
                    .split('')
                    .map((char, index) => {
                        if (char === originalText[index]) {
                            if (/[A-Za-z!.?]/.test(char)) {
                                const offset = Math.floor(Math.random() * 26);
                                const isUpperCase = char === char.toUpperCase();
                                const baseCharCode = isUpperCase ? 65 : 97;
                                const newCharCode = ((char.charCodeAt(0) - baseCharCode + offset) % 26) + baseCharCode;
                                return String.fromCharCode(newCharCode);
                            } else {
                                return char;
                            }
                        } else {
                            return char;
                        }
                    })
                    .join('');

                setText(newText);

                changesCount++;

                if (changesCount >= totalChanges * originalText.length) {
                    setText(endText);
                    clearInterval(interval);
                }
            }, intervalDuration);
        };

        const delayTimeout = setTimeout(startTransition, 500);

        return () => {
            clearTimeout(delayTimeout);
            clearInterval(interval);
        };
    }, [originalText, endText]);

    return (
        <p className="central-text">
            {text}
            {showPoint ? <span className="text-[#ED6459]">.</span> : null}
        </p>
    );
};
