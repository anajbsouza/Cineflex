import React from 'react';
import styled from "styled-components";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function BuyerForm({ selectedSeats, setBuyerInfo, session }) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const [form, setForm] = useState({ name: "", cpf: "" });
    const [disableButton, setDisableButton] = useState(true);

    const navigate = useNavigate()

    useEffect(() => {
        if (form.name && form.cpf && selectedSeats.length > 0) {
            setDisableButton(false)
        } else {
            setDisableButton(true)
        }
    }, [selectedSeats, form])

    function handleForm(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function buyTicket(e) {
        e.preventDefault();
        const ids = selectedSeats.map((s) => s.id);
        const body = {...form, ids};
        axios.post(`${apiKey}/seats/book-many`, body)
            .then(result => {
                const info = {
                    movie: session.movie.title,
                    date: session.day.date,
                    hour: session.name,
                    buyer: form.name,
                    cpf: form.cpf,
                    seats: selectedSeats.map((s) => s.name)
                }
                setBuyerInfo(info);
                navigate("/sucesso")
            })
            .catch(err => alert(err.response.data.message));
    }

    return (
        <FormContainer onSubmit={buyTicket}>
            <label htmlFor='name'>Nome do Comprador:</label>
            <input 
                id='name' 
                placeholder="Digite seu nome..." 
                name="name"
                value={form.name}
                onChange={handleForm}
                required
                data-test="client-name"
            />

            <label htmlFor='cpf'>CPF do Comprador:</label>
            <input 
                id='cpf' 
                placeholder="Digite seu CPF..." 
                name="cpf"
                value={form.cpf}
                onChange={handleForm}
                required
                data-test="client-cpf"
            />

            <button type="submit" data-test="book-seat-btn">Reservar Assento(s)</button>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
