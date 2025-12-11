import { arraySplit } from "../../utils";
import {
  Bar,
  DummyStyle,
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
  dummy?: boolean;
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

  const dummyCount =
    (MAX_WIDTH_ITEM - (items.length % MAX_WIDTH_ITEM)) % MAX_WIDTH_ITEM;
  const itemsWithDummy: (CostumeItem | undefined)[] = [
    ...items,
    ...Array(dummyCount).fill({ ...items[items.length - 1], dummy: true }),
  ];
  const splittedList = arraySplit(items, MAX_WIDTH_ITEM);
  const splittedListWithDummy = arraySplit(itemsWithDummy, MAX_WIDTH_ITEM);

  return (
    <ListContainer isSp={isSp} className={className}>
      {splittedListWithDummy.map((splitItems, i) => (
        <OneLineContainer key={i}>
          {splitItems.map((item, j) => (
            <Item
              key={`${i}-${j}`}
              className={item.dummy ? DummyStyle : undefined}
            >
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
            count={splittedList[i].length}
            extendLeft={i !== 0}
            extendRight={
              splittedList[i].length === MAX_WIDTH_ITEM && i !== lastLineIndex
            }
            isSp={isSp}
          />
        </OneLineContainer>
      ))}
    </ListContainer>
  );
};
