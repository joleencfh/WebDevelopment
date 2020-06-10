//a reducer is a function with two parameters, the current state and an action
//the reducer returns the new state based on the given action
// a reducer needs to be a pure function

import * as docActions from './DocsActionTypes';
import Document from '../Document';

//Counter for document id
let lastId = 0;

//here I create reducers with the help of redux toolkit createReducer function
//toolkit uses Immer under the hood, so the immutable code is created automatically
//This function has two parameters: the first is the initial state (empty array) and 
//the second is an object that maps actions to functions that handle those actions
// createReducer([], {
//     //we pass key-value pairs
//     //keys will be actions
//     //values are functions that handle those actions
//     docAdded: (state, action) => {  
//         const newDocument = new Document(
//             ++lastId, 
//             action.payload.title
//             );
//         //no need for the spread operator, since I use push
//         state.push({newDocument});
//     },
//     docDeleted: (state, action) => {
//         //const index = state.findIndex(doc => doc.id ===action.payload.id);
//         // missing delete code
//         state.filter ()

//     }
// })

//define the initial state of the store
const startState = {
    docs: []
};

//at the first use of the app, the state would be undefined.
//so in that case it's better to pass an empty array, to avoid the "undefined" error
export default function docsReducer(state = startState, action) {
    if (action.type === docActions.DOC_ADDED) {
      const newDoc = new Document(++lastId, action.payload.title, action.payload.date, action.payload.picture);
        return {
        //this returns a new state (taking the old array and adding a new item to it)
        docs: state.docs.concat(newDoc)
        }
    }

    else if (action.type === docActions.DOC_DELETED)
    //return the state except the document with the given id
    return state.filter(document => document.id !== action.payload.id);

    //If the title of our action is not any of the above
    return state;
}
