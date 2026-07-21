'use client'
interface Props {
  onBegin: () => void
  onShowNourish: () => void
  hasStarted: boolean
}

const COMMITMENTS = [
  { num: 1, title: 'Morning prayer', desc: 'You do not get to give God your leftovers. He gets the first hour, not the last minute.' },
  { num: 2, title: '20 minutes of Scripture', desc: 'The Word of God is not optional reading. It is the only voice that speaks truth into every lie the day will tell you.' },
  { num: 3, title: '45 minute workout', desc: 'Your body is not yours. It is the temple of the Holy Spirit. Train it like you believe that.' },
  { num: 4, title: 'Nourish Well', desc: 'Every meal is an act of stewardship. How you feed the body God entrusted to you is an act of worship.', hasGuide: true },
  { num: 5, title: 'Daily fast', desc: 'Fasting is how you silence the noise of the world long enough to hear the voice of God.' },
  { num: 6, title: '1 gallon of water', desc: 'Discipline in the small things is discipline in all things.' },
  { num: 7, title: 'Evening prayer', desc: 'End where you began. Give the day back to God. Every victory, every failure, every question.' },
  { num: 8, title: 'Daily reflection', desc: 'You cannot grow what you refuse to examine.' },
]

const WEEKLY = [
  { title: 'Sabbath hour', desc: 'Rest is not weakness. It is obedience.' },
  { title: 'Scripture memory', desc: 'When the Word lives in you, the enemy cannot take it from you.' },
  { title: 'Act of service', desc: 'Faith without works is dead. Go prove yours alive.' },
]

export default function StandardScreen({ onBegin, onShowNourish, hasStarted }: Props) {
  return (
    <div className="standard-screen" id="standard-screen">
      <div className="standard-inner">
        <img src="/logo.png" alt="75 Elevated" className="standard-logo" />

        <div className="standard-declaration">
          This is a declaration that Jesus Christ is worth every sacrifice your flesh resists.
        </div>

        <div className="standard-intro">
          Most people give their best to everything except God. Their best hours go to work. Their best energy goes to ambition. Their best discipline goes to the gym, the diet, the hustle. And then, somewhere in the margin of whatever is left, they squeeze in a quiet time. Maybe. If there is time. If they are not too tired. If life does not get in the way.
        </div>
        <div className="standard-intro">
          75 Elevated is a 75-day challenge built on one conviction: Jesus deserves your best. Not what is convenient. Not what is comfortable. Your best. Every day.
        </div>

        <div className="standard-section-title">The Purpose</div>
        <div className="standard-intro">
          This challenge exists for one reason: to become a disciple who makes disciples. Not just someone who attends church. Not just someone who believes the right things. A disciple. Someone whose life has been so shaped by the presence of Jesus that other people want what you have.
        </div>
        <div className="standard-intro">
          The next 75 days are your training ground. One day. One commitment. One walk.
        </div>

        <div className="standard-section-title">Daily Commitments</div>
        {COMMITMENTS.map(c => (
          <div className="standard-item" key={c.num}>
            <div className="standard-num">{c.num}</div>
            <div>
              <div className="standard-item-title">{c.title}</div>
              <div className="standard-item-desc">{c.desc}</div>
              {c.hasGuide && (
                <button type="button" className="nutrition-guide-btn" onClick={onShowNourish}>
                  The Nourish Well Guide →
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="standard-section-title">Weekly Practices</div>
        {WEEKLY.map(w => (
          <div className="standard-item" key={w.title}>
            <div className="standard-num" style={{ background: 'none', border: '0.5px solid var(--border-red)', color: 'var(--red)' }}>+</div>
            <div>
              <div className="standard-item-title">{w.title}</div>
              <div className="standard-item-desc">{w.desc}</div>
            </div>
          </div>
        ))}

        <button className="standard-begin" onClick={onBegin}>
          {hasStarted ? 'Return to Your Walk' : 'Begin Your Journey'}
        </button>
        <button className="standard-revisit" onClick={onBegin}>
          I have already read this
        </button>
      </div>
    </div>
  )
}
