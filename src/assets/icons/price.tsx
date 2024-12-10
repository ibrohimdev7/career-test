import { IconProps } from "@/types";

const PriceIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 13H15.5C15.1022 13 14.7206 13.158 14.4393 13.4393C14.158 13.7206 14 14.1022 14 14.5C14 14.8978 14.158 15.2794 14.4393 15.5607C14.7206 15.842 15.1022 16 15.5 16H16.5C16.8978 16 17.2794 16.158 17.5607 16.4393C17.842 16.7206 18 17.1022 18 17.5C18 17.8978 17.842 18.2794 17.5607 18.5607C17.2794 18.842 16.8978 19 16.5 19H14M16 11.5V13M16 20.5V19"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27Z"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 25V29M3 16H7M16 7V3M25 16H29"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PriceIcon;
