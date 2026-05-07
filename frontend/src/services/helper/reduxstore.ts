import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import type { AppDispatch, RootState } from "../../type/type/globalType/redux.type";





export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSeletor: TypedUseSelectorHook<RootState> = useSelector;