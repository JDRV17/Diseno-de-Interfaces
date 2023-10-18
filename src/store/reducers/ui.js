
const INITIAL_STATE = {
    hideModal: true,
    showNotification: false,
};

const uiReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'SET_MODAL':
            return{...state,hideModal: action.payload}
        default:
            return state;
    }
} //La accion modifica la variable global

export default uiReducer;