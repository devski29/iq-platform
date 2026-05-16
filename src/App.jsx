import { useEffect, useState } from "react"

function App() {

  const questions = [
    {
      type: "pattern",
      question: "Which shape completes the sequence?"
    },
    {
      type: "number",
      question: "Which number logically comes next?"
    },
    {
      type: "logic",
      question: "Identify the hidden relationship."
    },
    {
      type: "spatial",
      question: "Which object matches the rotation?"
    },
    {
      type: "memory",
      question: "Select the previously shown pattern."
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
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center overflow-hidden relative">

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl floating-glow"></div>

        <div className="relative z-10 text-center max-w-2xl px-6">

          <div className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin"></div>

          <div className="mt-12 text-blue-400 uppercase tracking-[0.4em] text-sm">
            BrainStormIQ Analysis Engine
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
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 overflow-hidden relative">

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

        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl floating-glow"></div>

        <div className="relative z-10 w-full border-b border-white/10 p-4 flex items-center justify-between">

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

            <div className="mb-6 text-zinc-500 uppercase tracking-[0.3em] text-sm">
              BrainStormIQ Assessment
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
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative">

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl floating-glow"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <div className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full border border-blue-500/30 bg-white/5 backdrop-blur-md text-sm text-blue-200">

          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

          <span>BrainStormIQ Intelligence System</span>

        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-tight max-w-5xl">
          Discover How Your Brain
          <span className="text-blue-400"> Actually Performs</span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl text-lg">
          Measure reasoning, pattern recognition, memory,
          focus, and processing speed through a cinematic
          modern intelligence assessment.
        </p>

        <button
          onClick={() => setStarted(true)}
          className="mt-10 px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-400 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-lg shadow-[0_0_40px_rgba(59,130,246,0.5)]"
        >
          Start Free Assessment
        </button>

      </div>

    </div>
  )
}

export default App