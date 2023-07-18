import { CardTextWrapper } from '../CardText/CardText.styled';
import * as S from './SubmitText.styled';

export default function SubmitText() {
  return (
    <CardTextWrapper>
      <S.CenterHeader>Thank you!</S.CenterHeader>
      <S.CenterParagraph>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </S.CenterParagraph>
    </CardTextWrapper>
  );
}
