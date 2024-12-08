import { ImageResponse } from "next/og";

// export const runtime = "edge";

// Image metadata
export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <section className="bg-white w-full flex items-center justify-center h-full text-5xl">
        <h1>{slug}</h1>
        <p>Evento : Browse events around you</p>
      </section>
    )
  );
}
