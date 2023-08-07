 <ListGroup as="ol">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
                </div>
                <div className="ms-2 ms-auto">
                  <div className="fw-bold">{item.price}</div>
                </div>
                <Form>
                <Form.Control size="sm" type="text"  htmlSize={1}/>
                </Form>
                <Button className="btn-sm" variant='secondary'>x</Button>
              </ListGroup.Item>
            </ListGroup>