const defaultState = [
  {
    id: 0,
    teamName: 'Russia',
    logoUrl: '...',
  },
  {
    id: 1,
    teamName: 'USA',
    logoUrl: '...',
  },
]


const ADD_TEAM = 'ADD_TEAM'
const DELETE_TEAM = 'DELETE_TEAM'
const EDIT_TEAM = 'EDIT_TEAM'

export const teamsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TEAM:
      return [
        ...state,
        {
          id: new Date().getTime(),
          teamName: action.payload.teamName,
          logoUrl: action.payload.logoUrl
        }
      ]

    case DELETE_TEAM:
      return state.filter((team) => team.id !== action.payload)

    case EDIT_TEAM: {
      const otherTeams = state.filter((team) => action.payload.teamId !== team.id)

      let editableTeam = state.filter((team) => team.id === action.payload.teamId)
      editableTeam[0] = {
        ...editableTeam[0],
        teamName: action.payload.name,
        logoUrl: action.payload.logoUrl
      }

      return [...otherTeams, ...editableTeam]
    }

    default:
      return state
  }
}

export const addTeamAction = (payload) => ({type: ADD_TEAM, payload})
export const deleteTeamAction = (payload) => ({type: DELETE_TEAM, payload})
export const editTeamAction = (payload) => ({type: EDIT_TEAM, payload})