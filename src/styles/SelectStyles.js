export const SelectStyles = (error) => { 
    const brandColor = "#00D0BE";
    const errorColor = "#a94442";
 
    let style  = {
        control: (styles, state) => ({
            ...styles,
            backgroundColor: "#FFFFFF",
            height:"42px",
            fontFamily: "matteomedium",
            fontSize:"16px",
            fontWeight: "bolder",
            border: error ? `1px solid ${errorColor}` : `1px solid #B3F1EC`,
            borderRadius: "0px !important",
            boxShadow: "none !important",
            borderColor: state.isFocused  ? brandColor : '#B3F1EC',
            '&:hover': {
                borderColor: state.isFocused
                    ? brandColor
                    : "#B3F1EC",
            }
        }),
        indicatorSeparator: () => ({display:'none'}),
        noOptionsMessage: styles => ({
            ...styles,
            textAlign: "left",
            borderRadius: "0px !important"

        }),
        menu: styles => ({
            ...styles,
            borderRadius: "4px 4px 0px 0px !important",
            fontSize:"14px"
        })
    }
    return style;
};
