interface PaymentProvider {
  validate: () => boolean;
  getPaymentCommission: () => number;
  processPayment: () => string;
  verifyPayment: () => boolean;
}

class CreditCardPaymentProvider implements PaymentProvider {
  validate() {
    // Payment is validated
    console.log('Payment Card Validated');
    return true;
  }
  getPaymentCommission() {
    // Commission is returned
    return 10;
  }
  processPayment() {
    // Payment processed
    console.log('Payment Processed');
    return 'Payment Fingerprint';
  }
  verifyPayment() {
    // No verify Payment API exist
    // Return false to just implement the Payment Provider
    return false;
  }
}

class WalletPaymentProvider implements PaymentProvider {
  // As this is not reqired in walletpayment then either we
  //need to have instance check in the client code or throw error in case client calls it by mistake

  //! Code Smell
  validate() {
    // No validate method exists
    // Just for sake of implementation return false
    return false;
  }
  getPaymentCommission() {
    // Commission is returned
    return 5;
  }
  processPayment() {
    // Payment processed
    console.log('Payment Processed');
    return 'Payment Fingerprint';
  }
  verifyPayment() {
    // Payment verification does exist on Wallet Payment Provider
    console.log('Payment Verified');
    return false;
  }
}
