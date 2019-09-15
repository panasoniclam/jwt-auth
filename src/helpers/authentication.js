import *  as TYPES from './../constands/constand.global'
export default checkPermission=>{
    let lcS = localStorage.getItem(TYPES.Permisstion);
    if(!lcS){
        localStorage.clear()

        return false;
    }
    if (checkPermission.test(lcS)) {
        return true
    }
    return false
}