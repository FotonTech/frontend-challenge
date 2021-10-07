import Link from "next/link";

export const SectionCard = ({ title, titleAction, children }) => {
  return (
    <section className="mb-[30px]">
      <div className="flex justify-between mb-[15px]">
        <h3 className="text-lg">{title}</h3>
        {titleAction?.name && (
          <Link href={titleAction.link}>
            <a className="text-sm text-blue">{titleAction.name}</a>
          </Link>
        )}
      </div>
      {children}
    </section>
  );
};
