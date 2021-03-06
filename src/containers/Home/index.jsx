import React from "react";
import {Container} from "react-bootstrap";

import ProductsListHeader from "../../components/Products/Header";
import Products from "../../components/Products";
import WhoWeAre from "../../components/WhoWeAre";
import Hero from "../../components/Hero";

const Home = () => (
    <>
        <Hero/>
        <section className="bg-white py-5">
            <Container>
                <ProductsListHeader title="Recently viewed & more" to="/view-all"/>
                <Products />
            </Container>
        </section>
        <WhoWeAre />
    </>
)

export default Home;
