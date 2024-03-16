export const styles = {
  container: {
    width: "100%",
    height: "100vh",
    background:
      "linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background 0.5s ease",
  },
  darkContainer: {
    background: "linear-gradient(to bottom, #283048, #859398)",
    transition: "background 0.5s ease",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  appheading: {
    fontSize: { xs: "1rem", md: "2rem" },
    fontWeight: "600",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  },

  converterBox: {
    width: "70rem",
    height: "30rem",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    display: "flex",
    borderRadius: "10px",
    margin: "10px",
    padding: "0 10px",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
  },
  darkConverterBox: {
    width: "70rem",
    height: "30rem",
    display: "flex",
    borderRadius: "10px",
    margin: "10px",
    padding: "0 10px",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    boxShadow: "rgba(120, 190, 121, 0.2) 0px 7px 29px 0px",
  },
  sidebar: {
    width: { xs: "100%", md: "15%" },
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: { xs: "3rem", md: "4rem" },
  },
  sidebarBox: {
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    margin: "15px",
    display: "flex",
    width: { xs: "100%", md: "50%" },
    padding: { xs: "0 10px", md: "10px 0" },
    flexDirection: { md: "column" },
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "10px",
  },
  helpIcon: {
    fontSize: "2rem",
    color: "#7A00FF",
    cursor: "pointer",
  },
  appSection: {
    margin: { md: "15px" },
    width: { xs: "100%", md: "85%" },
    height: "10rem",
    padding: { xs: "10px", md: "0" },
  },
  select: {
    '& input[type="number"]': {
      "-webkit-appearance": "none",
      MozAppearance: "textfield",
      appearance: "textfield",
    },
    '& input[type="number"]::-webkit-inner-spin-button': {
      "-webkit-appearance": "none",
    },
    '& input[type="number"]::-webkit-outer-spin-button': {
      "-webkit-appearance": "none",
    },
    fontWeight: "600",
  },
  textField: {
    "& .MuiInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "transparent",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
    '& input[type="number"]': {
      "-webkit-appearance": "none",
      MozAppearance: "textfield",
      appearance: "textfield",
    },
    '& input[type="number"]::-webkit-inner-spin-button': {
      "-webkit-appearance": "none",
    },
    '& input[type="number"]::-webkit-outer-spin-button': {
      "-webkit-appearance": "none",
    },
    fontWeight: "600",
  },
  menuItem: {
    fontWeight: "600",
    color: "#000",
  },
  darkMenuItem: {
    fontWeight: "600",
    color: "#E5E5E5",
  },
  selectBox: {
    margin: "20px 0",
    display: "flex",
    flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
    justifyContent: "space-between",
    alignItems: "center",
  },
  textFieldBox: {
    width: "100%",
    margin: { md: "50px 0" },
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fromSelect: {
    width: { xs: "100%", md: "40%" },
  },
  fromTextField: {
    width: { xs: "100%", md: "40%" },
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
    borderRadius: "5px",
    paddingLeft: "10px",
  },
  toSelect: {
    width: { xs: "100%", md: "40%" },
  },
  toTextField: {
    width: { xs: "100%", md: "40%" },
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
    borderRadius: "5px",
    marginLeft: { xs: "10px", md: "0" },
    paddingLeft: "10px",
  },
  swapBtn: {
    fontSize: "2rem",
    cursor: "pointer",
    transform: { xs: "rotate(90deg)", md: "rotate(0deg)" },
    transition: "transform 0.5s ease",
    margin: { xs: "20px 0", md: "0 10px" },
  },
  appsectionheadBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mode: {
    boxShadow:
      "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    padding: "5px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
  errorBox: {
    display: "flex",
    alignItems: { md: "center" },
    padding: { xs: "10px 0", md: "0" },
  },
  error: {
    color: "red",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    fontWeight: "500",
    fontSize: { xs: "14px", md: "18px" },
    textAlign: "justify",
  },
};
