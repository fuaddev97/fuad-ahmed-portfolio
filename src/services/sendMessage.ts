/**
 * Sends the contact form to your inbox through Web3Forms (https://web3forms.com).
 * It needs no server of your own: the access key is public by design and only lets
 * the service deliver messages to the email address you registered it with.
 */
const ENDPOINT = 'https://api.web3forms.com/submit'
const TIMEOUT_MS = 15000

export interface ContactMessage {
  name: string
  email: string
  message: string
}

export type SendResult =
  | { ok: true }
  | { ok: false; reason: 'network' | 'rejected'; detail?: string }

interface Web3FormsResponse {
  success: boolean
  message?: string
}

export async function sendMessage(accessKey: string, msg: ContactMessage): Promise<SendResult> {
  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio enquiry from ${msg.name}`,
        from_name: msg.name,
        name: msg.name,
        email: msg.email, // used as the Reply-To address, so you can answer straight from your inbox
        message: msg.message,
      }),
      signal: controller.signal,
    })
    const data = (await res.json().catch(() => null)) as Web3FormsResponse | null
    if (res.ok && data?.success) return { ok: true }
    return { ok: false, reason: 'rejected', detail: data?.message }
  } catch {
    return { ok: false, reason: 'network' }
  } finally {
    window.clearTimeout(timer)
  }
}
