import React from "react";
import styles from "./Video_detail.module.css";

const Video_detail = ({ video, video: { snippet } }) => {
	return (
		<div className={styles.video}>
			<iframe
				className={styles.thumbnail}
				id={video.id}
				type='text/html'
				width='100%'
				height='500px'
				frameBorder='0'
				allowFullScreen
				src={`https://www.youtube.com/embed/${video.id}`}
			/>
			<div className={styles.titleBox}>
				<h2 className={styles.title}>{snippet.title}</h2>
				<p className={styles.channelTitle}>{snippet.channelTitle}</p>
				<p className={styles.description}>{snippet.description}</p>
			</div>
		</div>
	);
};

export default Video_detail;
