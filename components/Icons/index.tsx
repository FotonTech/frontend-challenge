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

export { BackIcon, SearchIcon, UserIcon, HomeIcon, BookIcon, LoadingIcon }
