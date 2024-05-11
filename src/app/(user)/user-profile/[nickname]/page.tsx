import React from 'react';

import Main from '@/components/modules/Profile/Main';

const UserProfile = ({ params }: { params: { nickname: string } }) => {
  return <Main params={params} />;
};

export default UserProfile;
