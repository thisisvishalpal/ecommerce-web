type AuthMessageProps = {
  error?: string
  message?: string
}

export function AuthMessage({ error, message }: AuthMessageProps) {
  if (!error && !message) return null

  return (
    <div
      className={
        error
          ? "rounded-sm border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          : "rounded-sm border border-primary/20 bg-primary/10 px-4 py-3 text-sm text-primary"
      }
    >
      {error || message}
    </div>
  )
}
