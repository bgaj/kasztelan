import React, { PropTypes } from 'react';
import { combineReducers } from 'redux';

import next from './next_match'
import prev from './prev_match'

const reducer = combineReducers({
    next,
    prev
});

export default reducer