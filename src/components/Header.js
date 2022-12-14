import React from 'react'
import {Link} from 'react-router-dom'
import { Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,Form} from 'react-bootstrap'
    import {FaShoppingCart} from 'react-icons/fa'
    import { CartState } from "../context/Context";
import { AiFillDelete } from 'react-icons/ai';


const Header = () => {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark">
      <Container style={{height:80}}>
          <Navbar.Brand >
            <Link to='' >Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className='search'>
          <Form.Control
          style={{width:500}}
              type="search"
              placeholder="Search a product"
              className="m-auto"
            />

          </Navbar.Text>
          <Nav>
          <Dropdown >
          <Dropdown.Toggle variant="success">
          <FaShoppingCart color="white" fontSize="25px" />
          {cart.length}
          {/* <Badge>{10}</Badge> */}

          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: 370 }}>
            {cart.length>0?(
              <>
               {cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
              </>
            ):( <span style={{ padding: 10 }}>Cart is Empty!</span>
)}
          </Dropdown.Menu>

          </Dropdown>

          </Nav>
        </Container>
    </Navbar>
  )
};

export default Header
