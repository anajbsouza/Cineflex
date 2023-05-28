import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from 'react';
import MovieCard from "../../components/MovieCard";

export default function HomePage() {
    
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';

        const promise = axios.get(URL);
        promise.then( (resposta) => {
            console.log(resposta.data);
            setFilmes(resposta.data);
        });
        promise.catch((erro) => {
            console.log(erro.response.data);
        });
    }, []);

    if(filmes.length === 0) {
		return <div></div>;
	}


    return (
        <PageContainer>
            Selecione o filme

            <MovieCard />

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
    padding-top: 70px;
`
