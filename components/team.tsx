import Image from "next/image";
import { MapPin } from "lucide-react";

interface Producer {
  name: string;
  photo: string;
  role: string;
  region: string;
  bio: string;
  specialties: string[];
}

const producers: Producer[] = [
  {
    name: "Adam Winters",
    photo: "/team/adam.webp",
    role: "Producer & Founder",
    region: "Colorado",
    bio: "Creates compelling short-form videos for residential homes, luxury properties, and real estate professionals. Every video is designed to highlight what makes a property stand out and capture the attention of today's buyers.",
    specialties: ["Residential", "Luxury", "Investment"],
  },
  {
    name: "Caitlyn Sharp",
    photo: "/team/caitlyn.webp",
    role: "Producer",
    region: "Louisiana",
    bio: "Specializes in creating engaging videos for residential properties, luxury homes, and property management companies. With a focus on attracting qualified renters and buyers, every video is crafted to showcase each property's strongest features.",
    specialties: ["Residential", "Luxury", "Property Management"],
  },
  {
    name: "Carl Sasyn",
    photo: "/team/carl.webp",
    role: "Producer",
    region: "Texas",
    bio: "Produces high-impact short-form videos for residential, commercial, and land & ranch properties. From family homes to investment properties and expansive acreage, every video is tailored to connect with the right audience and drive interest.",
    specialties: ["Residential", "Ranch & Land", "Commercial"],
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-violet">
            Our Producers
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-brand-blue text-balance sm:text-4xl md:text-5xl">
            The people behind the conversations.
          </h2>
          <p className="mt-4 text-base text-muted-foreground text-pretty sm:text-lg">
            Every session is guided by a U.S.-based producer who knows your
            region, your clients, and how homes actually get sold there.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {producers.map((p) => (
            <li
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-violet/30 hover:shadow-[0_20px_50px_-25px_rgba(11,29,81,0.25)]"
            >
              {/* Portrait header */}
              <div className="relative aspect-[5/4] w-full overflow-hidden bg-gradient-to-br from-brand-blueDeep via-brand-blue to-brand-violet">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-60"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 25% 20%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 75% 80%, rgba(139,124,252,0.5), transparent 50%)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/30 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] sm:h-44 sm:w-44">
                    <Image
                      src={p.photo}
                      alt={`Portrait of ${p.name}, ${p.role} based in ${p.region}`}
                      fill
                      sizes="(max-width: 768px) 40vw, 200px"
                      className="object-cover"
                      priority={p.name === "Adam Winters"}
                    />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
                  <MapPin className="h-3 w-3" />
                  {p.region}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <h3 className="text-lg font-semibold text-brand-blue">
                  {p.name}
                </h3>
                <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-violet">
                  {p.role}
                </p>

                <p className="mt-5 text-[14.5px] leading-relaxed text-muted-foreground">
                  {p.bio}
                </p>

                <div className="mt-auto pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/70">
                    Specialties
                  </p>
                  <p className="mt-2 text-[13.5px] font-medium leading-relaxed text-brand-blue">
                    {p.specialties.join(" · ")}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
