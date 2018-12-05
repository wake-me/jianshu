const defaultState = {
    focused: false
};

export default (state = defaultState, active) => {
    if (active.type === 'search_focus') {
        return {
            focused: true
        }
    }
    if (active.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state
}
