'use client';

import React from 'react';

import * as S from './typography.styles';

interface TypographyProps {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body-text-bold'
    | 'body-text-normal'
    | 'body-text-small-bold'
    | 'body-text-small-normal'
    | 'caption-normal'
    | 'caption-small';
  color?: string;
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  className?: string;
  transform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
  align?: 'left' | 'right' | 'center';
  style?: 'normal' | 'italic' | 'oblique';
  textDecoration?: 'none' | 'underline';
}

export default function Typography({
  variant = 'body-text-normal',
  color,
  children,
  padding,
  margin,
  className,
  transform = 'none',
  align = 'left',
  style = 'normal',
  textDecoration = 'none',
}: TypographyProps) {
  switch (variant) {
    case 'h1':
      return (
        <S.H1
          $color={color}
          $margin={margin}
          $padding={padding}
          className={className}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.H1>
      );
    case 'h2':
      return (
        <S.H2
          $color={color}
          $margin={margin}
          $padding={padding}
          className={className}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.H2>
      );
    case 'h3':
      return (
        <S.H3
          $color={color}
          $margin={margin}
          $padding={padding}
          className={className}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.H3>
      );
    case 'h4':
      return (
        <S.H4
          $color={color}
          $margin={margin}
          $padding={padding}
          className={className}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.H4>
      );
    case 'h5':
      return (
        <S.H5
          $color={color}
          $margin={margin}
          $padding={padding}
          className={className}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.H5>
      );
    case 'body-text-bold':
      return (
        <S.P
          className={`body-text-bold ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
    case 'body-text-normal':
      return (
        <S.P
          className={`body-text-normal ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
    case 'body-text-small-bold':
      return (
        <S.P
          className={`body-text-small-bold ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
    case 'body-text-small-normal':
      return (
        <S.P
          className={`body-text-small-normal ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
    case 'caption-normal':
      return (
        <S.P
          className={`caption-normal ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
    case 'caption-small':
      return (
        <S.P
          className={`caption-small ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
    default:
      return (
        <S.P
          className={`body-text-normal ${className}`}
          $color={color}
          $margin={margin}
          $padding={padding}
          $transform={transform}
          $align={align}
          $style={style}
          $textDecoration={textDecoration}
        >
          {children}
        </S.P>
      );
  }
}
