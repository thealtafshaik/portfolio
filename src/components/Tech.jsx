import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import useScreenSize from '../hooks/useScreenSize'

const Tech = () => {
  const isMobile = useScreenSize(500);
  const MOBILE_TECHS = [
    "Angular",
    "dotnet",
    "Node JS",
    "MongoDB",
    "Tailwind CSS"
  ];

  const visibleTechnologies = isMobile
    ? technologies.filter((tech) =>
      MOBILE_TECHS.includes(tech.name)
    )
    : technologies;
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {visibleTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")