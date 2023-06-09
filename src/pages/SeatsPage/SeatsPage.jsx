import styled from "styled-components";
import axios from "axios";
import Footer from "../../components/Footer";
import Seat from "../../components/Seat";
import { BASE_URL } from "../../constants/urls";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Caption from "./Caption";
import BuyerForm from "./BuyerForm";

export default function SeatsPage({ setSuccessInfo }) {

    const { idSessao } = useParams();

    const [session, setSession] = useState(undefined);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/showtimes/${idSessao}/seats`)
        .then(resposta => setSession(resposta.data))
        .catch((erro) => console.log(erro.response.data))
    }, []);

    if(session === undefined) {
		return <div>Carregando...</div>;
	}

    function selectSeat(seat) {
        if (!seat.isAvailable) {
            alert("Esse assento não está disponível");
        } else {
            const isSelected = selectedSeats.some((s) => s.id === seat.id);
            if (isSelected) {
                const newSeatsList = selectedSeats.filter((s) => s.id !== seat.id);
                setSelectedSeats(newSeatsList);
            } else {
                setSelectedSeats([...selectedSeats, seat]);
            }
        }
    }

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {session.seats.map((seat) => (
                    <Seat 
                        seat={seat} 
                        key={seat.id}
                        selectSeat={() => selectSeat(seat)}
                        isSelected={selectedSeats.some((s) => s.id === seat.id)}
                    />
                ))}
                
            </SeatsContainer>

            <Caption />

            <BuyerForm 
                selectedSeats={selectedSeats}
                setSuccessInfo={setSuccessInfo}
                session={session}
            />

            <Footer 
                posterURL={session.movie.posterURL} 
                title={session.movie.title}
                weekday={session.day.weekday}
                hour={session.name}
            />

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
