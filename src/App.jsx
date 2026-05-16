import { useEffect, useState } from "react"

function App() {

  const questions = [
    "Which shape completes the sequence?",
    "Which number comes next?",
    "Identify the hidden pattern.",
    "Which option is different?",
    "Solve the logical sequence."
  ]

  const [started, setStarted] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(900)

  useEffect(() => {

    if (!started || finished) return

    const timer = setInterval(() => {
      setTimeLeft(prev => {

        if (prev <= 1) {
          clearInterval(timer)
          setFinished(true)
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)

  }, [started, finished])

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  const nextQuestion = () => {

    if (questionIndex >= questions.length - 1) {
      setFinished(true)
      return
    }

    setQuestionIndex(prev => prev + 1)
  }

  if (finished) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 overflow-hidden relative">

        {/* Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl floating-glow"></div>

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

            <div className="text-7xl font-black blur-sm select-none">
              127
            </div>

            <div className="mt-6 space-y-3 text-left">

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                Exceptional pattern recognition detected
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                Processing speed above average
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                Strategic reasoning profile identified
              </div>

            </div>

            <a
              href="https://buy.stripe.com/fZu00iejd55hc7c3yobAs00"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-8 w-full py-5 rounded-2xl bg-blue-500 hover:bg-blue-400 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xl font-bold shadow-[0_0_50px_rgba(59,130,246,0.5)]"
            >
              Unlock Full Results • £3.99
            </a>

          </div>

        </div>

      </div>
    )
  }

  if (started) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col overflow-hidden relative">

        {/* Glow */}
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl floating-glow"></div>

        {/* Top Bar */}
        <div className="relative z-10 w-full border-b border-white/10 p-4 flex items-center justify-between">

          <div className="text-zinc-400">
            Question {questionIndex + 1} / {questions.length}
          </div>

          <div className="text-blue-400 font-bold">
            {formatTime()}
          </div>

        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-white/10 relative z-10">

          <div
            className="h-full bg-blue-500 transition-all duration-500"
            style={{
              width: `${((questionIndex + 1) / questions.length) * 100}%`
            }}
          ></div>

        </div>

        {/* Question */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 text-center">

          <div className="max-w-3xl w-full">

            <div className="mb-6 text-zinc-500 uppercase tracking-[0.3em] text-sm">
              Cognitive Assessment
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {questions[questionIndex]}
            </h1>

            {/* Answers */}
            <div className="grid grid-cols-2 gap-4 mt-16">

              {[1, 2, 3, 4].map((item) => (

                <button
                  key={item}
                  onClick={nextQuestion}
                  className="group aspect-square rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer overflow-hidden relative"
                >

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500/10 to-transparent"></div>

                  <div className="relative z-10 flex items-center justify-center w-full h-full">

                    <div className="w-24 h-24 rounded-2xl border-4 border-white/30 flex items-center justify-center text-4xl font-black text-blue-400">

                      {item}

                    </div>

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
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

      {/* Floating Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl floating-glow"></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        {/* Live Status */}
        <div className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-md text-sm text-blue-200">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <span>Live Cognitive Assessment Platform</span>

        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Discover How Your Brain
          <span className="text-blue-400"> Actually Performs</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
          Measure reasoning, pattern recognition, memory,
          focus, and processing speed through a cinematic
          modern intelligence assessment.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10 flex-wrap justify-center">

          <button
            onClick={() => setStarted(true)}
            className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg shadow-[0_0_40px_rgba(59,130,246,0.5)]"
          >
            Start Free Assessment
          </button>

          <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg backdrop-blur-md">
            Challenge Yourself
          </button>

        </div>

        {/* Stats Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">15m</div>
            <div className="text-zinc-400 text-sm mt-1">Assessment Time</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">25</div>
            <div className="text-zinc-400 text-sm mt-1">Questions</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">5</div>
            <div className="text-zinc-400 text-sm mt-1">Cognitive Areas</div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
            <div className="text-3xl font-bold text-blue-400">Live</div>
            <div className="text-zinc-400 text-sm mt-1">Real-Time Analysis</div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App