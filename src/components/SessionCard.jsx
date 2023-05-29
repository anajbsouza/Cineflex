import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function SessionCard({ days }) {
    const { weekday, date, showtimes } = days;
    return (
        <SessionContainer>
            <div data-test="movie-day">{weekday} - {date}</div>
            <ButtonsContainer>
            {showtimes.map(({ id, name: hour }) => (
                <Link to={`/assentos/${id}`} key={id} data-test="showtime">
                    <button data-test="showtime">{hour}</button>
                </Link>
            ))}
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