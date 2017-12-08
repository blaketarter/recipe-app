import * as React from 'react';
import { SFC } from 'react';
import * as PropTypes from 'prop-types';
import { RouterChildContext, NavLink } from 'react-router-dom';
import MdEdit from 'react-icons/lib/md/edit';
import styled from 'styled-components';


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

interface Props {
  recipeId: string;
};

interface Params { };

const StyledLink = styled(NavLink) `
  color: inherit;
`;

export default EditButton;
