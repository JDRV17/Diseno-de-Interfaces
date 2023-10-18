
export const setModal = (hide) => (dispatch) =>{   //Funcion que retorna otra funcion
    dispatch({
        type: 'SET_MODAL',
        payload: hide,
    })
}
