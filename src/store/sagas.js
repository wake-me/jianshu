import {takeEvery ,put} from 'redux-saga/effects'
import axios from "axios";
import {actionCreators,actionTypes} from "../common/header/store";

function* getList() {
    try {
        const res = yield axios.get('http://rap2api.taobao.org/app/mock/119542/get/todolist');
        const action = actionCreators.changeList(res.data.todolist);
        yield put(action)
    }catch (e) {
        console.log('todo list 网络请求失败');
        yield put({type: "FETCH_FAILED", message: e.message});
    }

}
// generator函数
function* mySaga() {
    yield takeEvery(actionTypes.GET_LIST, getList);
}

export default mySaga;
