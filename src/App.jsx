


import { useEffect, useState } from "react"
function App() {

  const questions = [
    // Cycle 1
    {
      id: 1,
      type: "pattern",
      difficulty: "easy",
      question: "Which shape completes the sequence: ■, □, ■, □, ?"
    },
    {
      id: 2,
      type: "number",
      difficulty: "easy",
      question: "Which number logically comes next in the sequence: 3, 6, 12, 24, ?"
    },
    {
      id: 3,
      type: "logic",
      difficulty: "easy",
      question: "Which option best completes the analogy: HAND is to GLOVE as FOOT is to ?"
    },
    {
      id: 4,
      type: "spatial",
      difficulty: "easy",
      question: "Which object matches the rotated figure when turned 90° clockwise?"
    },
    {
      id: 5,
      type: "memory",
      difficulty: "easy",
      question: "Select the pattern that exactly matches the one you saw a moment ago."
    },

    // Cycle 2
    {
      id: 6,
      type: "pattern",
      difficulty: "easy",
      question: "In a 3×3 grid of shapes, one tile is missing. Which shape logically fills the empty position?"
    },
    {
      id: 7,
      type: "number",
      difficulty: "easy",
      question: "What number comes next: 2, 5, 11, 23, 47, ?"
    },
    {
      id: 8,
      type: "logic",
      difficulty: "easy",
      question: "Four people sit at a round table. Alex sits opposite Ben. Chris sits to the left of Alex. Who sits opposite Chris?"
    },
    {
      id: 9,
      type: "spatial",
      difficulty: "easy",
      question: "A cube is painted on all faces and then cut into 27 smaller cubes. How many small cubes have exactly two painted faces?"
    },
    {
      id: 10,
      type: "memory",
      difficulty: "easy",
      question: "You briefly saw a 3×3 light grid. Which option shows the identical lights on/off pattern?"
    },

    // Cycle 3
    {
      id: 11,
      type: "pattern",
      difficulty: "medium",
      question: "Lines in a sequence grow: |, ||, |||, ||||, ?. Which figure comes next?"
    },
    {
      id: 12,
      type: "number",
      difficulty: "medium",
      question: "Which number completes the sequence: 9, 16, 25, 36, ?"
    },
    {
      id: 13,
      type: "logic",
      difficulty: "medium",
      question: "If all ZARPs are BLERPs and some BLERPs are NERPS, which statement must be true?"
    },
    {
      id: 14,
      type: "spatial",
      difficulty: "medium",
      question: "Which unfolded net can be folded to create the same cube shown?"
    },
    {
      id: 15,
      type: "memory",
      difficulty: "medium",
      question: "You saw a sequence of 5 symbols. Which option presents them in the exact same order?"
    },

    // Cycle 4
    {
      id: 16,
      type: "pattern",
      difficulty: "medium",
      question: "Shapes alternate in both color and orientation. Which tile should appear next in the row?"
    },
    {
      id: 17,
      type: "number",
      difficulty: "medium",
      question: "What is the missing number: 4, 9, 19, 39, 79, ?"
    },
    {
      id: 18,
      type: "logic",
      difficulty: "medium",
      question: "Three statements are given; only one is true. Which option identifies the true statement consistently?"
    },
    {
      id: 19,
      type: "spatial",
      difficulty: "medium",
      question: "Which figure shows the same shape mirrored across a vertical axis?"
    },
    {
      id: 20,
      type: "memory",
      difficulty: "medium",
      question: "A 2×4 grid flashed briefly. Which answer choice keeps the same cells filled?"
    },

    // Cycle 5
    {
      id: 21,
      type: "pattern",
      difficulty: "medium",
      question: "In a matrix of circles and triangles, every row follows a rule. Which symbol completes the last row?"
    },
    {
      id: 22,
      type: "number",
      difficulty: "medium",
      question: "Complete the series: 1, 1, 2, 3, 5, 8, ?"
    },
    {
      id: 23,
      type: "logic",
      difficulty: "medium",
      question: "If yesterday was two days after Monday, what day is today?"
    },
    {
      id: 24,
      type: "spatial",
      difficulty: "medium",
      question: "Which option shows the same 3D object viewed from above?"
    },
    {
      id: 25,
      type: "memory",
      difficulty: "medium",
      question: "You saw a pattern of three colored squares. Which option repeats the colors in the same positions?"
    },

    // Cycle 6
    {
      id: 26,
      type: "pattern",
      difficulty: "hard",
      question: "A pattern alternates thick and thin lines while increasing in count. Which panel comes next?"
    },
    {
      id: 27,
      type: "number",
      difficulty: "hard",
      question: "What is the next number: 10, 13, 18, 25, 34, ?"
    },
    {
      id: 28,
      type: "logic",
      difficulty: "hard",
      question: "Complete the analogy: NIGHT is to DARK as DAY is to ?"
    },
    {
      id: 29,
      type: "spatial",
      difficulty: "hard",
      question: "Which rotation of the L-shaped figure matches the target orientation exactly?"
    },
    {
      id: 30,
      type: "memory",
      difficulty: "hard",
      question: "You saw a 4-digit code flash briefly. Which option shows the exact same code?"
    },

    // Cycle 7
    {
      id: 31,
      type: "pattern",
      difficulty: "hard",
      question: "Tiles alternate between black and white diagonals. Which tile continues the checker pattern correctly?"
    },
    {
      id: 32,
      type: "number",
      difficulty: "hard",
      question: "Which number best completes: 5, 10, 20, 40, ?"
    },
    {
      id: 33,
      type: "logic",
      difficulty: "hard",
      question: "Three shapes follow a rule of increasing sides (triangle, square, pentagon...). Which shape comes next?"
    },
    {
      id: 34,
      type: "spatial",
      difficulty: "hard",
      question: "If a shape is rotated 180° and then mirrored horizontally, which option matches the final result?"
    },
    {
      id: 35,
      type: "memory",
      difficulty: "hard",
      question: "A pattern of arrows (↑, ↓, ←, →) was shown. Which option repeats them in the same order?"
    }
  ]

  const [started, setStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [timeLeft, setTimeLeft] = useState(900)

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

  const renderAnswer = () => {

    if (currentQuestion.type === "number") {
      return (
        <div className="text-5xl font-black text-blue-400">
          24
        </div>
      )
    }

    if (currentQuestion.type === "logic") {
      return (
        <div className="flex flex-col items-center gap-2">

          <div className="w-12 h-12 rounded-full bg-blue-400"></div>

          <div className="w-20 h-2 bg-white/30 rounded-full"></div>

          <div className="w-12 h-12 rotate-45 bg-white/20"></div>

        </div>
      )
    }

    if (currentQuestion.type === "spatial") {
      return (
        <div className="w-20 h-20 border-4 border-blue-400 rotate-45 rounded-2xl"></div>
      )
    }

    if (currentQuestion.type === "memory") {
      return (
        <div className="grid grid-cols-3 gap-2">

          <div className="w-5 h-5 bg-blue-400 rounded"></div>
          <div className="w-5 h-5 bg-white/20 rounded"></div>
          <div className="w-5 h-5 bg-blue-400 rounded"></div>

          <div className="w-5 h-5 bg-white/20 rounded"></div>
          <div className="w-5 h-5 bg-blue-400 rounded"></div>
          <div className="w-5 h-5 bg-white/20 rounded"></div>

          <div className="w-5 h-5 bg-blue-400 rounded"></div>
          <div className="w-5 h-5 bg-white/20 rounded"></div>
          <div className="w-5 h-5 bg-blue-400 rounded"></div>

        </div>
      )
    }

    return (
      <div className="grid grid-cols-2 gap-2">

        <div className="w-6 h-6 rounded bg-blue-400"></div>
        <div className="w-6 h-6 rounded border border-white/30"></div>
        <div className="w-6 h-6 rounded border border-white/30"></div>
        <div className="w-6 h-6 rounded bg-blue-400"></div>

      </div>
    )
  }

  if (analyzing) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9FAFF] via-[#ECF4FF] to-[#E5F4FF] text-slate-900 flex items-center justify-center overflow-hidden relative">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl floating-glow"></div>

        <div className="relative z-10 text-center max-w-2xl px-6">

          <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin"></div>

          <div className="mt-8 text-cyan-600 uppercase tracking-[0.4em] text-xs">
            NPC Detector Analysis Engine
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Analyzing Your
            <span className="text-blue-400"> Cognitive Profile</span>
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

          <div className="text-blue-400 text-sm tracking-[0.3em] uppercase mb-6">
            Results Ready
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Your Cognitive Profile
            <span className="text-blue-400"> Has Been Generated</span>
          </h1>

          <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">

            <div className="text-zinc-500 mb-4">
              Estimated IQ Score
            </div>

            <div className="mt-3 text-zinc-500">
              Full percentile ranking locked
            </div>

            <div className="text-7xl font-black blur-sm select-none mt-6">
              127
            </div>

            <div className="mt-4 text-red-400 font-semibold animate-pulse">
              Premium insights hidden
            </div>

            <a
              href="https://buy.stripe.com/fZu00iejd55hc7c3yobAs00"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 w-full py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xl font-bold shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            >
              Unlock Full Results • £1.99
            </a>

          </div>

        </div>

      </div>
    )
  }

  if (started) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#F9FAFF] via-[#ECF4FF] to-[#E5F4FF] text-slate-900 flex flex-col overflow-hidden relative">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-400/20 rounded-full blur-3xl floating-glow"></div>


        <div className="relative z-10 w-full border-b border-white/20 bg-white/60 backdrop-blur-xl p-4 flex items-center justify-between shadow-[0_10px_35px_rgba(15,23,42,0.12)]">

          <div className="text-zinc-400">
            Question {questionIndex + 1} / {questions.length}
          </div>

          <div className="text-blue-400 font-bold">
            {formatTime()}
          </div>

        </div>

        <div className="w-full h-1 bg-white/10 relative z-10">

          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${((questionIndex + 1) / questions.length) * 100}%`
            }}
          ></div>

        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">

          <div className="max-w-3xl w-full">

            <div className="mb-6 text-slate-500 uppercase tracking-[0.3em] text-xs">
              NPC Detector Assessment
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-16">

              {[1, 2, 3, 4].map((item) => (

                <button
                  key={item}
                  onClick={nextQuestion}
                  className="group aspect-square rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden relative"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 to-transparent"></div>

                  <div className="relative z-10 flex items-center justify-center w-full h-full">

                    {renderAnswer()}

                  </div>

                </button>

              ))}

            </div>

          </div>

        </div>

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
          Discover How Your Brain
          <span className="text-blue-400"> Actually Performs</span>
        </h1>


        <p className="mt-6 text-slate-500 max-w-2xl text-lg">
          Measure reasoning, pattern recognition, memory,
          focus, and processing speed through a cinematic
          modern intelligence assessment.
        </p>

        <button
          onClick={() => setStarted(true)}

          className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg shadow-[0_18px_45px_rgba(56,189,248,0.55)]"
        >
          Start Free Assessment
        </button>

      </div>

    </div>
  )
}

export default App