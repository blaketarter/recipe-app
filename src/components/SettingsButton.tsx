import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { RouterChildContext } from 'react-router-dom';
import  MdSettings from 'react-icons/lib/md/settings';

interface Props { };
interface Params { };

const SettingsButton: SFC<Props> = ({}: Props, { router }: RouterChildContext<Params>) => {
  return (< MdSettings size={24} onClick={() => router.history.push('/profile')} />);
}

SettingsButton.contextTypes = {
  router: PropTypes.object,
};

export default SettingsButton;
