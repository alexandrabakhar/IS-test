import { useEffect } from "react";

export const useInfiniteScroll = (
	callback: () => Promise<void>,
	isLoading: boolean,
	ref: React.MutableRefObject<HTMLDivElement | null>
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
