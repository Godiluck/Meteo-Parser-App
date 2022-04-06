import React, {useContext} from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {CityContext} from "./index";

const Header = () => {
    const {city} = useContext(CityContext)
    return (
        <Navbar
        className='d-flex justify-content-between p-4'
        bg={"dark"}
        variant={"dark"}
        >
            <Container>
                <Navbar.Brand
                style={{cursor: "default"}}
            >
                Meteo Parser App
            </Navbar.Brand>
                <Navbar.Text>
                    Cities:
                </Navbar.Text>
                <Button
                    className="ms-3"
                    variant={"outline-light"}
                    onClick={() => city.setName('Moscow,RU')}
                >
                    Moscow
                </Button>
                <Button
                    className="ms-3"
                    variant={"outline-light"}
                    onClick={() => city.setName('Saint Petersburg,RU')}
                >
                    Petersburg
                </Button>
                <Button
                    className="ms-3"
                    variant={"outline-light"}
                    onClick={() => city.setName('Rostov-on-Don,RU')}
                >
                    Rostov-On-Don
                </Button>
            </Container>
        </Navbar>
    );
};

export default Header