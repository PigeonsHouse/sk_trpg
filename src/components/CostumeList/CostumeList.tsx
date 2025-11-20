import { UiColor } from "../../definitions";

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

const arraySplit = (arr: any[], size: number) =>
  arr.flatMap((_, i, a) => (i % size ? [] : [a.slice(i, i + size)]));

export const CostumeList: React.FC<CostumeListProps> = ({
  className,
  items,
  color,
  selectedColor,
}) => {
  return (
    <span
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        paddingTop: 16,
        paddingLeft: 40,
        paddingBottom: 120,
        position: "relative",
      }}
    >
      {arraySplit(items, 4).map((splitItems, i) => {
        const isFirst = i === 0;
        return (
          <>
            <div
              style={{
                position: "absolute",
                height: 6,
                width:
                  (splitItems.length - 1) * 122 +
                  (isFirst ? 0 : 36) +
                  (splitItems.length === 4 ? 36 : 0),
                top: 40 + 156 * i,
                backgroundColor: UiColor.gray,
                marginLeft: isFirst ? 48 : 12,
              }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: 20,
              }}
            >
              {splitItems.map((item, i) => {
                return (
                  <span
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: item.isSelected ? 28 : 16,
                        height: item.isSelected ? 28 : 16,
                        border: `6px solid ${UiColor.gray}`,
                        backgroundColor: item.isSelected
                          ? selectedColor
                          : "white",
                        borderRadius: 4,
                        margin: item.isSelected ? 8 : 14,
                        zIndex: 1,
                      }}
                    />
                    <div
                      style={{
                        display: "inline-block",
                        backgroundColor: color,
                        borderRadius: 9999,
                        overflow: "hidden",
                        width: 100,
                        height: 100,
                        cursor: "pointer",
                      }}
                      onClick={item.onClick}
                    >
                      <img
                        src={item.imageUrl}
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                          width: 100,
                          height: 100,
                          transform: "scale(3) translateY(35%)",
                        }}
                      />
                    </div>
                  </span>
                );
              })}
            </div>
          </>
        );
      })}
    </span>
  );
};
