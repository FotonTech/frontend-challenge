import theme from "@/styles/theme"

const SearchIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6667 6.66668C14.6667 9.6122 12.2789 12 9.33333 12C6.38781 12 4 9.6122 4 6.66668C4 3.72116 6.38781 1.33334 9.33333 1.33334C12.2789 1.33334 14.6667 3.72116 14.6667 6.66668ZM5.33333 6.66668C5.33333 8.87582 7.12419 10.6667 9.33333 10.6667C11.5425 10.6667 13.3333 8.87582 13.3333 6.66668C13.3333 4.45754 11.5425 2.66668 9.33333 2.66668C7.12419 2.66668 5.33333 4.45754 5.33333 6.66668Z"
      fill="#DCD8D8"
    />
    <path
      d="M3.86193 11.1953L1.5286 13.5286C1.26825 13.7889 1.26825 14.2111 1.5286 14.4714C1.78895 14.7318 2.21106 14.7318 2.4714 14.4714L4.80474 12.1381C5.06509 11.8777 5.06509 11.4556 4.80474 11.1953C4.54439 10.9349 4.12228 10.9349 3.86193 11.1953Z"
      fill="#F0F0F0"
    />
    <circle cx="9.33333" cy="6.66667" r="0.666667" fill="#F0F0F0" />
  </svg>
)

const HomeIcon = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 6.22222L9 0L17 6.22222V16C17 16.9818 16.2041 17.7778 15.2222 17.7778H2.77778C1.79594 17.7778 1 16.9818 1 16V6.22222Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.33333 17.7778V8.88892H11.6667V17.7778"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BookIcon = () => (
  <svg
    width="17"
    height="19"
    viewBox="0 0 17 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 15.75C1 14.5074 2.00736 13.5 3.25 13.5H15.4"
      stroke="#BFBEBF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.25 0H15.4V18H3.25C2.00736 18 1 16.9926 1 15.75V2.25C1 1.00736 2.00736 0 3.25 0Z"
      stroke="#BFBEBF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const UserIcon = () => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18"
      stroke="#BFBEBF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="9"
      cy="4"
      r="4"
      stroke="#BFBEBF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const BackIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 8H1"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 15L1 8L8 1"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const LoadingIcon = ({ size = "30" }: { size?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    stroke={theme.colors.special}
    preserveAspectRatio="xMidYMid"
  >
    <circle cx="50" opacity="0.4" cy="50" fill="none" strokeWidth="14" r="40" />
    <circle
      cx="50"
      cy="50"
      fill="none"
      strokeWidth="12"
      r="40"
      strokeDasharray="60 900"
      strokeLinecap="round"
      style={{
        animation: "rotate 1.5s infinite linear",
        transformOrigin: "50px 50px"
      }}
    />
  </svg>
)

const StatisticsIcon = ({ className = "" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <g>
      <path
        fill="#fff"
        fillOpacity="0.653"
        d="M2.667 11.333V3.667a1 1 0 011-1h8.666a1 1 0 011 1v8.666a1 1 0 01-1 1h-9a.667.667 0 000 1.334h9a2.333 2.333 0 002.334-2.334V3.667a2.333 2.333 0 00-2.334-2.334H3.667a2.333 2.333 0 00-2.334 2.334v7.666a.667.667 0 101.334 0z"
      ></path>
      <path
        fill="#C8C8C8"
        d="M4.333 8.667v2a.667.667 0 001.334 0v-2a.667.667 0 00-1.334 0z"
      ></path>
      <path
        fill="#C8C8C8"
        d="M10.333 7.333v3.334a.667.667 0 001.334 0V7.333a.667.667 0 00-1.334 0z"
      ></path>
      <path
        fill="#C8C8C8"
        d="M7.333 5.333v5.334a.667.667 0 101.334 0V5.333a.667.667 0 00-1.334 0z"
      ></path>
      <circle cx="11" cy="5.333" r="0.667" fill="#C8C8C8"></circle>
    </g>
  </svg>
)

const ChapterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <g>
      <path
        fill="#E66CFF"
        fillOpacity="0.98"
        fillRule="evenodd"
        d="M4.667 8c0 .518.565.838 1.01.572L7 7.777l1.324.795A.667.667 0 009.334 8V1.333a.667.667 0 00-.667-.666H5.333a.667.667 0 00-.666.666V8zm1.99-1.572L6 6.823V2h2v4.823l-.657-.395a.667.667 0 00-.686 0z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#9013FE"
        d="M3.333 2h7.334a2 2 0 012 2v8a2 2 0 01-2 2H4a.667.667 0 000 1.333h6.667A3.333 3.333 0 0014 12V4A3.333 3.333 0 0010.667.667h-8A.667.667 0 002 1.333V12a.667.667 0 101.333 0V2z"
      ></path>
      <circle cx="10.667" cy="12" r="0.667" fill="#FF9F00"></circle>
    </g>
  </svg>
)

const BookOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="16"
    fill="none"
    viewBox="0 0 17 16"
  >
    <path
      stroke="#CFCBD2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M0 0h4.8C6.567 0 8 1.592 8 3.556V16c0-1.473-1.075-2.667-2.4-2.667H0V0zM16 0h-4.8C9.433 0 8 1.592 8 3.556V16c0-1.473 1.075-2.667 2.4-2.667H16V0z"
      clipRule="evenodd"
    ></path>
  </svg>
)

const HeadphonesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="16"
    fill="none"
    viewBox="0 0 18 16"
  >
    <path
      stroke="#CFCBD2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M0 13.333V8a8 8 0 1116 0v5.333"
    ></path>
    <path
      fill="#CFCBD2"
      d="M15 10.778h1a1 1 0 00-1-1v1zm-14 0v-1a1 1 0 00-1 1h1zm12.556.778c0 .122-.1.222-.223.222v-2c-.982 0-1.777.796-1.777 1.778h2zm0 2.666v-2.666h-2v2.666h2zM13.333 14c.123 0 .223.1.223.222h-2c0 .982.796 1.778 1.777 1.778v-2zm.89 0h-.89v2h.89v-2zm-.223.222c0-.122.1-.222.222-.222v2c.982 0 1.778-.796 1.778-1.778h-2zm0-3.444v3.444h2v-3.444h-2zm-.667 1H15v-2h-1.667v2zm0-4a3.778 3.778 0 00-3.777 3.778h2c0-.982.796-1.778 1.777-1.778v-2zm2.667 0h-2.667v2H16v-2zm2 2a2 2 0 00-2-2v2h2zm0 4.444V9.778h-2v4.444h2zM14.222 18A3.778 3.778 0 0018 14.222h-2c0 .982-.796 1.778-1.778 1.778v2zm-.889 0h.89v-2h-.89v2zm-3.777-3.778A3.778 3.778 0 0013.333 18v-2a1.778 1.778 0 01-1.777-1.778h-2zm0-2.666v2.666h2v-2.666h-2zM0 7.778a2 2 0 00-2 2h2v-2zm2.667 0H0v2h2.667v-2zm3.777 3.778a3.778 3.778 0 00-3.777-3.778v2c.982 0 1.777.796 1.777 1.778h2zm0 2.666v-2.666h-2v2.666h2zM2.667 18a3.778 3.778 0 003.777-3.778h-2c0 .982-.795 1.778-1.777 1.778v2zm-.89 0h.89v-2h-.89v2zM-2 14.222A3.778 3.778 0 001.778 18v-2A1.778 1.778 0 010 14.222h-2zm0-4.444v4.444h2V9.778h-2zm4 4.444v-3.444H0v3.444h2zM1.778 14c.123 0 .222.1.222.222H0C0 15.204.796 16 1.778 16v-2zm.889 0h-.89v2h.89v-2zm-.223.222c0-.122.1-.222.223-.222v2c.982 0 1.777-.796 1.777-1.778h-2zm0-2.666v2.666h2v-2.666h-2zm.223.222a.222.222 0 01-.223-.222h2c0-.982-.795-1.778-1.777-1.778v2zm-1.667 0h1.667v-2H1v2z"
    ></path>
  </svg>
)

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="16"
    fill="none"
    viewBox="0 0 14 16"
  >
    <path
      stroke="#CFCBD2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M0 8v6.4A1.6 1.6 0 001.6 16h9.6a1.6 1.6 0 001.6-1.6V8M9.6 3.2L6.4 0 3.2 3.2M6.4 0v10.4"
    ></path>
  </svg>
)

export {
  BackIcon,
  SearchIcon,
  UserIcon,
  HomeIcon,
  BookIcon,
  LoadingIcon,
  StatisticsIcon,
  ChapterIcon,
  BookOpenIcon,
  HeadphonesIcon,
  ShareIcon
}
