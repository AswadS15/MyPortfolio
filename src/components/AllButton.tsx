type myButtonProps = {
  className?: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function AllButton({
  className,
  title,
  onClick,
}: myButtonProps) {
  return (
    <>
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </>
  );
}
