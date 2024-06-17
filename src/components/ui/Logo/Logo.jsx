import NekojinImage from "./LogoImage/Nekojin";
import NekojinText from "./Text/Nekojin"
export default function MyLogo() {
    const style = {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        cursor: "pointer",
    }
    return (
        <div style={style}>
            <NekojinImage />
            <NekojinText />
        </div>
    )
}