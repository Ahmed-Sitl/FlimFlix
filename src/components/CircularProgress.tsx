interface Props {
  value: number; // Value should be between 0 and 100
}

const CircularProgress = ({ value }: Props) => {
  // Ensure value is between 0 and 100
  const normalizedValue = Math.min(Math.max(value, 0), 100);

  // Circle properties
  const radius = 30; // Radius of the circle
  const strokeWidth = 4; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const offset = circumference - (normalizedValue / 100) * circumference; // Calculate offset based on value

  return (
    <div className="flex justify-center items-center bg-[#111827] rounded-full">
      <svg
        className="rotate-[-90deg]"
        width={2 * radius + strokeWidth}
        height={2 * radius + strokeWidth}
      >
        <circle
          stroke="#e5e7eb" // Background color of the circle
          strokeWidth={strokeWidth}
          fill="none"
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
        <circle
          stroke="#10b981" // Progress color (green)
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
        />
      </svg>
      <div className="absolute text-sm text-white">{normalizedValue}%</div>
    </div>
  );
};

export default CircularProgress;
