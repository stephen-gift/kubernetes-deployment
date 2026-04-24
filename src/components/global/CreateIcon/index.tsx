import React from "react";
import { cn } from "@/lib/utils";

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: string | number;
  className?: string;
}

export interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: IconProps;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    path,
    d: pathDefinition,
    displayName,
    defaultProps = {}
  } = options;

  const IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
    ({ size, className, children, ...props }, ref) => {
      const iconSize = size || defaultProps.size || "1em";

      return (
        <svg
          ref={ref}
          viewBox={viewBox}
          width={iconSize}
          height={iconSize}
          className={cn(className, defaultProps.className)}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          {...defaultProps}
          {...props}
        >
          {pathDefinition ? <path d={pathDefinition} /> : path}
          {children}
        </svg>
      );
    }
  );

  IconComponent.displayName = displayName || "CustomIcon";

  return IconComponent;
}
