import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


function StripeCheckoutButton({price}) {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51K1ZK6JySKvQEYVlSyBjjiMc82xX0s5UQThoyofMqHbkY2zXl5DVdjDMucXkli4FLofnd8BoErhTQZ8hl1Au24VW001mtXhT0i';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton