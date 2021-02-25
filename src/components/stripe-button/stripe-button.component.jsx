import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IOfuKJGWkQgNKdTtH7II6Vxq8BzCi5bG1Uqj2OBhjo90nQJRhlENWaURSLR71atsKayFpKRd7AQReTRLcgB9vfx00h1Vp0MEJ';


    const onToken = (token) => {
        console.log(token);

        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price} `}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;