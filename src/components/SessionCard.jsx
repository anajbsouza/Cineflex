import React from 'react';
import styled from 'styled-components';

export default function SessionCard() {
    return (
        <SessionContainer>
            Sexta - 03/03/2023
            <ButtonsContainer>
                <button>14:00</button>
                <button>15:00</button>
            </ButtonsContainer>
        </SessionContainer>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`