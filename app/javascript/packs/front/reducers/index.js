import React, { PropTypes } from 'react';
import { combineReducers } from 'redux';

import next from './next_match'
import prev from './prev_match'
import sponsors from './sponsors'

const reducer = combineReducers({
    next,
    prev,
    sponsors
});

export default reducer