import React, {useContext} from 'react';
import {Button, Container} from "react-bootstrap";
import {CityContext} from "./index";
import {observer} from "mobx-react-lite";

const GraphicTarget = observer(() => {
    const {city} = useContext(CityContext)

    if (city.maxTemp.length === 0) {
        return (
            <Container className="d-none">None</Container>
        )
    }

    return (
        <Container
            className="d-flex mt-5 mb-5 justify-content-between"
        >
            <Button
            variant={"outline-dark"}
            onClick={() => city.setTarget(null)}
            >
                Overall plan
            </Button>

            <Button
            variant={"outline-dark"}
            onClick={() => city.setTarget('maxTemp')}
            >
                Maximum temp ℃
            </Button>

            <Button
            variant={"outline-dark"}
            onClick={() => city.setTarget('minTemp')}
            >
                Minimum temp ℃
            </Button>

            <Button
            variant={"outline-dark"}
            onClick={() => city.setTarget('humidity')}
            >
                Humidity
            </Button>

            <Button
            variant={"outline-dark"}
            onClick={() => city.setTarget('wind')}
            >
                Maximum wind km/h
            </Button>
        </Container>
    );
});

export default GraphicTarget;