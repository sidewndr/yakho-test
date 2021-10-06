const defaultState = [
  {
    id: 0,
    teamName: 'Russia',
    logoUrl: '...',
    members: [
      {
        id: 0,
        name: 'Vladimir',
        surname: 'Putin',
        quote: 'Molodec!',
        imgUrl: '...'
      },
      {
        id: 1,
        name: 'Dmitriy',
        surname: 'Medvedev',
        quote: 'Ne molodec!',
        imgUrl: '...'
      },
    ]
  },

  {
    id: 1,
    teamName: 'USA',
    logoUrl: '...',
    members: [
      {
        id: 0,
        name: 'Barak',
        surname: 'Obama',
        quote: 'mmmm banana',
        imgUrl: '...'
      },
    ]
  },
]


export const teamsReducer = (state = defaultState, action) => {
  switch (action.type) {


    default:
      return state
  }
}