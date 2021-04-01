import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import '../styles/Loading.css';

const Loading = () => {
    return (
        <div id="loading">
            <h5>Estamos preparando todo para ti</h5>
            <Spinner className="spinner" animation="grow" />
            <Spinner className="spinner" animation="grow" />
            <Spinner className="spinner" animation="grow" />
        </div>
    )
}

export default Loading;