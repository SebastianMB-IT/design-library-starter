/**
 *
 * It can be used to render a label.
 *
 * @param label - The label to render
 * 
 */

import React, { FC, ComponentProps } from 'react';
import classNames from 'classnames';
import { useTheme } from '../../theme/Context';
import { cleanClassName } from '../../helper/clean';

export interface LabelProps extends ComponentProps<'div'> {
  label?: string;
}

export const Label: FC<LabelProps> = ({ label, ...props }) => {
  const { label: theme } = useTheme().theme;
  const cleanProps = cleanClassName(props);

  return (
    <div className={classNames(theme.base)} {...cleanProps}>
      {label}
    </div>
  );
};
