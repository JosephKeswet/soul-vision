export function ArrowRightIcon({ color }: { color?: string }) {
  return (
    <svg
      width="24"
      height="43"
      viewBox="0 0 24 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="-rotate-90"
    >
      <path
        d="M24 31.0492L23.0105 30.0639L12.6995 40.3325L12.6995 -4.93959e-07L11.3002 -5.55124e-07L11.3002 40.3325L0.989304 30.0639L5.50146e-07 31.0492L11.9999 43L24 31.0492Z"
        fill={color ? color : "#231F20"}
      />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg
      width="24"
      height="43"
      viewBox="0 0 24 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rotate-90"
    >
      <path
        d="M24 31.0492L23.0105 30.0639L12.6995 40.3325L12.6995 -4.93959e-07L11.3002 -5.55124e-07L11.3002 40.3325L0.989304 30.0639L5.50146e-07 31.0492L11.9999 43L24 31.0492Z"
        fill="#231F20"
      />
    </svg>
  );
}
