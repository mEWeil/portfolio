/* eslint-disable react/no-array-index-key */
import React from 'react';
import './index.scss';

interface IAnimantedLetters {
  letterClass: string;
  strArray: string[];
  idx: number;
}

export default function AnimatedLetters({
  letterClass,
  strArray,
  idx,
}: IAnimantedLetters) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}
