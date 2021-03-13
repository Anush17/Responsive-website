import React from "react";

import SubscriptionForm from "../../components/Subscription/Form";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import SubscribeImage from "../../assets/subscribe.png";
import SubHeader from "../../components/SubHeader";

const Subscription = () => (
    <>
        <SubHeader/>
        <TwoColumnLayout attachment={SubscribeImage}>
            <h2 className="two-column-layout-content-title">Subscribe to our newsletter</h2>
            <SubscriptionForm/>
        </TwoColumnLayout>
    </>
)

export default Subscription;
