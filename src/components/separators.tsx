export function HorizontalSeparator({ height = 45 }: { height?: number }) {
  return <div className={`w-px h-[${height}px] bg-zinc-800 rounded-md`} />;
}

export function VerticalSeparator({ width = 45 }: { width?: number }) {
  return <div className={`w-[${width}px] h-px bg-zinc-800 rounded-md`} />;
}
