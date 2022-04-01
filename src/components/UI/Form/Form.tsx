import { Row, Col } from 'react-bootstrap'

type Props = {
  inputValue: string
  createValue: any
  changeValue: any
}

const Form: React.FC<Props> = ({ inputValue, createValue, changeValue }) => {
  return (
    <Row>
      <Col className='text-center mt-5'>
        <form onSubmit={createValue}>
          <input
            type='text'
            placeholder='Nouvel employé'
            className='form-control'
            value={inputValue}
            onChange={changeValue}
          />
        </form>
      </Col>
    </Row>
  )
}
export default Form
