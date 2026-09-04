import clsx from "clsx"

export function Logo({ className }) {
  return (
    <div className={clsx("whitespace-nowrap font-display", className)}>
      <span>Isaí </span>
      <span className="text-accent-400">García</span>
    </div>
  )
}
