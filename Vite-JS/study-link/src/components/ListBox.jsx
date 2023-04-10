const ListBox = ({ name, link, index }) => {
  return (
    <div className="flex gap-2 border-2 border-[var(--fifteenthColor)] my-1 p-1 justify-between px-5 py-1 w-full text-xl">
      <h3 className="text-[var(--eleventhColor)]">{name}</h3>
      <a
        href={link}
        target="_blank"
        className="text-[var(--ninthColor)] hover:opacity-90 text-sm md:text-lg"
      >
        Pergi ke...
      </a>
    </div>
  );
};
export default ListBox;
