import { arraySplit } from "../../utils";
import {
  Bar,
  Container,
  Image,
  ImageContainer,
  ItemLight,
  OneLineContainer,
  SingleItemContainer,
} from "./styled";

export type CostumeItem = {
  isSelected: boolean;
  imageUrl: string;
  onClick: () => void;
};

type CostumeListProps = {
  className?: string;
  items: CostumeItem[];
  color: string;
  selectedColor: string;
};

const MAX_WIDTH_ITEM = 4;

export const CostumeList: React.FC<CostumeListProps> = ({
  className,
  items,
  color,
  selectedColor,
}) => {
  const splittedList = arraySplit(items, MAX_WIDTH_ITEM);
  const lastLineIndex = Math.floor(items.length / MAX_WIDTH_ITEM);

  return (
    <Container className={className}>
      {splittedList.map((splitItems, i) => (
        <OneLineContainer key={i}>
          <Bar
            idx={i}
            count={splitItems.length}
            extendLeft={i !== 0}
            extendRight={splitItems.length === 4 && i !== lastLineIndex}
          />
          {splitItems.map((item, j) => (
            <SingleItemContainer key={`${i}-${j}`}>
              <ItemLight
                isSelected={item.isSelected}
                selectedColor={selectedColor}
              />
              <ImageContainer color={color} onClick={item.onClick}>
                <Image src={item.imageUrl} />
              </ImageContainer>
            </SingleItemContainer>
          ))}
        </OneLineContainer>
      ))}
    </Container>
  );
};
