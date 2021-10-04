export const Greeting = ({ name }) => {
  return (
    <p className="text-2xl py-[30px]">
      Hi, <span className="font-semibold text-pink">{name}</span> 👋
    </p>
  );
};
