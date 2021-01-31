import Automerge from 'automerge'

const initDoc = initDocWithText('actorId', '')
// const initialState = {
//   doc: initDoc, 
//   lastSyncedDoc: initDoc, 
//   text: initDoc.text.toString(),
//   saveTimingMs: 0,
//   syncTimingMs: 0,
// }

type actionType = {
  type: string,
  payload: {}
}

type automergeDocType = {
  text: Automerge.Text,
}

const initialState = {
  text: ''
}

export default function textarea(state = initialState, action: actionType) {
  console.log('reducers.textarea')
  if (action.type === 'text/update') {


    return {
      ...state,
      text: action.payload
    }
  } else {
    return state
  }
}

function initDocWithText(actorId: string, text: string) {
  return Automerge.change(Automerge.init(actorId), insertText))
  
  function insertText(doc: automergeDocType) {
    doc.text = new Automerge.Text(text)
    return doc.text.insertAt?(0)
  }
}