import * as React from 'react';
import { SFC, ReactSVGElement, MouseEvent } from 'react';
import MdCheck from 'react-icons/lib/md/check';

const AcceptButton: SFC<Props> = ({ onClick }: Props) => {
  return (
    <MdCheck size={24} onClick={onClick} />
  );
};

interface Props {
  onClick: (e: MouseEvent<ReactSVGElement>) => void,
}

export default AcceptButton;
