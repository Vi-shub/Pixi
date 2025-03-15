"use client";
import { useEffect } from "react";
import { Curve } from "@/components";
import { Terms, Herolegal, LegalSocials} from "@/container";



export default function Legal() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Herolegal />
				<Terms/>
				{/* <Form /> */}
				<LegalSocials />
				{/* <FAQ /> */}
			</Curve>
		</>
	);
}
