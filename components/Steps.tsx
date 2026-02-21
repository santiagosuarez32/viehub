"use client"

type StepsProps = {
  steps?: string[]
}

export default function Steps({ steps }: StepsProps) {

  const defaultSteps = [
    "Choose your destination",
    "Confirm your booking",
    "Enjoy your ride"
  ]

  const finalSteps = steps ?? defaultSteps

  return (
    <section className="w-full py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl mb-12 text-center">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {finalSteps.map((step, index) => (
            <div
              key={index}
              className="bg-black border border-[#CD9A31]/20 p-8 rounded-2xl text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#CD9A31] text-black font-bold">
                {index + 1}
              </div>

              <p className="text-gray-300">
                {step}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}