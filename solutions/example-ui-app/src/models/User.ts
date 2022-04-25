import { IconProps } from '@awsui/components-react/icon';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: IconProps;
  claims: string[];
}

export const unknownUser: User = {
  id: 'sample-id',
  name: 'Sample User',
  email: 'sample.user@amazon.com',
  avatar: { name: 'user-profile' },
  claims: []
};