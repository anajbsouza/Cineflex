import React from 'react';
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard";

export default function HomePage() {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [movies, setMovies] = useState(undefined);

    useEffect(() => {
        axios.get(`${apiKey}/movies`)
        .then(result => setMovies(result.data))
        .catch((err) => console.log(err.response.data))
    }, []);

    if(movies === undefined) {
		return <div>Carregando...</div>;
	}

    return (
        <PageContainer>
            Selecione o filme
            <ListContainer>
                {movies.map((f) => (
                    <Link to={`/sessoes/${f.id}`} key={f.id}>
                        <MovieCard movies={f} />   
                    </Link>
                ))}
            </ListContainer>
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
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
