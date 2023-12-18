import styled from "styled-components";
import axios from "axios";
import SessionCard from "../../components/SessionCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";

export default function SessionsPage() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const { idFilme } = useParams();
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        axios.get(`${apiKey}/movies/${idFilme}/showtimes`)
        .then(result => setMovies(result.data))
        .catch((err) => console.log(err.response.data))
    }, []);

    if(movies === undefined) {
		return <div>Carregando...</div>;
	}

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {movies.days.map((s) => <SessionCard key={s.id} days={s}/>)}
            </div>
            <Footer posterURL={movies.posterURL} title={movies.title}/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
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
