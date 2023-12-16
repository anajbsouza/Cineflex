import { useEffect, useState } from "react";
import styled from "styled-components";
import seatColors from '../constants/colors';

export default function Seat({ seat, selectSeat, isSelected }) {
    const [status, setStatus] = useState("available");
    const { id, isAvailable, name } = seat;

    useEffect(() => {
        if (isSelected) {
            setStatus("selected")
        } else if (isAvailable) {
            setStatus("available")
        } else {
            setStatus("unavailable")
        }
    }, [isSelected])


    return (
        <SeatSelection data-test="seat" onClick={selectSeat} status={status}>{name}</SeatSelection>
    )
}

const SeatSelection = styled.div`
    border: 1px solid ${(props) => seatColors[props.status].border};   
    background-color: ${(props) => seatColors[props.status].background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`