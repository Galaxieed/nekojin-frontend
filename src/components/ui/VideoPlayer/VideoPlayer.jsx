import ReactPlayer from 'react-player';
export default function MyVideoPlayer() {
    return (
        <div style={{
            height: "100%",
        }}>
            <ReactPlayer 
                url={"https://www.youtube.com/watch?v=EYGGd2NKwtI&list=RDEYGGd2NKwtI&start_radio=1"}
                controls={true} 
                width="100%" 
                height="100%"
            />
        </div>
    )
}