import { Col, Row } from 'react-bootstrap'
import './Title.css'

const Title: React.FC<any> = ({ title, color }) => {
  return (
    <Row>
      <Col className='text-center mt-5'>
        <h4 className={'text-' + color}>{title}</h4>
      </Col>
    </Row>
  )
}

export default Title
