import { IconProps } from "@/types";

const AiIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.0088 25.7857C12.4708 26.7022 13.7792 26.7022 14.2412 25.7857L15.861 22.5724C16.2905 21.7204 16.9093 20.9781 17.6701 20.4023L20.6832 18.1217C21.344 17.6215 21.344 16.6285 20.6832 16.1283L17.6701 13.8477C16.9093 13.2719 16.2905 12.5296 15.861 11.6776L14.2412 8.46424C13.7792 7.54779 12.4708 7.54779 12.0088 8.46424L10.3889 11.6776C9.95947 12.5296 9.34067 13.2719 8.57992 13.8477L5.5668 16.1283C4.906 16.6285 4.906 17.6215 5.5668 18.1217L8.57992 20.4023C9.34067 20.9781 9.95947 21.7204 10.3889 22.5724L12.0088 25.7857ZM23.6494 10.7786C23.9976 11.4833 25.0025 11.4833 25.3505 10.7786C25.6702 10.1318 26.1332 9.56631 26.7045 9.12534L26.8567 9.00776C27.435 8.56129 27.435 7.68869 26.8567 7.24221L26.7045 7.12464C26.1332 6.68366 25.6702 6.11821 25.3505 5.47134C25.0025 4.76671 23.9976 4.76671 23.6494 5.47134C23.3297 6.11821 22.8667 6.68366 22.2956 7.12464L22.1433 7.24221C21.565 7.68869 21.565 8.56129 22.1433 9.00776L22.2956 9.12534C22.8667 9.56631 23.3297 10.1318 23.6494 10.7786Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AiIcon;