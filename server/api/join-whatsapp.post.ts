import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const smtpUser = config.smtpUser as string | undefined
  const smtpPassword = config.smtpPassword as string | undefined
  const recipientEmail = config.joinWhatsappRecipientEmail as string | undefined

  if (!smtpUser || !smtpPassword || !recipientEmail) {
    throw createError({
      statusCode: 500,
      message:
        'Email configuration is missing. Set NUXT_SMTP_USER, NUXT_SMTP_PASSWORD, and NUXT_JOIN_WHATSAPP_RECIPIENT_EMAIL.',
    })
  }

  const body = await readBody<{ name: string; address: string; phone: string }>(event)

  if (!body?.name || !body?.address || !body?.phone) {
    throw createError({
      statusCode: 400,
      message: 'Name, address, and phone number are required.',
    })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })

  await transporter.sendMail({
    from: `"Huntsman Website" <${smtpUser}>`,
    to: recipientEmail,
    subject: 'Join WhatsApp group request',
    text: `Name: ${body.name}\n\nAddress: ${body.address}\n\nPhone: ${body.phone}`,
  })

  return { success: true }
})
