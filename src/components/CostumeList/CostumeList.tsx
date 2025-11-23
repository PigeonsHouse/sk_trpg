import { MdLocationPin } from "react-icons/md";
import { arraySplit } from "../../utils";
import {
  Bar,
  Container,
  Image,
  ImageContainer,
  Item,
  ItemLight,
  ListContainer,
  OneLineContainer,
  SingleItemContainer,
  Title,
  TitleContainer,
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
    <Container>
      <TitleContainer>
        <MdLocationPin size={64} color="#4B4B4B" />
        <Title>衣装差分</Title>
      </TitleContainer>
      <ListContainer className={className}>
        {splittedList.map((splitItems, i) => (
          <OneLineContainer key={i}>
            {splitItems.map((item, j) => (
              <Item key={`${i}-${j}`}>
                <SingleItemContainer onClick={item.onClick}>
                  <ItemLight
                    isSelected={item.isSelected}
                    selectedColor={selectedColor}
                  />
                  <ImageContainer color={color} isSelected={item.isSelected}>
                    <Image src={item.imageUrl} />
                  </ImageContainer>
                </SingleItemContainer>
              </Item>
            ))}

            <Bar
              idx={i}
              count={splitItems.length}
              extendLeft={i !== 0}
              extendRight={
                splitItems.length === MAX_WIDTH_ITEM && i !== lastLineIndex
              }
            />
          </OneLineContainer>
        ))}
      </ListContainer>
    </Container>
  );
};
