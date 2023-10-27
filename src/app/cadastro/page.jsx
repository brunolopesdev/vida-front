'use client'

import styles from './styles.module.scss'

import { useState } from 'react'
import PacienteNovo from '../../../components/FormReceptor'
import DoadorNovo from '../../../components/FormDoador'
import { Button } from '@nextui-org/react'

export default function Cadastro() {
  const [isDoador, setIsDoador] = useState(false)
  const [isReceptor, setIsReceptor] = useState(false)

  const handleClickDoador = () => {
    setIsDoador(true)
    setIsReceptor(false)
  }

  const handleClickReceptor = () => {
    setIsReceptor(true)
    setIsDoador(false)
  }

  return (
    <section className={styles.containerRegister}>

      <Button color='primary' className='m-4' onClick={handleClickDoador}>Sou Doador</Button>
      <Button color='primary' className="m-4" onClick={handleClickReceptor}>Sou Receptor</Button>

      {isDoador && <DoadorNovo />}
      {isReceptor && <PacienteNovo />}
    </section>
  )
}