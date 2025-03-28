interface SectionListProps {
  title: string;
  items: {
    text: string;
    prefix?: string;
  }[];
}

export default function SectionList({ title, items }: SectionListProps) {
  return (
    <section className="mt-10 px-4 flex flex-col w-full">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-800 mb-6">
        {title}
      </h2>
      <ul className="list-disc pl-6 text-sm md:text-md text-gray-600 space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            {item.prefix && (
              <span className="font-semibold">({item.prefix})</span>
            )}{" "}
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
