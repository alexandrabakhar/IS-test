import { useEffect } from "react";
import { UseInfiniteScroll } from "../types";

export const useInfiniteScroll: UseInfiniteScroll = (
	callback,
	isLoading,
	ref
) => {
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting && !isLoading) {
					callback();
				}
			},
			{ root: null, rootMargin: "20px", threshold: 0.5 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, [isLoading, callback, ref]);
};
