export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  subLabel?: string;
  children?: Array<NavItem>;
  childrenColumn?: number;
  targetBlank?: boolean;
  isMobileOnly?: boolean;
}
