import AcTypes from '../configs/types';
import { Record,Map } from 'immutable';
const {
    QUERY_BY_ID
} = AcTypes;

const InitialState = Record({
    article:Map({})
});

const initialState = new InitialState();

export default function BLogDetailReducer(state = initialState, action = {}) {
    switch (action.type) {
        case QUERY_BY_ID:
            return state.setIn(['article'],Map(action.payload))
    }
    return state
}
