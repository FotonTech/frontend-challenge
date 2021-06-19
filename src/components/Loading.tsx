import { FC } from 'react';
import ReactLoading, { LoadingType } from 'react-loading';

interface LoadingProps {
  type: LoadingType;
  color: string;
}

const Loading: FC<LoadingProps> = (props) => (
  <ReactLoading type={props.type} color={props.color} height={'20%'} width={'20%'} />
);

export default Loading;