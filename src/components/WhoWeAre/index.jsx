import React from "react";
import {map} from "lodash-es";
import {Container} from "react-bootstrap";

import HowItWorksImage from "../../assets/how-it-works.png";
import ReversedItemsLayout from "../ReversedItemsLayout";
import WhoWeAreImage from "../../assets/who-we-are.png";
import "./index.scss";

const WhoWeAre = () => {
    const data = [
        {
            number: "01",
            isReversed: false,
            title: "Who we are?",
            attachment: WhoWeAreImage,
            items: [
                {
                    title: "StrongPointer",
                    desc: "is a free online magazine featuring discount links. You can use our links to save money on buying your favorite software, online services and more."
                },
                {
                    title: "Our mission",
                    desc: "is simple. We provide a trusted platform to the end-users with verified and clean content while earning a small commission for each sale."
                },
                {
                    title: "Our links",
                    desc: "are 100% verified and fresh, published by our content managers. We do not publish broken or misleading links."
                }
            ]
        },
        {
            number: "02",
            isReversed: true,
            title: "How it works",
            attachment: HowItWorksImage,
            items: [
                {
                    title: "Very simple!",
                    desc: "Find the product or a service you want to purchase online, by browsing the product page on the website."
                },
                {
                    title: "Navigate",
                    desc: "by the link we provide and you’ll end up in the checkout or a pricing page of that particular software or online service."
                },
                {
                    title: "Finalize",
                    desc: "your checkout and enjoy the discount!"
                }
            ]
        }
    ]

    return (
        <div className="about py-5">
            {map(data, (item, index) => (
                <Container key={index} className={`${item.isReversed ? 'reversed' : 'none-reversed'}`}>
                    <ReversedItemsLayout {...item}/>
                    <div className="stroke-text">{item.number}</div>
                </Container>
            ))}
        </div>
    )
}

export default WhoWeAre;
