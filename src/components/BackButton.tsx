import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { RouterChildContext } from 'react-router-dom';
import MdArrowBack from 'react-icons/lib/md/arrow-back';

const BackButton: SFC<Props> = ({ }: Props, { router }: RouterChildContext<Params>) => {
  return (<MdArrowBack size={24} onClick={router.history.goBack} />);
};

BackButton.contextTypes = {
  router: PropTypes.object,
};

interface Props { }
interface Params { }

export default BackButton;
