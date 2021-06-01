import { FC } from 'react';
import { Actions } from "./actions/Actions";
import { list } from "./list/list";
import { Nav } from "./nav/Nav";

export const components: FC<any>[] = [Nav, list, Actions];

export * from './nav/Nav';
export * from './list/list';
export * from './actions/Actions';