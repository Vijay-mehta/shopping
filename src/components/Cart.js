import React,{useEffect,useState} from 'react'
import { CartState } from '../context/Context'
import {ListGroup,Button,Col,Row, Form,Image} from 'react-bootstrap'
import Rating from "./Rating";
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  const {state:{cart},
dispatch,
}=CartState();

const [total, setTotal] = useState();

useEffect(() => {
  setTotal(
    cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qty, 0 )
  );
}, [cart]);

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((pord)=>(
                   <ListGroup.Item key={pord.id}>
              <Row>
                <Col md={2}>
                  <Image src={pord.image} alt={pord.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{pord.name}</span>
                </Col>
                <Col md={2}>₹ {pord.price}</Col>
                <Col md={2}>
                  <Rating rating={pord.ratings} />
                </Col>
                <Col md={2}>
                <Form.Control
                    as="select"
                    value={pord.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: pord.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(pord.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                </Col>

                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: pord,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
            </Row>
            </ListGroup.Item >
            
          ))}
          
        </ListGroup>
        </div>
        <div className='filters summary'>
          <div className='title'>Subtotal ({cart.length}) items</div>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>

        </div>
    </div>
  )
}

export default Cart
