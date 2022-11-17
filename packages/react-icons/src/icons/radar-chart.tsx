import React from 'react';
import { IconProps } from '../types';

export const RadarChartIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', size = 32, ...rest }, ref) => {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
        width={size}
        height={size}
        ref={ref}
      >
        <g clipPath="url(#clip0_1346_4287)">
          <path
            d="M14.8244 1.8541C15.5254 1.34481 16.4746 1.34481 17.1756 1.8541L29.0903 10.5106C29.7913 11.0199 30.0846 11.9227 29.8168 12.7467L25.2658 26.7533C24.9981 27.5773 24.2301 28.1353 23.3637 28.1353H8.63631C7.76985 28.1353 7.00194 27.5773 6.73419 26.7533L2.18318 12.7467C1.91543 11.9227 2.20875 11.0199 2.90972 10.5106L14.8244 1.8541Z"
            stroke={color}
            strokeWidth="1.5"
          />
          <path
            d="M15.74 12.554C16.1193 12.2356 16.6745 12.2428 17.0455 12.5709L19.5445 14.781C19.8243 15.0286 19.9429 15.4114 19.8518 15.7738L19.1243 18.6696C19.0233 19.0718 18.6845 19.3699 18.2727 19.4189L14.2082 19.9028C13.7336 19.9593 13.2853 19.672 13.1384 19.2172L12.2069 16.3341C12.0818 15.9469 12.2039 15.5224 12.5156 15.2608L15.74 12.554Z"
            stroke={color}
          />
          <path
            d="M15.5856 6.52174C15.9597 6.2192 16.4962 6.22596 16.8626 6.53783L24.5212 13.0571C24.8139 13.3063 24.9379 13.7011 24.8402 14.0728L22.4431 23.1923C22.3202 23.6599 21.8802 23.9727 21.3982 23.9351L11.3222 23.1491C10.9375 23.1191 10.6043 22.8704 10.4662 22.51L7.26001 14.1432C7.10497 13.7386 7.2281 13.2802 7.56499 13.0078L15.5856 6.52174Z"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1346_4287">
            <rect width="32" height="32" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);
