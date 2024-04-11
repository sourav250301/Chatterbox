import React from 'react';
import { Modal, Row, Col, Container, Button } from 'react-bootstrap'

const FileInputModal = (prop) => {
  return (
    <>
      <Modal centered show={prop.show}>
        <Modal.Body>
            <Container>
                <Row>
                    <Col>
                    <Button>Camera</Button>
                    </Col>
                    <Col>
                    <Button>Photos</Button>
                    </Col>
                    <Col>
                    <Button>Document</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button>Videos</Button>
                    </Col>
                    <Col>
                    <Button>Voice</Button>
                    </Col>
                    <Col>
                    <Button>Contact</Button>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FileInputModal;
