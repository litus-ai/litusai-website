import TeamMember, {Member} from "@/components/Team/TeamMember";
import SectionTitle from "@/components/Common/SectionTitle";


const team: Member[] = [
    {
        fullname: "Gianmarco Sgammini",
        role: "Chief Executive Officer",
        image: "/images/team/gianmarco.jpg",
        description: "Driving Litus AI forward.",
        social: {
            linkedin: 'gianmarco-sgammini-16b5b7175',
        }
    },
    {
        fullname: "Edoardo Barba",
        role: "Chief Science Officer",
        image: "/images/team/edoardo.jpg",
        description: "Leading the science behind Manent.",
        social: {
            github: 'edobobo',
            twitter: 'edoardo_barba',
            linkedin: 'edoardo-barba-799825127',
        }
    },
    {
        fullname: "Luigi Procopio",
        role: "Chief Technology Officer",
        image: "/images/team/luigi.jpg",
        description: "Making Manent support millions of you.",
        social: {
            github: 'poccio',
            twitter: 'luigi_proc',
            linkedin: 'luigi-procopio',
        }
    },
    {
        fullname: "Niccolò Campolungo",
        role: "Chief Innovation Officer",
        image: "/images/team/niccolo.jpg",
        description: "Making Manent interactions seamless.",
        social: {
            github: 'valahaar',
            twitter: 'valahaar',
            linkedin: 'niccolò-campolungo-9375311ba',
            // email: 'nick',
        }
    },
    {
        fullname: "Beatrice Barba",
        role: "Chief Marketing Officer",
        image: "/images/team/beatrice.jpg",
        description: "Spreading Manent everywhere.",
        social: {
            linkedin: 'beatrice-barba-b11226143',
        }
    },
];

const Team = () => {
    return (
        <section
            id="team"
            className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
        >
            <div className="container">
                <SectionTitle
                    title="Our Team"
                    paragraph="The amazing team behind Litus AI"
                    center
                />

                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-5 justify-evenly">
                    {team.map((member) => (
                        <TeamMember key={member.fullname} member={member} />
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Team;