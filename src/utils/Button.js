
const Button = ({lable}) => {
  return (
    <div>
        <button className='flex items-center justify-center px-7 py-4 max-sm:px-5 max-sm:py-2 gap-2 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-red-500'>
            {lable}
        </button>
    </div>
  )
}

export default Button