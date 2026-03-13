import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const apiKey = config.resendApiKey as string | undefined
  const recipientEmail = config.joinWhatsappRecipientEmail as string | undefined

  if (!apiKey || !recipientEmail) {
    throw createError({
      statusCode: 500,
      message: 'Email configuration is missing. Set NUXT_RESEND_API_KEY and NUXT_JOIN_WHATSAPP_RECIPIENT_EMAIL.',
    })
  }

  const body = await readBody<{ name: string; address: string; phone: string }>(event)

  if (!body?.name || !body?.address || !body?.phone) {
    throw createError({
      statusCode: 400,
      message: 'Name, address, and phone number are required.',
    })
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'Huntsman Website <onboarding@resend.dev>', // Use verified domain in production
    to: recipientEmail,
    subject: 'Join WhatsApp group request',
    text: `Name: ${body.name}\n\nAddress: ${body.address}\n\nPhone: ${body.phone}`,
  })

  if (error) {
    throw createError({
      statusCode: 500,
      message: error.message || 'Failed to send email.',
    })
  }

  return { success: true }
})
