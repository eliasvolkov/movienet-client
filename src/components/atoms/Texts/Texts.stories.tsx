import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { H5 } from './H5';
import { P1 } from './P1';
import { P2 } from './P2';

storiesOf('Typography', module)
    .add('H1', () => <H1>Harry Potter and Dark room</H1>)
    .add('H2', () => <H2>new releases</H2>)
    .add('H3', () => <H3>Jingle Jangle: A Christmas Journey</H3>)
    .add('H4', () => <H4>DETAILS</H4>)
    .add('H5', () => <H5>Jingle Jangle: A Christmas Journey</H5>)
    .add('P1', () => (
        <div style={{ width: 400 }}>
            <P1>
                When Anna Wyncomb is introduced to an an underground, all-female
                fight club in order to turn the mess of her life around, she
                discovers she is much more personally connected to the history
                of the club than she could ever imagine.
            </P1>
        </div>
    ))
    .add('P2', () => <P2>2020 | 18+ </P2>);
