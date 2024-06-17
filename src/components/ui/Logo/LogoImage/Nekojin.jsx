import logo from '../../../../assets/Nekojin.jpg';

export default function NekojinImage() {
    const style = {
        borderRadius: "50%",
        height: "35px"
    }
    return (
        <img src={logo} alt="Logo" style={style} />
    )
}