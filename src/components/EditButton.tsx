import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { RouterChildContext, NavLink } from 'react-router-dom';
import MdEdit from 'react-icons/lib/md/edit';
import styled from 'styled-components';

interface Props {
  recipeId: string;
};

interface Params { };

const EditButton: SFC<Props> = ({ recipeId }: Props, { router }: RouterChildContext<Params>) => {
  return (
    <StyledLink to={`/recipe/${recipeId}/edit`}>
      <MdEdit size={24} />
    </StyledLink>
  );
}

EditButton.contextTypes = {
  router: PropTypes.object,
};

const StyledLink = styled(NavLink) `
  color: inherit;
`;

export default EditButton;
