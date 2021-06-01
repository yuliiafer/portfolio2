import { FC } from 'react';
import { Actions } from "./actions/Actions";
import { Ellist } from "./list/Ellist";
import { Nav } from "./nav/Nav";

export const components: FC<any>[] = [Nav, Ellist, Actions];

export * from './nav/Nav';
export * from './list/Ellist';
export * from './actions/Actions';