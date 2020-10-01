const mainColors = {
  tosca: '#00CFCD',
  toscaDark: '#00B6B4',
  white: 'white',
  black: '#000000',
  black2: 'rgba(0,0,0,0.5)',
  yellow: 'yellow',
  grey1: '#858587',
  grey2: '#CBCBCF',
  grey3: '#dfe4ea',
  grey4: '#E5E5E5',
  orange: '#FF4F00',
  blue: '#0599ED',
  indigo: '#0c2461',
  skyblue: '#ACCEFF',
};

export const colors = {
  tosca: mainColors.tosca,
  toscaDark: mainColors.toscaDark,
  primary: mainColors.tosca,
  secondary: mainColors.toscaDark,
  indigo: mainColors.indigo,
  white: 'white',
  black: 'black',
  yellow: 'yellow',
  grey1: mainColors.grey1,
  grey2: mainColors.grey2,
  grey3: mainColors.grey3,
  grey4: mainColors.grey4,
  orange: mainColors.orange,
  blue: mainColors.blue,
  skyblue: mainColors.skyblue,
  text: {
    default: mainColors.black,
    grey: mainColors.grey1,
  },
  button: {
    disable: {
      background: mainColors.grey2,
      text: mainColors.grey1,
    },
    primary: {
      background: mainColors.primary,
      text: mainColors.white,
    },
  },
  loadingBackground: mainColors.black2,
};
