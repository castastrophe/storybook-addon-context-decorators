import React, { Fragment, useCallback } from 'react';
import { useGlobalTypes, useParameter } from '@storybook/api';
import { Separator, ListItemProps, IconsProps } from "@storybook/components";

import { Switch } from './Switch';
import { Dropdown } from './Dropdown';

import { TOOL_ID, PARAM_KEY } from '../constants';

// loading?: boolean;
//     left?: ReactNode;
//     title?: ReactNode;
//     center?: ReactNode;
//     right?: ReactNode;
//     active?: boolean;
//     disabled?: boolean;
//     href?: string;
//     LinkWrapper?: LinkWrapperType;

export type ParamItem = {
  fill?: string;
  value?: string | boolean;
} & ListItemProps;

export interface Params {
    /** The label to show */
    title: string;
    /** An optional icon */
    icon?: IconsProps['icon'];
    /** The items to show in the dropdown */
    items?: ParamItem[];
    default?: any;
};

// export const isReduceMotionEnabled = () => {
//   const prefersReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
//   return prefersReduceMotion.matches;
// };

export const Tool = () => {
    // Fetch parameters from storybook by PARAM_KEY
    const params = useParameter(PARAM_KEY, {});
     
     // From toolbar add-on approach - need this?
    //  const globalTypes = useGlobalTypes();
    //  const globalIds = Object.keys(globalTypes).filter((id) => !!globalTypes[id][PARAM_KEY]);
    //  console.log(params, globalIds);
    //  if (!globalIds.length) {
    //    return null;
    //  }

    if (!params) return null;

    return (
      <Fragment key={TOOL_ID}>
        <Separator />
          {Object.keys(params).map((key: keyof typeof params) => {
            const value: Params = params[key];
            if (!value) return null;

            // If there are no defined options, we assumed the control is a boolean
            if (!Object.hasOwnProperty.call(value, 'items')) {
              // @todo: fetch value from globals?
              const checked = value.default && typeof value.default === 'boolean' ? value.default : false;
                return (
                  <Switch
                    key={key}
                    label={value.title}
                    checked={checked}
                    onclick={() => {}}
                  ></Switch>
              );
            }
            return (
              <Dropdown
                key={key}
                title={value.title}
                items={value.items}
              ></Dropdown>
            );
        })}
        <Separator />
      </Fragment>
    );
};

// const toggleMotion = useCallback(
//   () => {},
//   // updateParams({
//   //     reduceMotion: reduceMotion ? undefined : true,
//   //   }),
//   [reduceMotion]
// );

// // Boolean button type
// return (
//   <IconButton
//     key={TOOL_ID}
//     active={!!reduceMotion}
//     title="Reduce motion"
//     onClick={toggleMotion}
//   >
//     Reduce motion
//   </IconButton>
// );
// };
