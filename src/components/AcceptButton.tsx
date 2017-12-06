import * as React from 'react';
import { SFC, ReactSVGElement, MouseEvent } from 'react';
import MdCheck from 'react-icons/lib/md/check';

interface Props {
  onClick: (e: MouseEvent<ReactSVGElement>) => void;
};

const AcceptButton: SFC<Props> = ({ onClick }: Props) => {
  return (
    <MdCheck size={24} onClick={onClick} />
  );
}

export default AcceptButton;
