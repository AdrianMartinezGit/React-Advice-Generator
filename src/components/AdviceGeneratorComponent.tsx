import '../App.css';
import patternDividerDesktop from '../assets/pattern-divider-desktop.svg'
import patternDividerMobile from '../assets/pattern-divider-mobile.svg'
import iconDice from '../assets/icon-dice.svg'

const AdviceGeneratorComponent = (props: {id: number, advice: string}) => {

  let propsID = props.id;
  let propsAdvice = props.advice;

  const handleClick = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='px-12 py-20 bg-[#313a49] rounded-2xl break-words'>
          <p className='font-semibold tracking-widest text-green-300 text-lg pb-8'>ADVICE #{propsID}</p>
          <p className='font-semibold tracking-normal text-gray-200 pb-12'>"{propsAdvice}"</p>
          <img src={patternDividerDesktop} className='hidden sm:block mx-auto'></img>
          <img src={patternDividerMobile} className='block sm:hidden mx-auto'></img>
        </div>
        <div className="flex absolute justify-center pt-64">
          <div className="bg-green-300 absolute flex items-center justify-center w-16 h-16 rounded-full hover:cursor-pointer hover:shadow-green-500 hover:shadow-2xl" onClick={handleClick}>
            <img src={iconDice} className="w-half h-half"/>
          </div>
        </div>
      </header>
    </div>
  )
}

export default AdviceGeneratorComponent
