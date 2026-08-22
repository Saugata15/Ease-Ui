import {
  ArrowUpRight,
  Heart,
  Linkedin,
  Sparkles,
  UserRound,
  Users,
} from "lucide-react";

import { Badge } from "@/components/Badge/Badge";

const creatorImage =
  "https://media.licdn.com/dms/image/v2/D5603AQHB8V9yKvkgBg/profile-displayphoto-crop_800_800/B56Z18NomAIoAI-/0/1775905447845?e=1788998400&v=beta&t=S7SdArgLQvIOt6SFo_VuOZ8e4rPhnO1UjDY2E4f95N4";

const mentorImage =
  "https://media.licdn.com/dms/image/v2/D5603AQGIB_XfEuhdmg/profile-displayphoto-scale_200_200/B56Z4BXncKGUAY-/0/1778139433856?e=2147483647&v=beta&t=8MrThTLHLuyRsukHL9542MS8HVANgZOQKB6hoqn3O6k";

interface PersonCardProps {
  type: "creator" | "mentor";
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

const PersonCard = ({
  type,
  name,
  role,
  description,
  image,
  linkedin,
}: PersonCardProps) => {
  const isCreator = type === "creator";

  return (
    <article
      className="
        group relative overflow-hidden
        rounded-3xl
        border border-(--border-color)
        bg-(--card-bg)
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-xl
        sm:p-8
      "
    >
      {/* Decorative glow */}
      <div
        className={`
          pointer-events-none
          absolute -right-20 -top-20
          h-48 w-48
          rounded-full
          blur-3xl
          transition-opacity duration-300
          ${
            isCreator
              ? "bg-(--primary-color) opacity-10 group-hover:opacity-20"
              : "bg-emerald-500 opacity-10 group-hover:opacity-20"
          }
        `}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Badge
            variant={isCreator ? "primary" : "success"}
            className="gap-1.5"
          >
            {isCreator ? (
              <UserRound size={13} />
            ) : (
              <Heart size={13} />
            )}

            {isCreator ? "Creator" : "Special Thanks"}
          </Badge>

          <Sparkles
            size={18}
            className={
              isCreator
                ? "text-(--primary-color)"
                : "text-emerald-500"
            }
          />
        </div>

        {/* Profile */}
        <div className="mt-8 flex items-center gap-5">
          {/* Image */}
          <div className="relative shrink-0">
            <div
              className={`
                absolute -inset-1
                rounded-2xl
                opacity-20 blur-md
                transition-opacity duration-300
                group-hover:opacity-40
                ${
                  isCreator
                    ? "bg-(--primary-color)"
                    : "bg-emerald-500"
                }
              `}
            />

            <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-box)">
              <img
                src={image}
                alt={name}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Status */}
            <span
              className={`
                absolute
                bottom-1
                right-1
                h-4
                w-4
                rounded-full
                border-2
                border-(--card-bg)
                ${
                  isCreator
                    ? "bg-(--primary-color)"
                    : "bg-emerald-500"
                }
              `}
            />
          </div>

          {/* Name */}
          <div className="min-w-0">
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {name}
            </h2>

            <p
              className={`
                mt-1
                text-sm
                font-medium
                ${
                  isCreator
                    ? "text-(--primary-color)"
                    : "text-emerald-500"
                }
              `}
            >
              {role}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-7 text-sm leading-7 text-(--muted-text-color)">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between border-t border-(--border-subtle) pt-5">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-(--text-color)
              transition-colors
              hover:text-(--primary-color)
            "
          >
            <Linkedin size={15} />

            LinkedIn

            <ArrowUpRight size={14} />
          </a>

          <span className="text-xs text-(--muted-text-color)">
            {isCreator
              ? "Building Ease UI"
              : "Mentorship & Guidance"}
          </span>
        </div>
      </div>
    </article>
  );
};

const AboutCreator = () => {
  return (
    <section className="space-y-6">
      {/* Section heading */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">
          The People Behind Ease UI
        </h2>

        <p className="max-w-2xl text-sm leading-6 text-(--muted-text-color)">
          Ease UI is built through continuous learning,
          experimentation, guidance, and a passion for creating
          better developer experiences.
        </p>
      </div>

      {/* People */}
      <div className="grid gap-5 lg:grid-cols-2">
        <PersonCard
          type="creator"
          name="Saugata Das"
          role="Creator of Ease UI"
          image={creatorImage}
          linkedin="https://www.linkedin.com/in/saugata-das/"
          description="Ease UI was created as a project to explore modern React component architecture, reusable UI patterns, TypeScript, and scalable frontend development."
        />

        <PersonCard
          type="mentor"
          name="Devendra Dhote"
          role="Mentor"
          image={mentorImage}
          linkedin="https://www.linkedin.com/in/devendra-dhote/"
          description="Special thanks to Devendra Dhote for his guidance, mentorship, and support throughout the learning and development journey behind Ease UI."
        />
      </div>
    </section>
  );
};

export default AboutCreator;