import type { NextPage } from 'next';
import { Anchor } from '../components/CustomHtml';
import { Button } from '@/components/ui/button';
import { useContext, useEffect, useState, memo } from 'react';
import { ProjectListContext } from '../context';
import { useRouter } from 'next/router';
import { Separator } from '@/components/ui/separator';
import ReactGA from 'react-ga4';
import dynamic from 'next/dynamic';
import projectsData from '../data/projects.json'; // Directly import project data
import { ProjectCardProps } from '../components/ProjectCard'; // Import the type for projects

const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
if (TRACKING_ID) ReactGA.initialize(TRACKING_ID);

// Memoized components for performance - defined first
const LoadingSpinner = memo(() => (
  <div className="flex justify-center items-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
));
LoadingSpinner.displayName = 'LoadingSpinner';

// Dynamic imports for performance (client-side only) - defined after LoadingSpinner
const ProjectCard = dynamic(() => import('../components/ProjectCard'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const EmailBox = dynamic(() => import('../components/EmailBox'), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

// Static image imports (more efficient for images)
import uopxLogo from '../images/uopx-phoenixbird-red.png';
import vkdiamLogo from '../images/vkdiamonds_logo.png';
import asuLogo from '../images/asu_logo.png';
import mithibaiLogo from '../images/mithibai_college_logo.png';

const ExperienceItem = memo(
  ({
    dateRange,
    logo,
    logoAlt,
    duration,
    title,
    company,
    description,
    onLinkClick,
  }: {
    dateRange: string;
    logo: any;
    logoAlt: string;
    duration: string;
    title: string;
    company: string;
    description?: string;
    onLinkClick: () => void;
  }) => (
    <>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="text-4xl xl:text-5xl mb-6 lg:mb-0 flex items-center justify-center Arialic_Hollow text-muted-foreground font-light">
          {dateRange}
        </div>
        <div className="flex justify-center">
          <img
            src={logo?.src || logo}
            alt={logoAlt}
            className="h-12 mr-4 mt-1 hidden sm:block"
            loading="lazy"
          />
          <div className="flex flex-col justify-between sm:w-[500px]">
            <div className="text-muted-foreground font-light">{duration}</div>
            <div className="text-lg sm:text-xl">
              {title}{' '}
              <Anchor
                href={`https://www.google.com/search?q=${company
                  .toLowerCase()
                  .replace(/\s+/g, '+')}`}
                onClick={onLinkClick}
              >
                {company}
              </Anchor>
            </div>
            {description && (
              <div className="text-light text-muted-foreground mt-2">
                {description}
              </div>
            )}
          </div>
        </div>
      </div>
      <Separator className="my-4" />
    </>
  )
);
ExperienceItem.displayName = 'ExperienceItem';

const Home: NextPage = () => {
  const { projectList, setProjectList } = useContext(ProjectListContext);
  const [top6Projects, setTop6Projects] = useState<ProjectCardProps[]>([]);
  // Removed isLoading state
  const clientRouter = useRouter();

  useEffect(() => {
    setTop6Projects(
      [...projectList].sort((a, b) => b.priority - a.priority).slice(0, 6)
    );
  }, [projectList]);

  useEffect(() => {
    // google analytics
    ReactGA.send({ hitType: 'pageview', page: '/', title: 'Home' });

    // Removed the async call to fetch stars.
    // The project list is now set directly from the imported JSON data.
    setProjectList(projectsData as ProjectCardProps[]);
  }, [setProjectList]);

  const handleLinkClick = (action: string) => {
    ReactGA.event({
      category: 'Link.Click',
      action,
    });
  };

  const educationList = [
  {
    dateRange: "Aug '22 - May '26",
    logo: asuLogo,
    logoAlt: "Arizona State University Logo",
    duration: "4 years",
    title: "B.S. Computer Science at",
    company: "Arizona State University",
    description: "Focus on Software Engineering and subjects like Operating Systems, Principles of Programming Languages, Data Structures & Algorithms, Object-Oriented Programming, Human Computer Interaction.",
  },
  {
    dateRange: "July '18 - April '22",
    logo: mithibaiLogo,
    logoAlt: "Mithibai College Logo",
    duration: "4 years",
    title: "High School",
    company: "Mithibai College",
    description: "Concentrated in Maths, Chemistry and Physics providing foundation for further education.",
  },
];

  return (
    <div className="relative my-10 sm:my-20">
      <div className="mt-10 sm:mt-20 flex">
        <div className="">
          <div className="text-4xl md:text-5xl font-medium">
            <div className="">Hey, I'm Naimish Maniya</div>
            <div className="mt-4">
              <span className="hidden sm:inline-block mr-4">I'm a </span>
              <span className="text-primary">Software Engineer ⚡</span>
            </div>
          </div>
          <div className="text-muted-foreground font-light space-y-1 mt-8">
            <p className="">
              I'm a developer based in{' '}
              <Anchor
                href="https://www.google.com/maps/place/Tempe,+AZ/@33.3922932,-112.0103134,12z/data=!3m1!4b1!4m6!3m5!1s0x872b0898a6aa80e3:0xa2dd4aad392cb41f!8m2!3d33.4255104!4d-111.9400054!16zL20vMHFwc24?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                target={'_blank'}
                onClick={() => handleLinkClick('Tempe Location')}
              >
                Tempe, AZ
              </Anchor>
              , with 6 months of internship experience working with various software
              applications, and teams from US and India. I'm all about{' '}
              <Anchor
                href="https://i.etsystatic.com/29656089/r/il/36a0ad/3827032526/il_fullxfull.3827032526_189y.jpg"
                target={'_blank'}
                onClick={() => handleLinkClick('Learning Quote')}
              >
                learning
              </Anchor>
              by doing and putting my skills to work.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="mt-20 sm:mt-32">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-4xl sm:text-5xl font-medium">Experience</div>
          <Button
            variant="outline"
            onClick={() => clientRouter.push('/resume')}
          >
            View Resume
          </Button>
        </div>
        <div className="text-muted-foreground font-light mt-2 mb-4">
          I have developed a strong foundation in <span className="">Software Engineering</span> 
          through internships, and hackathons always prioritizing the user's needs. I combine 
          technical precision with a strong focus on user needs, delivering solutions that 
          seamlessly align business objectives with intuitive user experiences.
        </div>
        <Separator className="my-4" />

        <ExperienceItem
          dateRange="May '25 - Aug '25"
          logo={uopxLogo}
          logoAlt="University of Phoenix Logo"
          duration="Internship - 3 months"
          title="Software Engineer at"
          company="University of Phoenix"
          description="I developed robust, responsive components with a focus on accessibility, enhancing user experiences alongside Adobe AEM, Adobe ADA, and Adobe Target. Worked on enhancing site performance, improving accessibility compliance, and integrating SEO best practices to drive engagement and usability."
          onLinkClick={() => handleLinkClick('UOPX Link')}
        />

        <ExperienceItem
          dateRange="April '22 - July '22"
          logo={vkdiamLogo}
          logoAlt="VK Diam Logo"
          duration="Internship - 3 months"
          title="Software Engineer at"
          company="VK Diam"
          description="Built CMS pages for centralized diamond cataloging, automated quality assessment logging with Python, and developed a reporting system to track production metrics for better supply chain decisions."
          onLinkClick={() => handleLinkClick('VKDiam Link')}
        />

        <div
          onClick={() => {
            handleLinkClick('Recommendations Link');
            window.open('https://www.linkedin.com/in/naimishmaniya1402/', '_blank');
          }}
          className="text-muted-foreground underline hover:text-ring cursor-pointer"
        >
          See my recommendations on LinkedIn
          {' ->'}
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-20 sm:mt-32">
        <div className="flex justify-between mb-10 items-center">
          <div className="text-4xl sm:text-5xl font-medium">Projects</div>
          <Button
            variant="outline"
            onClick={() => clientRouter.push('/projects')}
          >
            View all
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-auto auto-rows-fr gap-x-5 gap-y-5">
          {/* Removed isLoading ternary and now directly map the projects */}
          {top6Projects.map((project, i) => (
            <ProjectCard key={`${project.title}-${i}`} {...project} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-20 sm:mt-32">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-4xl sm:text-5xl font-medium">Education</div>
        </div>
        <div className="text-muted-foreground font-light mt-2 mb-4">
          My academic work builds the same foundation I apply in projects and internships, strong CS fundamentals,
          data handling, testing, and user-focused engineering.
        </div>
        <Separator className="my-4" />
        {educationList.map((edu, idx) => (
          <ExperienceItem
            key={`edu-${idx}`}
            {...edu}
            onLinkClick={() => handleLinkClick(`Education Link: ${edu.company}`)}
          />
        ))}
      </div>

      {/* Contact email section */}
      <div className="mt-20 sm:mt-32">
        <div className="text-4xl sm:text-5xl font-medium">Contact Me</div>
        <div className="font-light text-muted-foreground mt-4 mb-10">
          I'm always open to new opportunities and connections. Feel free to
          reach out to me at{' '}
          <Anchor
            onClick={() => handleLinkClick('MailTo Link')}
            href="mailto:nmaniya@asu.edu"
          >
            nmaniya@asu.edu
          </Anchor>
          !
        </div>
        <EmailBox />
      </div>
    </div>
  );
};

export default memo(Home);