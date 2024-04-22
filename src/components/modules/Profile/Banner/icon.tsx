import React from 'react';
import * as S from './style';
export default function ChangeAvt() {
  return (
    <S.Camera>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width="100%"
        height="100%"
        fill="none"
      >
        <rect width="100%" height="100%" fill="none" rx="8" ry="8" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="100%"
          height="100%"
          fill="none"
          stroke="currentColor"
          strokeWidth="32"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" />
          <circle cx="256" cy="272" r="80" />
          <path d="M124 158v-22h-24v22" />
        </svg>
      </svg>
    </S.Camera>
  );
}
