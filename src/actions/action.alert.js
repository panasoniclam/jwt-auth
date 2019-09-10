import * as TYPES from './../constands/index'

const actionSuccess = (data)=>({
    type:TYPES.ALERT_SUCCESS,
    data
})

const actionError = data =>({
    type:TYPES.ALERT_FAIL,
    data
})

const actionClear = data =>({
    type:TYPES.ALERT_CLEAR,
    data
})

export {
    actionClear,
    actionError,actionSuccess
}