export default function NekojinText() {
    const style = {
        h3: {
            fontWeight: "500",
        },
        span: {
            color: "orange",
            fontWeight: "600"
        }
    }
    return (
        <h3 style={style.h3}><span style={style.span}>Neko</span>jin</h3>
    )
}