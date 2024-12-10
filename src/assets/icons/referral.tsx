import { IconProps } from "@/types";

const ReferralIcon = ({ className }: IconProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.7232 13.408L13.408 19.7232C13.2571 19.8689 13.0551 19.9495 12.8453 19.9477C12.6355 19.9459 12.4349 19.8617 12.2866 19.7134C12.1382 19.5651 12.0541 19.3644 12.0523 19.1547C12.0505 18.9449 12.1311 18.7428 12.2768 18.592L18.592 12.2768C18.7429 12.131 18.945 12.0504 19.1547 12.0522C19.3645 12.054 19.5651 12.1382 19.7135 12.2865C19.8618 12.4348 19.9459 12.6355 19.9478 12.8452C19.9496 13.055 19.8689 13.2571 19.7232 13.408ZM13.7984 13.7984C13.9729 13.6241 14.0917 13.402 14.14 13.1602C14.1882 12.9184 14.1636 12.6677 14.0693 12.4399C13.975 12.212 13.8152 12.0173 13.6102 11.8802C13.4052 11.7432 13.1642 11.6701 12.9176 11.6701C12.671 11.6701 12.43 11.7432 12.225 11.8802C12.02 12.0173 11.8602 12.212 11.7659 12.4399C11.6717 12.6677 11.6471 12.9184 11.6953 13.1602C11.7435 13.402 11.8623 13.6241 12.0368 13.7984C12.2705 14.0318 12.5873 14.1629 12.9176 14.1629C13.2479 14.1629 13.5647 14.0318 13.7984 13.7984ZM18.2016 18.2C18.0272 18.3742 17.9083 18.5963 17.8601 18.8381C17.8119 19.0799 17.8365 19.3306 17.9307 19.5585C18.025 19.7863 18.1848 19.981 18.3898 20.1181C18.5948 20.2551 18.8358 20.3282 19.0824 20.3282C19.329 20.3282 19.57 20.2551 19.775 20.1181C19.98 19.981 20.1398 19.7863 20.2341 19.5585C20.3284 19.3306 20.353 19.0799 20.3048 18.8381C20.2565 18.5963 20.1377 18.3742 19.9632 18.2C19.7295 17.9665 19.4127 17.8354 19.0824 17.8354C18.7521 17.8354 18.4353 17.9665 18.2016 18.2ZM27.4832 17.816C27.4197 18.2374 27.2438 18.6339 26.9741 18.9638C26.7044 19.2938 26.3508 19.545 25.9504 19.6912L24.3872 20.2736L24.8352 21.88C24.9491 22.2895 24.9521 22.722 24.844 23.1331C24.7359 23.5443 24.5206 23.9193 24.22 24.2199C23.9194 24.5205 23.5443 24.7359 23.1332 24.844C22.7221 24.9521 22.2896 24.949 21.88 24.8352L20.2736 24.3872L19.6928 25.9504C19.5468 26.3505 19.2958 26.704 18.9662 26.9736C18.6365 27.2433 18.2403 27.4193 17.8192 27.4832C17.6912 27.5038 17.5617 27.5145 17.432 27.5152C17.0712 27.5156 16.715 27.4337 16.3905 27.2756C16.0661 27.1176 15.7821 26.8876 15.56 26.6032L14.5264 25.296L13.1408 26.2176C12.7863 26.4536 12.3753 26.591 11.9502 26.6157C11.525 26.6405 11.1009 26.5516 10.7214 26.3583C10.3419 26.165 10.0206 25.8741 9.79068 25.5156C9.56072 25.1571 9.43031 24.7439 9.41281 24.3184L9.34561 22.6544L7.68161 22.5872C7.25607 22.5697 6.84284 22.4392 6.48435 22.2093C6.12586 21.9793 5.83502 21.6581 5.64168 21.2786C5.44835 20.8991 5.35949 20.475 5.38422 20.0498C5.40895 19.6246 5.54639 19.2137 5.78241 18.8592L6.70401 17.4736L5.39681 16.4384C5.06306 16.1742 4.80558 15.826 4.65076 15.4295C4.49594 15.033 4.44937 14.6024 4.5158 14.182C4.58224 13.7615 4.7593 13.3663 5.02883 13.0369C5.29836 12.7074 5.65067 12.4556 6.04961 12.3072L7.61281 11.7264L7.16481 10.12C7.05058 9.71028 7.04725 9.2776 7.15519 8.86622C7.26313 8.45484 7.47845 8.07952 7.7791 7.77871C8.07976 7.47789 8.45495 7.26237 8.86627 7.15421C9.2776 7.04605 9.71028 7.04914 10.12 7.16315L11.7264 7.61115L12.3072 6.04955C12.4556 5.6506 12.7075 5.2983 13.0369 5.02877C13.3664 4.75924 13.7616 4.58218 14.182 4.51574C14.6025 4.44931 15.033 4.49588 15.4295 4.6507C15.826 4.80552 16.1742 5.063 16.4384 5.39675L17.4736 6.70395L18.8592 5.78235C19.2137 5.54633 19.6247 5.40889 20.0499 5.38416C20.4751 5.35943 20.8992 5.44829 21.2787 5.64162C21.6582 5.83496 21.9794 6.12579 22.2093 6.48429C22.4393 6.84278 22.5697 7.25601 22.5872 7.68155L22.6544 9.34555L24.3184 9.41275C24.744 9.43024 25.1572 9.56066 25.5157 9.79062C25.8742 10.0206 26.165 10.3418 26.3583 10.7213C26.5517 11.1008 26.6405 11.5249 26.6158 11.9501C26.5911 12.3753 26.4536 12.7862 26.2176 13.1408L25.296 14.5248L26.6032 15.56C26.9389 15.8223 27.1978 16.1703 27.3527 16.5672C27.5075 16.9642 27.5526 17.3955 27.4832 17.816ZM25.6112 16.816L23.7248 15.3232C23.5674 15.1986 23.4626 15.0193 23.4312 14.821C23.3997 14.6228 23.444 14.4199 23.5552 14.2528L24.8848 12.2544C24.9636 12.1362 25.0095 11.9993 25.0179 11.8576C25.0262 11.7159 24.9967 11.5745 24.9324 11.4479C24.8681 11.3214 24.7712 11.2142 24.6518 11.1375C24.5324 11.0607 24.3947 11.0171 24.2528 11.0112L21.8528 10.9136C21.6519 10.9053 21.4615 10.8216 21.3195 10.6793C21.1775 10.537 21.0943 10.3464 21.0864 10.1456L20.9872 7.74555C20.981 7.60385 20.9372 7.46634 20.8603 7.34713C20.7835 7.22792 20.6763 7.13129 20.5498 7.06714C20.4233 7.00299 20.282 6.97363 20.1404 6.98207C19.9988 6.99051 19.862 7.03644 19.744 7.11515L17.7472 8.44315C17.5802 8.55536 17.377 8.6004 17.1783 8.56925C16.9795 8.5381 16.7999 8.43307 16.6752 8.27515L15.184 6.39035C15.0959 6.27937 14.9799 6.19379 14.8479 6.14235C14.7158 6.09092 14.5725 6.07548 14.4325 6.09761C14.2926 6.11975 14.161 6.17866 14.0512 6.26833C13.9415 6.358 13.8576 6.4752 13.808 6.60795L12.9696 8.85915C12.9005 9.04773 12.7627 9.20318 12.5837 9.2943C12.4047 9.38541 12.1979 9.40544 12.0048 9.35035L9.69122 8.70395C9.5545 8.66547 9.41 8.66407 9.27257 8.69991C9.13513 8.73575 9.00972 8.80753 8.90921 8.90788C8.8087 9.00823 8.73671 9.13353 8.70065 9.2709C8.66459 9.40828 8.66575 9.55278 8.70402 9.68955L9.35041 12.0048C9.40434 12.1979 9.38378 12.4042 9.29281 12.5829C9.20184 12.7615 9.0471 12.8995 8.85922 12.9696L6.60801 13.808C6.47526 13.8575 6.35806 13.9415 6.26839 14.0512C6.17872 14.1609 6.11981 14.2925 6.09767 14.4325C6.07554 14.5724 6.09098 14.7158 6.14242 14.8478C6.19385 14.9798 6.27944 15.0958 6.39041 15.184L8.27521 16.6768C8.43264 16.8013 8.53746 16.9806 8.56888 17.1789C8.6003 17.3771 8.55601 17.58 8.44481 17.7472L7.11521 19.7456C7.03685 19.8636 6.99127 20.0004 6.98312 20.1419C6.97497 20.2834 7.00455 20.4245 7.06884 20.5508C7.13313 20.6771 7.22982 20.7841 7.34901 20.8607C7.46821 20.9374 7.60563 20.981 7.74722 20.9872L10.1472 21.0864C10.3478 21.0946 10.538 21.178 10.68 21.32C10.822 21.462 10.9054 21.6521 10.9136 21.8528L11.0128 24.2528C11.0188 24.3946 11.0624 24.5323 11.1391 24.6517C11.2159 24.7712 11.323 24.868 11.4496 24.9323C11.5761 24.9967 11.7175 25.0262 11.8592 25.0178C12.001 25.0095 12.1379 24.9635 12.256 24.8848L14.2528 23.5568C14.4199 23.4449 14.623 23.4001 14.8217 23.4312C15.0203 23.4624 15.1999 23.5672 15.3248 23.7248L16.816 25.6096C16.9041 25.7205 17.0201 25.8061 17.1522 25.8576C17.2842 25.909 17.4275 25.9244 17.5675 25.9023C17.7075 25.8802 17.8391 25.8212 17.9488 25.7316C18.0585 25.6419 18.1424 25.5247 18.192 25.392L19.0304 23.1408C19.1004 22.9529 19.2384 22.7981 19.4171 22.7072C19.5958 22.6162 19.8021 22.5956 19.9952 22.6496L22.3088 23.2944C22.4456 23.3333 22.5904 23.3349 22.728 23.2988C22.8656 23.2628 22.991 23.1905 23.0912 23.0896C23.1928 22.9901 23.2655 22.865 23.3016 22.7275C23.3376 22.59 23.3357 22.4453 23.296 22.3088L22.6496 19.9936C22.5957 19.8004 22.6163 19.5941 22.7072 19.4154C22.7982 19.2368 22.9529 19.0988 23.1408 19.0288L25.392 18.192C25.5248 18.1424 25.642 18.0584 25.7316 17.9487C25.8213 17.839 25.8802 17.7074 25.9024 17.5675C25.9245 17.4275 25.909 17.2842 25.8576 17.1521C25.8062 17.0201 25.7222 16.9041 25.6112 16.816Z"
      />
    </svg>
  );
};

export default ReferralIcon;
