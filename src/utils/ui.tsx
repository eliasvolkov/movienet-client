import React from 'react';
import facepaint from 'facepaint';
import { BREAKPOINTS } from '../constants';

export const mq = facepaint(
    BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`),
);
