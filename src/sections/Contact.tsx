import { useState, type FormEvent } from 'react'
import { SITE } from '../data/site'
import Reveal from '../components/Reveal'
import Shard from '../components/Shard'
import { ArrowRight, Download, GitHub, LinkedIn, Mail } from '../components/Icons'

export default function Contact() {
  const [note, setNote] = useState('')

  /** Opens the visitor's email app with the message filled in. No backend needed. */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    const name = String(d.get('name') ?? '').trim()
    const email = String(d.get('email') ?? '').trim()
    const message = String(d.get('message') ?? '').trim()
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      setNote('Please fill in your name, a valid email address and a message.')
      return
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setNote('Opening your email app with the message ready to send.')
  }

  return (
    <section className="section on-dark contact" id="contact" aria-labelledby="ct-h">
      <Shard kind="white" depth={14} style={{ right: '2%', top: '2%', width: 56 }} />
      <Shard kind="blue" depth={28} style={{ left: '3%', bottom: '10%', width: 70 }} />
      <div className="wrap contact-grid">
        <div>
          <Reveal as="h2" id="ct-h">Let’s build something good.</Reveal>
          <Reveal as="p" className="soft" style={{ marginTop: '1.2rem' }}>
            I’m open to frontend roles, freelance projects and collaborations. Send me a message and I’ll reply as soon as I can.
          </Reveal>
          <Reveal className="contact-links">
            <a href={`mailto:${SITE.email}`}><Mail />{SITE.email}</a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer"><GitHub />GitHub</a>
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"><LinkedIn />LinkedIn</a>
            <a href={SITE.cv} download><Download />Download CV (PDF)</a>
          </Reveal>
        </div>
        <Reveal variant="right">
          <form className="cform" onSubmit={onSubmit} noValidate>
            <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" name="name" autoComplete="name" required /></div>
            <div className="field"><label htmlFor="f-mail">Email</label><input id="f-mail" name="email" type="email" autoComplete="email" required /></div>
            <div className="field"><label htmlFor="f-msg">Message</label><textarea id="f-msg" name="message" required /></div>
            <button className="btn btn-blue" type="submit">Send message <ArrowRight /></button>
            <p className="form-note soft" role="status">{note}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
