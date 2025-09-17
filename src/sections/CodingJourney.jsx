import { codingJourney } from "../constants";

const CodingJourney = () => {
  return (
    <section id="journey" className="c-space section-spacing">
      <div className="w-full text-white">
        <h2 className="text-heading mb-10">My Coding Journey</h2>
        <div className="space-y-8">
          {codingJourney.map((phase, index) => (
            <div key={index} className="border border-white/10 rounded-2xl p-6 bg-primary/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                <span className="text-sm text-neutral-400 mt-2 md:mt-0">{phase.period}</span>
              </div>
              <p className="text-neutral-300 mb-4">{phase.description}</p>
              <ul className="space-y-2">
                {phase.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-neutral-400 flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingJourney;