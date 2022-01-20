import React from 'react'
import Container from 'react-bootstrap/Container'
import { Counter } from '../features/counter/Counter'
import logo from './logo.svg'
import './logo.css'

export function Home() {
  return (
    <Container className="text-center">
      <div
        className="d-flex flex-column justify-content-center align-items-center min-vh-100"
        style={{
          marginTop: '-56px',
          fontSize: 'calc(10px + 2vmin)',
        }}
      >
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>
    </Container>
  )
}
