const defaultState = [
  {
    id: 0,
    teamId: 0,
    name: 'Vladimir',
    surname: 'Putin',
    quote: 'Molodec!',
    imgUrl: '...'
  },
  {
    id: 1,
    teamId: 0,
    name: 'Dmitriy',
    surname: 'Medvedev',
    quote: 'Ne molodec!',
    imgUrl: '...'
  },
  {
    id: 2,
    teamId: 1,
    name: 'Barak',
    surname: 'Obama',
    quote: 'mmmm banana',
    imgUrl: '...'
  },
]

export const membersReducer = (state = defaultState, action) => {
  switch (action.type) {


    default:
      return state
  }
}