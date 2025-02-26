import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer";


const initialState = {
    transactions : [
        // {'id':1,'text': 'Flower','amount': '-20'},
        // {'id':2,'text': 'Salary','amount': '300'},
        // {'id':3,'text': 'Book','amount': '-10'},
        // {'id':4,'text': 'Camera','amount': '150'},
    ]
}

const GlobalContext = createContext(initialState);

export default GlobalContext;

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer,initialState);
    function addTransaction (transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    return <GlobalContext.Provider value={{
        transactions : state.transactions,
        addTransaction,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>
}