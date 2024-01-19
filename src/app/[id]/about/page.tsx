import { Metadata, ResolvingMetadata } from "next";

type PageProps = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: "Pikachu About",
    description: "a",
  };
}

export default function Page({ params }: PageProps) {
  return <h1>About</h1>;
}
