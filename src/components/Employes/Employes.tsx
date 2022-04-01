import { Button, Row, Col, Table, Spinner } from 'react-bootstrap'

type Props = {
  list: any
  onDelete: any
  loading: boolean
}

const Employes: React.FC<any> = ({ list, onDelete, loading }) => {
  return (
    <Row>
      <Col className='text-center mt-5'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom de l'employé</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={3}>
                  <Spinner animation='border' role='status'>
                    <span className='visually-hidden'>Loading...</span>
                  </Spinner>
                </td>
              </tr>
            ) : list.length == 0 ? (
              <tr>
                <td colSpan={3}>Aucune donnée...</td>
              </tr>
            ) : (
              <>
                {list.map((employe: any) => (
                  <tr key={employe.id}>
                    <td>{employe.id}</td>
                    <td>{employe.name}</td>
                    <td>
                      <Button variant='warning' className='me-2'>
                        Modifier
                      </Button>
                      <Button variant='danger' onClick={() => onDelete(employe.id)}>
                        Supprimer
                      </Button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

export default Employes
