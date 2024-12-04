/**
 * Assume different strategies of payments
 * 1. Credit card
 * 2. Paypal
 * 3. Bitcoin
 */

class CreditCardPayment {
  process(amount) {
    console.log(`Paid ${amount} using Credit Card`)
  }
}

class PaypalPayment {
  process(amount) {
   console.log(`Paid ${amount} using Paypal`);
  }
}

class BitcoinPayment {
  process(amount) {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

class PaymentProcessor {
  constructor() {
    this.paymentStrategy = null;
  }

  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  pay(amount) {
    if (!this.paymentStrategy) {
      console.log(`Please set a payment strategy`);
      return;
    }

    this.paymentStrategy.process(amount)
  }
}

/**
 * Context
 */
const paymentProcessor = new PaymentProcessor()

// Pay with Bitcoin
paymentProcessor.setPaymentStrategy(new BitcoinPayment())
paymentProcessor.pay(300)

// Pay with Paypal
paymentProcessor.setPaymentStrategy(new PaypalPayment())
paymentProcessor.pay(100)

// Pay with Credit Card
paymentProcessor.setPaymentStrategy(new CreditCardPayment())
paymentProcessor.pay(150)
