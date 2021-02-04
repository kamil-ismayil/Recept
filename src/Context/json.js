import {useReducer, useCallback} from 'react';

const initialState = {
    error: null, 
    data: null, 
    loading: false
}

let files = {
    username_password: require('../Data/Json/username_password.json'),
    drinkData: require('../Data/Json/drinkData.json')
}

const jsonReducer = (currJsonState, action) => {
    switch(action.type){
        case 'INIT':
          return {loading: true, error: null, data: null};
        case 'READ':
          return {...currJsonState, loading: false, data: action.responseData}; 
        case 'ERROR':
            return {loading: false, error: action.errorMessage};
        default: 
          throw new Error('Should not be reached!');
      }
}

const useJson = () => {
    const [jsonState, dispatchJsonState] = useReducer(jsonReducer, initialState);

    const readRequest = useCallback( (file_name, body) => {  
        dispatchJsonState({type: 'INIT'});
        let data = files[file_name];
                
        data!=null ? dispatchJsonState({type: 'READ', responseData: data}) 
                   : dispatchJsonState({type: 'ERROR', errorMessage: "Something wrong with the file"});
    }, []);

    return {
        isLoading: jsonState.loading,
        data: jsonState.data,
        error: jsonState.error, 
        readRequest: readRequest
    };

}

export default useJson;