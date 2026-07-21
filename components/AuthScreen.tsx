'use client'
import { useState } from 'react'
import { createClient } from '../lib/supabase'

export default function AuthScreen() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const supabase = createClient()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: {
        emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : 'https://75elevated.com',
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSent(true)
      setLoading(false)
    }
  }

  return (
    <div className="auth-screen">
      <div className="auth-inner">
        <div className="auth-logo-wrap">
          <div className="auth-logo-text">75 ELEVATED</div>
          <div className="auth-logo-sub">A Walk With Jesus</div>
        </div>

        {!sent ? (
          <>
            <div className="auth-title">Begin your walk.</div>
            <div className="auth-sub">Enter your email and we will send you a link to sign in. No password needed.</div>

            <form onSubmit={handleSubmit} className="auth-form">
              <input
                type="email"
                className="auth-input"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
              {error && <div className="auth-error">{error}</div>}
              <button type="submit" className="auth-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send sign-in link'}
              </button>
            </form>

            <div className="auth-footer">
              CTC Cabo — 75 Elevated
            </div>
          </>
        ) : (
          <div className="auth-sent">
            <div className="auth-sent-icon">✉</div>
            <div className="auth-title">Check your email.</div>
            <div className="auth-sub">We sent a sign-in link to <strong>{email}</strong>. Tap the link in the email to enter the app.</div>
            <button className="auth-btn-outline" onClick={() => setSent(false)}>Use a different email</button>
          </div>
        )}
      </div>

      <style>{`
        .auth-screen { min-height: 100vh; background: var(--black); display: flex; align-items: center; justify-content: center; padding: 24px; }
        .auth-inner { width: 100%; max-width: 360px; text-align: center; }
        .auth-logo-wrap { margin-bottom: 48px; }
        .auth-logo-text { font-size: 22px; font-weight: 800; color: var(--red); letter-spacing: 0.06em; margin-bottom: 4px; }
        .auth-logo-sub { font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gray); }
        .auth-title { font-size: 28px; font-weight: 300; color: var(--white); margin-bottom: 12px; }
        .auth-sub { font-size: 13px; color: var(--gray); line-height: 1.65; margin-bottom: 32px; }
        .auth-form { display: flex; flex-direction: column; gap: 12px; }
        .auth-input { width: 100%; background: var(--black-2); border: 0.5px solid var(--border); border-radius: 10px; padding: 14px 16px; font-size: 16px; color: var(--white); outline: none; }
        .auth-input:focus { border-color: var(--border-red); }
        .auth-error { font-size: 12px; color: var(--red); text-align: left; padding: 0 4px; }
        .auth-btn { width: 100%; padding: 15px; background: var(--red); color: var(--white); border: none; border-radius: 10px; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; cursor: pointer; }
        .auth-btn:disabled { opacity: 0.6; }
        .auth-btn:active { background: var(--red-dim); }
        .auth-footer { margin-top: 32px; font-size: 10px; color: var(--gray-light); letter-spacing: 0.1em; text-transform: uppercase; }
        .auth-sent { display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .auth-sent-icon { font-size: 40px; color: var(--red); margin-bottom: 8px; }
        .auth-btn-outline { padding: 12px 24px; background: none; border: 0.5px solid var(--border); border-radius: 10px; color: var(--gray); font-size: 12px; cursor: pointer; margin-top: 8px; }
      `}</style>
    </div>
  )
}
