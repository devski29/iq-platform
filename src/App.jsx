


import { useEffect, useState } from "react"
function App() {

  const questions = [
    // 1–10: easier, confidence-building
    {
      id: 1,
      type: "pattern",
      difficulty: "easy",
      question: "Which shape completes the sequence: ■, ▲, ■, ▲, ?",
      options: ["■", "▲", "●", "◆"],
      correctIndex: 0,
    },
    {
      id: 2,
      type: "number",
      difficulty: "easy",
      question: "Which number comes next: 4, 7, 10, 13, ?",
      options: ["15", "16", "17", "18"],
      correctIndex: 1,
    },
    {
      id: 3,
      type: "logic",
      difficulty: "easy",
      question: "HAND is to GLOVE as FOOT is to:",
      options: ["Sock", "Hat", "Scarf", "Glasses"],
      correctIndex: 0,
    },
    {
      id: 4,
      type: "sequence",
      difficulty: "easy",
      question: "Which letter completes the sequence: A, C, E, G, ?",
      options: ["H", "I", "J", "K"],
      correctIndex: 0,
    },
    {
      id: 5,
      type: "number",
      difficulty: "easy",
      question: "Which number is the smallest?",
      options: ["-2", "0", "3", "5"],
      correctIndex: 0,
    },
    {
      id: 6,
      type: "pattern",
      difficulty: "easy",
      question: "A pattern goes: circle, square, circle, square, circle, ?",
      options: ["Circle", "Square", "Triangle", "Diamond"],
      correctIndex: 1,
    },
    {
      id: 7,
      type: "number",
      difficulty: "easy",
      question: "Which number comes next: 1, 2, 4, 8, 16, ?",
      options: ["24", "30", "32", "36"],
      correctIndex: 2,
    },
    {
      id: 8,
      type: "logic",
      difficulty: "easy",
      question: "Which does NOT belong with the others?",
      options: ["Red", "Blue", "Green", "Circle"],
      correctIndex: 3,
    },
    {
      id: 9,
      type: "sequence",
      difficulty: "easy",
      question: "Which day comes 2 days after Friday?",
      options: ["Saturday", "Sunday", "Monday", "Tuesday"],
      correctIndex: 1,
    },
    {
      id: 10,
      type: "number",
      difficulty: "easy",
      question: "Which number comes next: 3, 6, 9, 12, ?",
      options: ["13", "14", "15", "16"],
      correctIndex: 2,
    },

    // 11–20: moderate challenge
    {
      id: 11,
      type: "sequence",
      difficulty: "medium",
      question: "Which number completes: 2, 5, 9, 14, 20, ?",
      options: ["25", "26", "27", "28"],
      correctIndex: 2,
    },
    {
      id: 12,
      type: "pattern",
      difficulty: "medium",
      question:
        "In a row of shapes: ▲ ▲ ■ ■ ▲ ▲ ■ ■ ▲ ▲ ? – which shape comes next?",
      options: ["▲", "■", "●", "◆"],
      correctIndex: 1,
    },
    {
      id: 13,
      type: "logic",
      difficulty: "medium",
      question:
        "All ZARPs are BLERPs. Some BLERPs are NERPS. Which statement must be true?",
      options: [
        "Some ZARPs are NERPS.",
        "All NERPS are ZARPs.",
        "Some BLERPs are not ZARPs.",
        "All BLERPs are ZARPs.",
      ],
      correctIndex: 2,
    },
    {
      id: 14,
      type: "spatial",
      difficulty: "medium",
      question:
        "A square is rotated 90° clockwise four times. How many different orientations does it have?",
      options: ["1", "2", "3", "4"],
      correctIndex: 0,
    },
    {
      id: 15,
      type: "number",
      difficulty: "medium",
      question: "Which number completes: 5, 9, 17, 33, ?",
      options: ["49", "51", "57", "65"],
      correctIndex: 1,
    },
    {
      id: 16,
      type: "pattern",
      difficulty: "medium",
      question:
        "A 3×3 grid has 4 black squares on the top row, 3 on the middle, 2 on the bottom. How many black squares will the next grid have if the pattern continues?",
      options: ["1", "2", "3", "4"],
      correctIndex: 0,
    },
    {
      id: 17,
      type: "sequence",
      difficulty: "medium",
      question: "Which pair continues the pattern: AB, BC, CD, DE, ?",
      options: ["DF", "EF", "FG", "GH"],
      correctIndex: 1,
    },
    {
      id: 18,
      type: "logic",
      difficulty: "medium",
      question:
        "If no NPCs are leaders and some players are leaders, which statement must be true?",
      options: [
        "Some players are NPCs.",
        "No players are NPCs.",
        "Some leaders are NPCs.",
        "All NPCs are players.",
      ],
      correctIndex: 1,
    },
    {
      id: 19,
      type: "number",
      difficulty: "medium",
      question:
        "Which number completes: 11, 14, 18, 23, 29, ? (differences: +3, +4, +5, +6, ...)",
      options: ["34", "35", "36", "37"],
      correctIndex: 2,
    },
    {
      id: 20,
      type: "pattern",
      difficulty: "medium",
      question:
        "In a sequence of arrows: →, ↑, ←, ↓, →, ↑, ←, ? – which direction comes next?",
      options: ["↓", "→", "↑", "←"],
      correctIndex: 0,
    },

    // 21–30: advanced reasoning
    {
      id: 21,
      type: "number",
      difficulty: "hard",
      question: "Which number completes: 3, 9, 27, 81, ?",
      options: ["162", "243", "324", "369"],
      correctIndex: 1,
    },
    {
      id: 22,
      type: "pattern",
      difficulty: "hard",
      question:
        "A sequence of shapes increases sides: triangle, square, pentagon, hexagon, ?",
      options: ["Heptagon", "Octagon", "Nonagon", "Decagon"],
      correctIndex: 0,
    },
    {
      id: 23,
      type: "logic",
      difficulty: "hard",
      question:
        "If every thinker is a challenger, and some challengers are not thinkers, which is true?",
      options: [
        "All challengers are thinkers.",
        "Some challengers are thinkers.",
        "No challengers are thinkers.",
        "No thinkers are challengers.",
      ],
      correctIndex: 1,
    },
    {
      id: 24,
      type: "sequence",
      difficulty: "hard",
      question:
        "Which number completes: 2, 6, 12, 20, 30, ? (differences: +4, +6, +8, +10, ...)",
      options: ["40", "42", "44", "46"],
      correctIndex: 0,
    },
    {
      id: 25,
      type: "spatial",
      difficulty: "hard",
      question:
        "A cube has all faces painted. It is cut into 27 smaller cubes (3×3×3). How many small cubes have exactly two painted faces?",
      options: ["8", "12", "18", "24"],
      correctIndex: 1,
    },
    {
      id: 26,
      type: "pattern",
      difficulty: "hard",
      question:
        "Lines increase: ||, |||, ||||, |||||, ? – how many lines are in the next step?",
      options: ["5", "6", "7", "8"],
      correctIndex: 1,
    },
    {
      id: 27,
      type: "number",
      difficulty: "hard",
      question:
        "Which number completes: 7, 14, 28, 56, ?",
      options: ["84", "98", "112", "120"],
      correctIndex: 1,
    },
    {
      id: 28,
      type: "logic",
      difficulty: "hard",
      question:
        "Three statements: (1) Exactly one of these is true. (2) Exactly two of these are true. (3) All three are false. Which statement is true?",
      options: ["Only (1)", "Only (2)", "Only (3)", "None"],
      correctIndex: 0,
    },
    {
      id: 29,
      type: "sequence",
      difficulty: "hard",
      question:
        "Which number completes: 4, 9, 19, 39, 79, ? (each term ≈ previous×2 +1)",
      options: ["159", "161", "163", "167"],
      correctIndex: 1,
    },
    {
      id: 30,
      type: "pattern",
      difficulty: "hard",
      question:
        "A row alternates thick and thin lines: |, ∥, |, ∥, |, ∥, |, ? – which comes next?",
      options: ["|", "∥", "=", "≡"],
      correctIndex: 1,
    },

    // 31–40: high challenge but still solvable
    {
      id: 31,
      type: "number",
      difficulty: "hard",
      question:
        "Which number completes: 16, 23, 31, 40, 50, ? (differences: +7, +8, +9, +10, ...)",
      options: ["60", "61", "62", "63"],
      correctIndex: 2,
    },
    {
      id: 32,
      type: "sequence",
      difficulty: "hard",
      question:
        "Which pair of letters completes: AZ, BY, CX, DW, ?",
      options: ["EV", "EU", "FV", "FU"],
      correctIndex: 0,
    },
    {
      id: 33,
      type: "logic",
      difficulty: "hard",
      question:
        "NPCs always follow the script. Thinkers sometimes break the script. Some people in the room are thinkers. Which must be true?",
      options: [
        "Some people in the room are NPCs.",
        "All people in the room are thinkers.",
        "No one in the room is an NPC.",
        "Some people in the room are not thinkers.",
      ],
      correctIndex: 3,
    },
    {
      id: 34,
      type: "pattern",
      difficulty: "hard",
      question:
        "In a checker pattern, each row starts with the opposite color from the one above. If the first row starts with black, what does the 5th row start with?",
      options: ["Black", "White", "Gray", "It alternates within the row only"],
      correctIndex: 0,
    },
    {
      id: 35,
      type: "number",
      difficulty: "hard",
      question:
        "Which number completes: 2, 3, 5, 9, 17, 33, ? (each term ≈ previous×2 -1)",
      options: ["63", "65", "67", "69"],
      correctIndex: 1,
    },
    {
      id: 36,
      type: "sequence",
      difficulty: "hard",
      question:
        "Which number best completes: 4, 7, 13, 25, 49, ? (each term ≈ previous×2 -1)",
      options: ["95", "97", "99", "101"],
      correctIndex: 1,
    },
    {
      id: 37,
      type: "logic",
      difficulty: "hard",
      question:
        "If every solver passes Level 10 and you did not pass Level 10, which is true?",
      options: [
        "You are definitely a solver.",
        "You might be a solver.",
        "You are not a solver.",
        "Everyone who failed is a solver.",
      ],
      correctIndex: 2,
    },
    {
      id: 38,
      type: "pattern",
      difficulty: "hard",
      question:
        "Arrows rotate 90° each step: →, ↑, ←, ↓, →, ? – which arrow comes next?",
      options: ["↑", "←", "↓", "→"],
      correctIndex: 0,
    },
    {
      id: 39,
      type: "number",
      difficulty: "hard",
      question:
        "Which number completes: 1, 4, 10, 19, 31, ? (differences: +3, +6, +9, +12, ...)",
      options: ["43", "44", "45", "46"],
      correctIndex: 0,
    },
    {
      id: 40,
      type: "logic",
      difficulty: "hard",
      question:
        "Most NPCs guess randomly. Real thinkers look for structure. If you answered every question so far by guessing, which is most likely true?",
      options: [
        "Your score will be consistently high.",
        "Your score will be entirely predictable.",
        "Your score will be close to random chance.",
        "You are definitely not an NPC.",
      ],
      correctIndex: 2,
    },
  ]

  const [started, setStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [timeLeft, setTimeLeft] = useState(900)
  const [shareOpen, setShareOpen] = useState(false)

  const currentQuestion = questions[questionIndex]

  useEffect(() => {

    if (!started || finished || analyzing) return

    const timer = setInterval(() => {

      setTimeLeft(prev => {

        if (prev <= 1) {

          clearInterval(timer)

          setAnalyzing(true)

          setTimeout(() => {
            setFinished(true)
            setAnalyzing(false)
          }, 4000)

          return 0
        }

        return prev - 1

      })

    }, 1000)

    return () => clearInterval(timer)

  }, [started, finished, analyzing])

  const formatTime = () => {

    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const nextQuestion = () => {

    if (questionIndex >= questions.length - 1) {

      setAnalyzing(true)

      setTimeout(() => {
        setFinished(true)
        setAnalyzing(false)
      }, 4000)

      return
    }

    setQuestionIndex(prev => prev + 1)
  }

  const handleAskFriend = () => {
    const baseUrl = window.location.origin + window.location.pathname
    const shareUrl = baseUrl + '?q=' + currentQuestion.id
    const shareText = "I'm stuck on this NPC Detector Challenge question 💀 Think you can solve it?"
    if (navigator.share) {
      navigator
        .share({
          title: 'NPC Detector Challenge',
          text: shareText,
          url: shareUrl,
        })
        .catch(() => {})
    } else {
      setShareOpen(true)
    }
  }

  // Answer visuals are now fully driven by question.options.
  // Each option is rendered as text inside a premium glassmorphism card below.

  if (analyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9FAFF] via-[#ECF4FF] to-[#E5F4FF] text-slate-900 flex items-center justify-center overflow-hidden relative">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl floating-glow"></div>

        <div className="relative z-10 text-center max-w-2xl px-6">

          <div className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-400/20 border-t-cyan-500 animate-spin shadow-[0_0_40px_rgba(56,189,248,0.45)] bg-white/40 backdrop-blur-xl"></div>

          <div className="mt-8 text-cyan-600 uppercase tracking-[0.4em] text-xs">
            NPC Detector Analysis Engine
          </div>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
            Scanning Cognitive Patterns
            <span className="text-cyan-600"> In The Simulation</span>
          </h1>

        </div>

      </div>
    )
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9FAFF] via-[#ECF4FF] to-[#E5F4FF] text-slate-900 flex items-center justify-center px-6 overflow-hidden relative">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl floating-glow"></div>

        <div className="relative z-10 max-w-2xl w-full text-center">

          <div className="text-cyan-600 text-xs tracking-[0.3em] uppercase mb-5">
            Results Ready
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
            Your NPC Score
            <span className="text-cyan-600"> Has Been Calculated</span>
          </h1>

          <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">

            <div className="text-slate-500 mb-2 text-sm font-medium">
              NPC Score Rating
            </div>

            <div className="mt-1 text-slate-400 text-sm">
              Detailed Simulation Escape analysis locked
            </div>

            <div className="text-7xl font-semibold blur-sm select-none mt-6 text-slate-900">
              127
            </div>

            <div className="mt-4 text-amber-500 font-semibold animate-pulse">
              Premium cognitive profile hidden
            </div>

            <a
              href="https://buy.stripe.com/fZu00iejd55hc7c3yobAs00"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xl font-semibold shadow-[0_20px_55px_rgba(56,189,248,0.6)]"
            >
              Unlock Full NPC Report • £1.99
            </a>

          </div>

        </div>

        {shareOpen && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.3)] max-w-sm w-full mx-4 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Share this question
              </h2>
              <p className="text-sm text-slate-500">
                I&apos;m stuck on this NPC Detector Challenge question 💀 Think you can solve it?
              </p>
              <button
                onClick={() => {
                  const baseUrl = window.location.origin + window.location.pathname
                  const shareUrl = baseUrl + '?q=' + currentQuestion.id
                  const shareText = "I'm stuck on this NPC Detector Challenge question 💀 Think you can solve it?"
                  if (navigator.share) {
                    navigator
                      .share({
                        title: 'NPC Detector Challenge',
                        text: shareText,
                        url: shareUrl,
                      })
                      .catch(() => {})
                  } else if (navigator.clipboard) {
                    navigator.clipboard.writeText(shareUrl)
                  }
                  setShareOpen(false)
                }}
                className="w-full rounded-2xl bg-slate-900 text-white py-3 text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Copy link & open share apps
              </button>
              <p className="text-[11px] text-slate-400">
                WhatsApp · Instagram · Snapchat · Messenger · Telegram · Discord · Twitter/X · SMS
              </p>
              <button
                onClick={() => setShareOpen(false)}
                className="w-full text-xs text-slate-400 hover:text-slate-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    )
  }

  if (started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9FAFF] via-[#ECF4FF] to-[#E5F4FF] text-slate-900 flex flex-col overflow-hidden relative">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl floating-glow"></div>


        <div className="relative z-10 w-full border-b border-white/20 bg-white/60 backdrop-blur-xl p-4 flex items-center justify-between shadow-[0_10px_35px_rgba(15,23,42,0.12)]">

          <div className="text-slate-500">
            Question {questionIndex + 1} / {questions.length}
          </div>

          <div className="text-cyan-600 font-semibold">
            {formatTime()}
          </div>

        </div>

        <div className="w-full h-1 bg-slate-200 relative z-10">

          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 rounded-full"
            style={{
              width: `${((questionIndex + 1) / questions.length) * 100}%`
            }}
          ></div>

        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">

          <div className="max-w-3xl w-full rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)] px-6 py-10 relative">

            <div className="mb-6 text-slate-500 uppercase tracking-[0.3em] text-xs">
              NPC Detector Assessment
            </div>

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

              {currentQuestion.options.map((option, index) => (

                <button
                  key={index}
                  onClick={nextQuestion}
                  className="group rounded-3xl bg-white/80 border border-slate-200 hover:border-cyan-500 hover:bg-cyan-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden relative shadow-[0_18px_45px_rgba(15,23,42,0.08)] min-h-[72px] flex items-center justify-center px-4"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-cyan-400/15 via-blue-500/10 to-transparent"></div>

                  <div className="relative z-10 flex items-center justify-center w-full h-full">
                    <span className="text-base md:text-lg font-medium text-slate-900 leading-snug text-center">
                      {option}
                    </span>
                  </div>

                </button>

              ))}

            </div>

            <div className="mt-8 flex flex-col items-center gap-2">
              <button
                onClick={handleAskFriend}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 border border-cyan-400/60 text-slate-900 hover:bg-cyan-50 hover:border-cyan-500 shadow-[0_14px_35px_rgba(15,23,42,0.12)] hover:shadow-[0_18px_45px_rgba(56,189,248,0.35)] transition-all duration-300 hover:scale-[1.03] active:scale-95 overflow-hidden"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-400/15 via-blue-500/10 to-transparent transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/60">
                    <span className="block h-2.5 w-2.5 border-[2px] border-cyan-600 border-t-transparent border-l-transparent rounded-[4px] rotate-45 translate-x-[1px] -translate-y-[1px]" />
                  </span>
                  <span className="text-sm font-semibold tracking-wide">
                    Ask A Friend
                  </span>
                </span>
              </button>
              <p className="text-xs text-slate-400">
                Even geniuses ask for backup.
              </p>
            </div>

          </div>

        </div>

        {shareOpen && (
          <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.3)] max-w-sm w-full mx-4 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Share this question
              </h2>
              <p className="text-sm text-slate-500">
                I&apos;m stuck on this NPC Detector Challenge question 💀 Think you can solve it?
              </p>
              <button
                onClick={() => {
                  const baseUrl = window.location.origin + window.location.pathname
                  const shareUrl = baseUrl + '?q=' + currentQuestion.id
                  const shareText = "I'm stuck on this NPC Detector Challenge question 💀 Think you can solve it?"
                  if (navigator.share) {
                    navigator
                      .share({
                        title: 'NPC Detector Challenge',
                        text: shareText,
                        url: shareUrl,
                      })
                      .catch(() => {})
                  } else if (navigator.clipboard) {
                    navigator.clipboard.writeText(shareUrl)
                  }
                  setShareOpen(false)
                }}
                className="w-full rounded-2xl bg-slate-900 text-white py-3 text-sm font-semibold hover:bg-slate-800 transition-colors"
              >
                Copy link & open share apps
              </button>
              <p className="text-[11px] text-slate-400">
                WhatsApp · Instagram · Snapchat · Messenger · Telegram · Discord · Twitter/X · SMS
              </p>
              <button
                onClick={() => setShareOpen(false)}
                className="w-full text-xs text-slate-400 hover:text-slate-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9FAFF] via-[#ECF4FF] to-[#E5F4FF] text-slate-900 overflow-hidden relative">

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl floating-glow"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">


        <div className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/40 bg-white/70 backdrop-blur-xl text-sm text-cyan-700 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <span>NPC Detector</span>

        </div>


        <h1 className="text-5xl md:text-7xl font-semibold leading-tight max-w-5xl tracking-tight text-slate-900">
          Think You&apos;re Different?
          <span className="text-cyan-600"> Prove It.</span>
        </h1>


        <p className="mt-6 text-slate-500 max-w-2xl text-lg">
          The internet&apos;s most brutal logic & pattern recognition challenge.
          Most users fail before Question 12.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500">
          <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm border border-slate-200">127,000+ Challenges Attempted</span>
          <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm border border-slate-200">Only 6% Reach The Final Questions</span>
          <span className="rounded-full bg-white/80 px-4 py-2 shadow-sm border border-slate-200">Average Completion Time: 11 Minutes</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg shadow-[0_18px_45px_rgba(56,189,248,0.55)] w-full sm:w-auto"
          >
            Start The Challenge
          </button>
          <button
            className="px-8 py-4 rounded-2xl bg-white/80 border border-slate-200 text-slate-700 hover:border-cyan-500 hover:bg-cyan-50 hover:scale-[1.02] active:scale-95 transition-all duration-300 font-semibold text-lg shadow-[0_10px_30px_rgba(15,23,42,0.08)] w-full sm:w-auto"
          >
            View Top Scores
          </button>
        </div>

        </div>

        {shareOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.3)] max-w-sm w-full mx-4 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-slate-900">
              Share this question
            </h2>
            <p className="text-sm text-slate-500">
              I&apos;m stuck on this NPC Detector Challenge question 💀 Think you can solve it?
            </p>
            <button
              onClick={() => {
                const baseUrl = window.location.origin + window.location.pathname
                const shareUrl = baseUrl + '?q=' + currentQuestion.id
                const shareText = "I'm stuck on this NPC Detector Challenge question 💀 Think you can solve it?"
                if (navigator.share) {
                  navigator
                    .share({
                      title: 'NPC Detector Challenge',
                      text: shareText,
                      url: shareUrl,
                    })
                    .catch(() => {})
                } else if (navigator.clipboard) {
                  navigator.clipboard.writeText(shareUrl)
                }
                setShareOpen(false)
              }}
              className="w-full rounded-2xl bg-slate-900 text-white py-3 text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              Copy link & open share apps
            </button>
            <p className="text-[11px] text-slate-400">
              WhatsApp · Instagram · Snapchat · Messenger · Telegram · Discord · Twitter/X · SMS
            </p>
            <button
              onClick={() => setShareOpen(false)}
              className="w-full text-xs text-slate-400 hover:text-slate-500"
            >
              Cancel
            </button>
          </div>
        </div>
        )}

      </div>
    )
  }


export default App