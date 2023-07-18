import * as S from './SubmitButton.styled';

interface SubmitButtonProps {
  setIsSubmitted: (value: boolean) => void;
}

export default function SubmitButton({ setIsSubmitted }: SubmitButtonProps) {
  return (
    <div>
      <S.Button onClick={() => setIsSubmitted(true)}>Submit</S.Button>
    </div>
  );
}
