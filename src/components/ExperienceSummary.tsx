import { workExperiences } from "../data";

export default function ExperienceSummary() {
  // Get the most recent work experience
  const latestExperience = workExperiences[0];

  return (
    <div className="max-w-xl md:max-w-[25vw] mb-6 bg-white shadow-lg rounded-xl p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          Professional Journey
        </h2>
        <span className="text-cyan-600 font-medium text-sm flex items-center">
          Latest Role
        </span>
      </div>

      <div className="space-y-4">
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {latestExperience.title}
          </h3>

        </div>

        <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
          {latestExperience.mainBullets.slice(0, 2).map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>

        <div className="border-t pt-4 flex justify-between items-center">
          <p className="text-gray-500 text-xs">
            Press <span className="font-semibold">Experience</span> in the
            navbar to see full details
          </p>
        </div>
      </div>
    </div>
  );
}
