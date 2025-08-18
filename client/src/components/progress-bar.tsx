interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="bg-white rounded-xl p-6 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-gray-text">Progress</span>
        <span className="text-sm font-medium text-dark-blue">{current} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className="bg-gradient-to-r from-coral to-teal h-3 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
