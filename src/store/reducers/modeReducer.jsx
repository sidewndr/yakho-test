const defaultState = {
  mode: 'light',
  colors: {
    primary: 'black',
    secondary: 'white'
  }
}

const TOGGLE_MODE = 'TOGGLE_MODE'

export const modeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        mode: (state.mode === 'light') ? 'dark' : 'light',
        colors: {
          primary: (state.colors.primary === 'black') ? 'white' : 'black',
          secondary: (state.colors.secondary === 'white') ? 'black' : 'white'
        }
      }

    default:
      return state
  }
}