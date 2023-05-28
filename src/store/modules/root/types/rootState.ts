import { PageModeType } from "@/store/modules/root/types/pageModeType";

interface IRootState {
	count: number;
	pageMode: PageModeType;
	isFitAppLoading: boolean;
}
export default IRootState
