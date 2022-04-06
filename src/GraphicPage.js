import React, {useContext} from 'react';
import {Container, Row} from "react-bootstrap";
import getAPI from "./getAPI";
import {observer} from "mobx-react-lite";
import {runInAction} from "mobx";
import {CityContext} from "./index";

const GraphicPage = observer(() => {
    const {city} = useContext(CityContext)
    if (!city.name) {
        runInAction(() => {
            city.setName("Choose city from navbar")
        })
    } else {
        getAPI()
    }
    return (
        <Container id="graphicPage" className='d-flex justify-content-center mt-5 flex-column align-items-center'>
            <Row
                className="mb-5"
            >
                <h1>
                    {city.name.split(',')[0]}
                </h1>
            </Row>
        </Container>
    );
});

export default GraphicPage;