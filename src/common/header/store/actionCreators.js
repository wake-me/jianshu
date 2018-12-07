
import * as actionTypes from './constants'
import { fromJS } from 'immutable';
export const searchFocus= () =>({
    type: actionTypes.SEARCH_FOCUS
});


export const searchBlur= () =>({
    type: actionTypes.SEARCH_BLUR
});

export const getList= () =>({
    type: actionTypes.GET_LIST
});

export const changeList= (data) =>({
    type: actionTypes.CHANGE_LIST,
    list: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const mouseEnter = () =>({
    type: actionTypes.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
});
