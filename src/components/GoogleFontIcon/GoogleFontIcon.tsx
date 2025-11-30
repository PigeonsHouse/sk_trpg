import { cx } from "@emotion/css";
import { Icon } from "./styled";

export const GoogleFontIcon: React.FC<{
  className?: string;
  iconName: string;
  size: number;
  color?: string;
}> = ({ className, iconName, size, color }) => {
  return (
    <Icon size={size} color={color} className={cx("material-icons", className)}>
      {iconName}
    </Icon>
  );
};
