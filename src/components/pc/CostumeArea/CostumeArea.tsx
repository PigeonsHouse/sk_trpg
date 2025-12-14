import { UiColor } from "../../../definitions";
import {
  CostumeList,
  GoogleFontIcon,
  type CostumeListProps,
} from "../../common";
import { Container, Title, TitleContainer } from "./styled";

type CostumeAreaProps = Omit<CostumeListProps, "className" | "isSp"> & {
  className?: string;
};

export const CostumeArea: React.FC<CostumeAreaProps> = ({
  className,
  items,
  mainColor,
  selectedColor,
}) => {
  return (
    <Container className={className}>
      <TitleContainer>
        <GoogleFontIcon
          iconName="fmd_good"
          size={64}
          color={UiColor.darkGray}
        />
        <Title>衣装差分</Title>
      </TitleContainer>
      <CostumeList
        items={items}
        mainColor={mainColor}
        selectedColor={selectedColor}
      />
    </Container>
  );
};
