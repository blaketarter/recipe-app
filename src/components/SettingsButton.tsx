import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { RouterChildContext } from 'react-router-dom';
import MdSettings from 'react-icons/lib/md/settings';

const SettingsButton: SFC<Props> = ({}: Props, { router }: RouterChildContext<Params>) => {
  return (< MdSettings size={24} onClick={() => router.history.push('/profile')} />);
}

SettingsButton.contextTypes = {
  router: PropTypes.object,
};

interface Props { };
interface Params { };

export default SettingsButton;
