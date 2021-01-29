import Automerge from 'automerge'

const initDoc = initDocWithText('actorId', '')
// const initialState = {
//   doc: initDoc, 
//   lastSyncedDoc: initDoc, 
//   text: initDoc.text.toString(),
//   saveTimingMs: 0,
//   syncTimingMs: 0,
// }

const initialState = {
  text: ''
}

export default function textarea(state = initialState, action) {
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

function initDocWithText(actorId, text) {
  return Automerge.change(Automerge.init(actorId), doc => {
    doc.text = new Automerge.Text(text)
    return doc.text.insertAt(0)
  })
}