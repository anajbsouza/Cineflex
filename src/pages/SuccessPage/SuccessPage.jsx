import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

function MovieSession({ movie, date, hour }) {
    return (
        <TextContainer>
            <strong><p>Filme e sessão</p></strong>
            <p>{movie}</p>
            <p>{date} - {hour}</p>
        </TextContainer>
    );
}

function SeatsInfo({ seats }) {
    return (
        <TextContainer>
            <strong><p>Ingressos</p></strong>
            {seats.map((s, index) => (
                <p key={index}>
                    Assento {s}
                </p>
            ))}
        </TextContainer>
    );
}

function ClientInfo({ buyer, cpf }) {
    return (
        <TextContainer>
            <strong><p>Comprador</p></strong>
            <p>Nome: {buyer}</p>
            <p>CPF: {cpf}</p>
        </TextContainer>
    );
}

export default function SuccessPage({ buyerInfo }) {
    const { movie, date, hour, buyer, cpf, seats } = buyerInfo;

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>
            <MovieSession movie={movie} date={date} hour={hour} />
            <SeatsInfo seats={seats} />
            <ClientInfo buyer={buyer} cpf={cpf} />
            <Link to="/">
                <button data-test="go-home-btn">Voltar para Home</button>
            </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`

const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`
