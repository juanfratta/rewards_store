import Skeleton from 'react-loading-skeleton';

const SkeletonCardList = () => {
  return Array(16)
    .fill()
    .map((skeleton, index) => <Skeleton key={index} height={'100%'} />);
};

export default SkeletonCardList;
