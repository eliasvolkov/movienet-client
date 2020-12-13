import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { mq } from 'utils/ui';
import { H1 } from './H1';

storiesOf('H1', module).add('Some text', () => <H1>Свадьба Принца Гарри и Меган Маркл</H1>);
