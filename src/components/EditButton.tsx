import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { RouterChildContext } from 'react-router-dom';
import MdEdit from 'react-icons/lib/md/edit';

interface Props { };
interface Params { };

const EditButton: SFC<Props> = ({}: Props, { router }: RouterChildContext<Params>) => {
  return (<MdEdit size={24} />);
}

EditButton.contextTypes = {
  router: PropTypes.object,
};

export default EditButton;
