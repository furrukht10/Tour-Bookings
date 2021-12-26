/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51KAiqOEIOrCrFvfStD2M94CrlbMeKxcdTmXAkUSvI19VTEKHCDvPPAt9TJdSQvjEGW7eNGNOEvGcU26Jg02Aw0J500ZAbblBNa'
);

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    console;

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
