type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({
  current,
  total,
}: Props) {
  return (
    <div>

      <div className="mb-3 flex justify-between text-sm text-zinc-500">
        <span>Setup</span>

        <span>
          {current + 1} / {total}
        </span>
      </div>

      <div className="h-2 rounded-full bg-zinc-200">

        <div
          className="h-2 rounded-full bg-indigo-600 transition-all duration-500"
          style={{
            width: `${((current + 1) / total) * 100}%`,
          }}
        />

      </div>

    </div>
  );
}