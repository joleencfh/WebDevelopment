//this is to avoid having to repeat writing the action structure
//everytime we want to dispatch it
import * as docActions from './DocsActionTypes';



export function docAdded(title, date, picture) {
    return {
        type: docActions.DOC_ADDED,
        payload: {
            title: title,
            date: date,
            picture: picture
        }
    };
}

export function docDeleted(id) {
    return {
        type: docActions.DOC_DELETED,
        payload: {
            id
        }
    }
}