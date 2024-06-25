"use client";
export default function Button({ text, onClick = () => {}, className }) {
  return (
    <button
      onClick={onClick}
      className={`tracking-[1.5px] font-poppines text-[14px] text-medium  ${className}`}>
      {text}
    </button>
  );
}
