import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function InputPhone(props: any) {
  const customInputStyle = {
    width: "100%",
    backgroundColor: "#e9e4e4",
    outline: "none",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "0",
    transition: "border 0.3s ease, outline 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <PhoneInput
      country={"vn"}
      value={props.value}
      onChange={props.onChange}
      inputStyle={customInputStyle}
    />
  );
}

export default InputPhone;
