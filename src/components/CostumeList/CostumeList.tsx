import { arraySplitBySize } from "../../utils";
import {
  Bar,
  Image,
  ImageContainer,
  Item,
  ItemLight,
  ListContainer,
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
  isSp?: boolean;
};

const MAX_WIDTH_ITEM = 4;

export const CostumeList: React.FC<CostumeListProps> = ({
  className,
  items,
  color,
  selectedColor,
  isSp,
}) => {
  const lastLineIndex = Math.ceil(items.length / MAX_WIDTH_ITEM) - 1;
  const splittedList = arraySplitBySize(items, MAX_WIDTH_ITEM);

  return (
    <ListContainer isSp={isSp} className={className}>
      {splittedList.map((splitItems, i) => (
        <OneLineContainer key={i} isSp={isSp}>
          {splitItems.map((item, j) => (
            <Item key={`${i}-${j}`}>
              <SingleItemContainer onClick={item.onClick}>
                <ItemLight
                  isSelected={item.isSelected}
                  selectedColor={selectedColor}
                  isSp={isSp}
                />
                <ImageContainer
                  backgroundColor={color}
                  isSelected={item.isSelected}
                  isSp={isSp}
                >
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
            isSp={isSp}
          />
        </OneLineContainer>
      ))}
    </ListContainer>
  );
};
