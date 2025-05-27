type RichTextProps = {
  text: string;
};

const RichText = ({ text }: RichTextProps) => {
  const parts = text.split(/(\*\*[^*]+\*\*|\n)/g); // Incluye '\n' como separador
  return (
    <>
      {parts.map((part, index) => {
        if (part === '\n') {
          return <br key={index} />; // Renderiza un salto de línea
        }
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={index}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default RichText;
