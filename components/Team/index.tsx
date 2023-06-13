import TeamMember, {Member} from "@/components/Team/TeamMember";
import SectionTitle from "@/components/Common/SectionTitle";


const team: Member[] = [
    {
        fullname: "Gianmarco Sgammini",
        role: "Chief Executive Officer",
        image: "/images/team/gianmarco.jpg",
        description: "Driving Sunglasses.ai forward."
    },
    {
        fullname: "Edoardo Barba",
        role: "Chief Science Officer",
        image: "/images/team/edoardo.jpg",
        description: "Leading the science behind Manent.",
        social: {
            github: 'edobobo',
            twitter: 'edoardo_barba',
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
        }
    },
    {
        fullname: "Niccolò Campolungo",
        role: "Chief Product Officer",
        image: "/images/team/niccolo.jpg",
        description: "Making Manent interactions seamless.",
        social: {
            github: 'valahaar',
            twitter: 'valahaar',
            linkedin: 'niccolò-campolungo-9375311ba'
        }
    },
    {
        fullname: "Beatrice Barba",
        role: "Chief Marketing Officer",
        image: "/images/team/beatrice.jpg",
        description: "Spreading Manent everywhere."
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
                    paragraph="The amazing team behind Sunglasses.ai"
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