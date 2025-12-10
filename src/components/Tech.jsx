import { useState } from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import useScreenSize from '../hooks/useScreenSize'
import { FiMinus, FiPlus } from 'react-icons/fi'

const Tech = () => {
  const isMobile = useScreenSize(500);
  const MOBILE_TECHS = [
    "Angular",
    "dotnet",
    "Node JS",
    "MongoDB",
    "Tailwind CSS"
  ];
  const [open, setOpen] = useState(false);

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
      {isMobile && (
        <div className="w-full max-w-sm rounded-xl border border-gray-700 bg-black/30 p-4 text-center text-sm text-gray-300">
          <div className="flex items-center justify-center gap-2">
            <span>
              Viewing limited skills on mobile.
              <br />
              Switch to desktop for the full stack.
            </span>

            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-[#050816] transition bg-white rounded-3xl cursor-pointer hover:scale-110"
            >
              {open ? <FiMinus size={18} /> : <FiPlus size={18} />}
            </button>
          </div>

          {open && (
            <p className="mt-3 text-xs text-gray-400 leading-relaxed">
              Mobile devices can reliably render only a limited number of 3D
              elements at once. To ensure smooth performance and stability, the
              full skill set is optimized and displayed in desktop view.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default SectionWrapper(Tech, "")