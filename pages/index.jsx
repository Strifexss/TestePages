import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styled from "styled-components"

const Flexar = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 70vh;
  background-color: #fff;
  color: black;

  @media (max-width: 900px){
    width: 100%;
    height: 100%;
  }
`

export default function Home() {
  return (
    <Flexar>
    <Main>
      <h1>Teste</h1>
    </Main>
    </Flexar>
    )
}
