import styled from "styled-components";
import axios from "axios";
import SessionCard from "../../components/SessionCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import Footer from "../../components/Footer";

export default function SessionsPage() {
    const { idFilme } = useParams();

    const [filmes, setFilmes] = useState(undefined);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${idFilme}/showtimes`)
        .then(resposta => setFilmes(resposta.data))
        .catch((erro) => console.log(erro.response.data))
    }, []);

    if(filmes === undefined) {
		return <div>Carregando...</div>;
	}

    return (
        <PageContainer>
            Selecione o horário
            <div>
                {filmes.days.map((s) => <SessionCard key={s.id} days={s}/>)}
            </div>
            <Footer posterURL={filmes.posterURL} title={filmes.title}/>
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
