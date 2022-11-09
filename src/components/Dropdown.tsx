import React, { Component, useCallback } from 'react';

import { Icons, IconButton, WithTooltip, TooltipLinkList, ListItemProps, IconsProps } from "@storybook/components";
import { useGlobals } from '@storybook/api';
import { PARAM_KEY } from '../constants';

const [globals, updateGlobals] = useGlobals();

import { Params } from './Tool'

export const Dropdown = ({ title, icon, items }: Params) => {
        return (
            <WithTooltip
                placement='top'
                trigger='click'
                closeOnClick
                tooltip={({ onHide }) => (
                <TooltipLinkList
                    links={Object.entries(items).map(([key, value]) => ({
                        id: key,
                        title: value.title,
                        selected: key === globals[PARAM_KEY].value || key === value.defaultValue,
                        onClick: () => {
                            onHide();
                            useCallback(
                                (value: string) => {
                                  updateGlobals({ [PARAM_KEY]: { ...globals[PARAM_KEY], value } });
                                },
                                [value, globals, updateGlobals]
                              )(key);
                        },
                        right: <Icons style={{ fill: value.fill }} icon="circle" />,
                    }))}/>
                )}
            >
                <IconButton>
                    {icon && <Icons icon={icon} />}
                    {title ? title : null}
                </IconButton>
            </WithTooltip>
        );
    };