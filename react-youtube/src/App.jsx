import React, { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import Nav from "./components/nav/Nav";
import Video_list from "./components/video_list/Video_list";
import Video_detail from "./components/video_detail/Video_detail";

const App = ({ youtube }) => {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState(null);

	const search = useCallback(
		(query) => {
			setSelectedVideo(null);
			youtube
				.fetchSearchData(query) //
				.then((videos) => setVideos(videos));
		},
		[youtube],
	);

	useEffect(() => {
		youtube
			.fetchVideoData() //
			.then((videos) => setVideos(videos));
	}, [youtube]);

	if (!videos) return <div>loading...</div>;

	return (
		<div className={styles.container}>
			<Nav onSearch={search} />
			<section className={styles.content}>
				{selectedVideo && (
					<div className={styles.detail}>
						<Video_detail video={selectedVideo} />
					</div>
				)}

				<Video_list
					videos={videos}
					onVideoClick={setSelectedVideo}
					display={selectedVideo ? "list" : "grid"}
				/>
			</section>
		</div>
	);
};

export default App;
