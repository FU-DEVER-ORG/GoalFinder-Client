const themeColors = {
    primaryLightBackground : '#f5f5f5',
    primaryDarkBackground : '#202020',
    primaryConponentsLightBackground : '#fff',
    secondaryConponentsLightBackground : '#f8f8f8',
    tertiaryLightBackground : '#2196F3',
    lightOverplay : 'rgba(11, 11, 11, 0.8)',
    // text 
    primaryLightText : '#000',
    secondaryLightText : '#909090',
    tertiaryLightText : '#7d8186',
    primaryDarkText: '#ffffff',
    //
    primaryGreen: '#4DAA57'


}
const colors = {
    ...themeColors,
    backgroundColor: themeColors.primaryLightBackground,
    other: themeColors,
    primaryColor: themeColors.primaryLightText,
    textColor: themeColors.primaryLightText,
  };
  export default colors;
  