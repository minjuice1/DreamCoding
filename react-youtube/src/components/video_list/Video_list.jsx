import React from "react";
import Video_item from "../video_item/Video_item";
import styles from "./Video_list.module.css";

const Video_list = ({ videos, onVideoClick, display }) => {
	const displayType = display === "list" ? styles.list : styles.grid;
	return (
		<ul className={`${styles.listBox} ${displayType}`}>
			{videos.map((video) => (
				<Video_item
					key={video.id}
					video={video}
					onVideoClick={onVideoClick}
					display={display}
				/>
			))}
		</ul>
	);
};

export default Video_list;
