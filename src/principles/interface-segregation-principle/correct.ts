interface PaymentProvider {
  getPaymentCommission: () => number;
  processPayment: () => string;
}

interface PaymentValidator {
  validate: () => boolean;
}

interface PaymentVerifier {
  verifyPayment: () => boolean;
}

export class CreditCardPaymentProvider2 implements PaymentProvider, PaymentValidator {
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
}

export class WalletPaymentProvider2 implements PaymentProvider, PaymentVerifier {
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
    // Payment verification
    console.log('Payment Verified');
    return false;
  }
}
