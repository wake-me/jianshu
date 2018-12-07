import * as actionTypes from './constants'
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn:false,
    list: [],
    page:0,
    totalPage:1
});

export default (state = defaultState, action) => {
    // immutable对象的set方法,会结合之前immutable对象的值和设置的值,返回一个全新的对象
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS :
            return state.set('focused', true);
        case actionTypes.SEARCH_BLUR :
            return state.set('focused', false);
        case actionTypes.CHANGE_LIST:
            return state.merge({
                list: action.list,
                totalPage: action.totalPage
            });
            // state.set('list', action.list).set('totalPage',action.totalPage);
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state
    }
}
