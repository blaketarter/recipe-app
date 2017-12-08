import * as React from 'react';
import { SFC } from 'react';
import { NavLink } from 'react-router-dom';
import MdEdit from 'react-icons/lib/md/edit';
import styled from 'styled-components';

const EditButton: SFC<Props> = ({ recipeId }: Props) => {
  return (
    <StyledLink to={`/recipe/${recipeId}/edit`}>
      <MdEdit size={24} />
    </StyledLink>
  );
};

interface Props {
  recipeId: string,
}

const StyledLink = styled(NavLink) `
  color: inherit;
`;

export default EditButton;
