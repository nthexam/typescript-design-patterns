export class EmailService {
  public sendEmail(email: string, message: string): void {
    console.log(`Email Sent: ${message} to ${email}`);
  }
}

export class SMSService {
  public sendSms(phone: number, message: string): void {
    console.log(`Message ${message} sent to ${phone}`);
  }
}

class NotificationService {
  private _emailService: EmailService;
  private _smsService: SMSService;

  constructor() {
    this._emailService = new EmailService();
    this._smsService = new SMSService();
  }
  public sendNotification(
    email: string,
    message: string,
    phone: number,
    smsMessage: string
  ) {
    this._emailService.sendEmail(email, message);
    if (phone && smsMessage) {
      this._smsService.sendSms(phone, smsMessage);
    }
  }
}

const main = () => {
  const orderNotificationService = new NotificationService();
  orderNotificationService.sendNotification(
    'hello@example.com',
    'Generic Notification',
    9876543210,
    'SMS Notification'
  );
};

main();
