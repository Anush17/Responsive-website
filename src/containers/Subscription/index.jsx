import React from "react";

import SubscriptionForm from "../../components/Subscription/Form";
import TwoColumnLayout from "../../components/TwoColumnLayout";
import SubscribeImage from "../../assets/subscribe.png";

const Subscription = () => (
    <TwoColumnLayout attachment={SubscribeImage}>
        <SubscriptionForm />
    </TwoColumnLayout>
)

export default Subscription;
