import React, { memo, useMemo } from "react";
import styles from "./Video_item.module.css";

const Video_item = memo(
	({ video, video: { snippet }, onVideoClick, display }) => {
		const displayType = display === "list" ? styles.list : styles.grid;
		return (
			<li
				className={`${styles.video} ${displayType}`}
				onClick={() => onVideoClick(video)}
			>
				<img
					className={styles.thumbnail}
					src={snippet.thumbnails.medium.url}
					alt='video'
				/>
				<div className={styles.titleBox}>
					<p className={styles.title}>{snippet.title}</p>
					<p className={styles.subtitle}>{snippet.channelTitle}</p>
				</div>
			</li>
		);
	},
);

export default Video_item;
