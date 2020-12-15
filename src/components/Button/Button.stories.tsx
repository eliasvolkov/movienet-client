import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components/macro';
import { Grid, Box } from 'react-raster';
import { Button } from './Button';
import { BREAKPOINTS } from '../../constants';

storiesOf('Button', module).add('with text', () => (
    <Grid
        breakpoints={BREAKPOINTS.reverse()}
        colspan={12}
        left="1vw"
        right="2vw"
        top="2vw"
        bottom="2vw"
        gutterX="2vw"
        gutterY="2vw"
        control>
        <Wrapper cols={[2, 6]}>
            <InputWrapper />
            <ButtonsWrapper>
                <Button onClick={action('clicked')} themeType="secondary">
                    Sign In
                </Button>
            </ButtonsWrapper>
        </Wrapper>
    </Grid>
));

const Wrapper = styled(Box)`
    width: 100%;
    min-height: 30vh;
    display: flex;
    flex-flow: column wrap;
    padding: 24px 32px;

    background-color: rgba(31, 33, 37, 0.8);
    border: 1px solid #565c67;
    border-radius: 8px;
`;

const InputWrapper = styled.div`
    margin-top: 16px;
`;

const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;
