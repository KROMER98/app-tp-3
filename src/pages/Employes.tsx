import React from 'react'
import { Button, Col, Container, Row, Spinner, Table } from 'react-bootstrap'
import Employes from '../components/Employes/Employes'
import Title from '../components/Title/Title'
import Form from '../components/UI/Form/Form'

const App: React.FC<any> = () => {
  // State
  const [listEmploye, setListEmploye] = React.useState<any[]>([
    { id: 1, name: 'Fabrice' },
    { id: 2, name: 'Christophe' },
  ])
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [inputValue, setInputValue] = React.useState<string>('')

  // Events
  const handleDelete = (id: number) => {
    const newList = listEmploye.filter((employe) => employe.id != id)
    setListEmploye(newList)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const lastEmploye = listEmploye.slice(-1)
    const newId = lastEmploye[0].id + 1
    const newEmploye = { id: newId, name: inputValue }
    setListEmploye([newEmploye, ...listEmploye])
    setInputValue('')
  }

  //Render
  return (
    <>
      <Container>
        <Title title='Liste des employés' color='primary' />
        <Form inputValue={inputValue} createValue={handleSubmit} changeValue={handleChange} />
        <Employes list={listEmploye} onDelete={handleDelete} loading={isLoading} />
      </Container>
    </>
  )
}

export default App