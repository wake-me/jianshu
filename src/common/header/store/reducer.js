import * as actionTypes from './constants'

const defaultState = {
    focused: false
};

export default (state = defaultState, active) => {
    if (active.type === actionTypes.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (active.type === actionTypes.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state
}
