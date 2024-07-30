const Button = (props) => {
    return(
        <button className="w-[209px] font-bold flex justify-center mr-14 pt-3 pb-4 bg-[#473BF0] rounded-lg text-white">
            {props.name}
        </button>
    )
}

export default Button;