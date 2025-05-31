export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'pro1.mail.ovh.net'),
        port: env('SMTP_PORT', 587),
        secure: false,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
        tls: {
          rejectUnauthorized: false
        }
      },
      settings: {
        defaultFrom: env('SMTP_FROM', 'contact@manofstyle.fr'),
        defaultReplyTo: env('SMTP_REPLY_TO', 'contact@manofstyle.fr'),
      },
    },
  },
});