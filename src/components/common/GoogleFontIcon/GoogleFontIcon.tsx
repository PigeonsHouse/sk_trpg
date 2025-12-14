import { cx } from "@emotion/css";
import { Icon } from "./styled";

/**
 * GoogleFontのMaterial Iconsを使用しやすくするコンポーネント
 */
export const GoogleFontIcon: React.FC<{
  className?: string;
  iconName: string;
  size: number;
  color?: string;
}> = ({ className, iconName, size, color }) => {
  return (
    <Icon
      rectSize={size}
      iconColor={color}
      className={cx("material-icons", className)}
    >
      {iconName}
    </Icon>
  );
};
