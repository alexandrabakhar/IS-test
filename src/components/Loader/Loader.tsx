import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/store";
import S from "./styles.module.css";

export const Loader = () => {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	const { isRefetching, isLoading } = useAppSelector((state) => state.load);
	const isFetching = isLoading || isRefetching;

	const completed = 100;
	if (filled > 0 && !isFetching) setFilled(0);

	useEffect(() => {
		setIsRunning(true);
		if (filled > completed) {
			setFilled(0);
		}
		if (isRunning) setTimeout(() => setFilled((prev) => (prev += 0.5)), 1);
	}, [filled, isRunning, completed, isFetching]);
	return (
		<div
			className={S.loader}
			style={{
				width: `${filled}%`,
			}}
			data-testid="loader"
		></div>
	);
};
