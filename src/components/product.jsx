import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { data } from '../data';

export function AddtoCard(){
    const[card, setCard]=useState(data)
    const[item,setItem]=useState(0);


    return(
      <div className='nav-bar'>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.4">
                All Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Popular Items</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">New Arrivels</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              <Button><span> card {item}</span></Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <div className='apple'>
          <div className='header'>
            <h1> Apple Store</h1> 
            <p>With this shop hompeage template</p>
          </div>
        <div className='product-data'>
        {card.map((prod, idx)=>(<CardDetails
        key={idx}
        prodPrice={prod.prodPrice}
        prodImage={prod.prodImage}
        prodRating={prod.prodRating}
        prodName={prod.prodName}
        idx={idx}
        item={item}
        setItem={setItem}
        setCard={setCard}
        />
        
             ))}
 
        </div>
        </div>
      </div>

    )
  }


function CardDetails({setCard,setItem,item,prodImage,prodPrice,prodRating,prodName,idx}){
 let count =0;
const[showBtn,setshowBtn]=useState(true)

const handleCardAdd=(idx)=>{
     setshowBtn(!showBtn)
     setItem(item+1)
}

const handleCardRemove=(idx)=>{
  setshowBtn(!showBtn)
  setItem(item-1)
}

    return(
    
        <Card  style={{ width: '18rem', padding:"10px"}}>
        <Card.Img variant="top" src={prodImage}/>
        <Card.Body>
          <Card.Title>{prodName}</Card.Title>
          <p className='price-cart'>RS. {prodPrice}</p>
          <p className='rating-data'>{prodRating}❤️</p>
         </Card.Body>
        <div className='btn-area'>
          {showBtn? <Button onClick={()=>handleCardAdd(idx)} variant="primary">ADD</Button>:
          <Button onClick={()=>handleCardRemove(idx)} variant="secondary">REMOVE</Button>
          }
        </div>
      </Card>

    )
  }


