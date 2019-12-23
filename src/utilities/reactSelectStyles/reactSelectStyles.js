import jsColors from "./../jsColors/jsColors"

export default {
    styles: {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused? jsColors.primaryDarker : state.isSelected? jsColors.primaryDarkest : jsColors.primaryDarkest,
        }),
        control: (provided, state) => ({
            ...provided,
            backgroundColor: jsColors.primaryDarkest,
            borderColor: jsColors.primaryDarker,
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: jsColors.primaryDarkest,
            borderColor: jsColors.primaryDarker,
        }),
    }

}
