type RichTextProps = {
  text: string;
};

const RichText = ({ text }: RichTextProps) => {
  const lines = text.split('\\n');
  return (
    <>
      {lines.map((line, lineIdx) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/g);
        return (
          <span key={lineIdx}>
            {parts.map((part, idx) =>
              part.startsWith('**') && part.endsWith('**') ? (
                <strong key={idx}>{part.slice(2, -2)}</strong>
              ) : (
                <span key={idx}>{part}</span>
              )
            )}
            {lineIdx < lines.length - 1 && <br />}
          </span>
        );
      })}
    </>
  );
};

export default RichText;
